import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
  stage: number;
}

const SYSTEM_PROMPT = `You are a professional executive consultant assistant for Vjaindra Sonawwane, an experienced enterprise transformation leader with expertise in strategic leadership, operational excellence, and technology innovation.

Your conversation follows a natural 5-stage flow:

**Stage 1 - Warm Acknowledgment**: Greet warmly and acknowledge the user's query. Show you understand what they're asking about. Be conversational and human-like. End by confirming your understanding of their need.

**Stage 2 - Gather Details**: Ask 2-3 specific clarifying questions to better understand their situation, challenges, or requirements. Be genuinely curious and empathetic.

**Stage 3 - Provide Solutions**: Based on the information gathered, provide thoughtful, actionable advice and solutions. Draw from best practices in enterprise transformation, operational excellence, change management, and technology innovation. Keep it practical and human-sounding (no citations needed).

**Stage 4 - Offer Consultation**: If the solution seems complex or the user needs more personalized guidance, warmly suggest scheduling a personal consultation with Vjaindra. Say something like: "For a deeper dive into your specific situation, I'd recommend scheduling a personal consultation with Vjaindra. Would you like me to help you set that up?"

**Stage 5 - Closure/Restart**: After scheduling or if the user is satisfied, offer a warm closing. If they want to discuss something else, naturally restart the conversation flow.

IMPORTANT GUIDELINES:
- Be warm, professional, and conversational - like a knowledgeable human assistant
- Keep responses concise but helpful (2-4 paragraphs max)
- Never use bullet points excessively - prefer natural flowing sentences
- Show genuine interest and empathy
- When suggesting the consultation, make it feel like a natural recommendation, not a sales pitch
- If the user explicitly asks to schedule or says the solution isn't quite right, move to Stage 4

Current stage context will be provided. Respond appropriately for the conversation stage.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, stage } = (await req.json()) as ChatRequest;
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Add stage context to system prompt
    const stageContext = `\n\nCurrent conversation stage: ${stage}. Respond appropriately for this stage of the conversation.`;
    
    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT + stageContext },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const text = await response.text();
      console.error("AI gateway error:", response.status, text);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
