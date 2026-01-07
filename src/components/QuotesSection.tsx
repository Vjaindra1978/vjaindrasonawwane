import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const quotes = [
  {
    text: "Digital transformation is not about technology—it's about reimagining how we create value for customers and stakeholders.",
    author: "Vjaindra Sonawwane",
    role: "Personal Reflection",
  },
  {
    text: "The best architecture is invisible. It empowers teams to innovate without thinking about infrastructure.",
    author: "Vjaindra Sonawwane",
    role: "On Enterprise Architecture",
  },
  {
    text: "Automation should liberate human potential, not replace human purpose. Focus on augmenting, not eliminating.",
    author: "Vjaindra Sonawwane",
    role: "On RPA & Automation",
  },
  {
    text: "Data without insight is just noise. The goal is to turn information into action.",
    author: "Vjaindra Sonawwane",
    role: "On Analytics",
  },
  {
    text: "Customer experience is the new battleground. Every touchpoint is an opportunity to build loyalty.",
    author: "Vjaindra Sonawwane",
    role: "On CX Innovation",
  },
];

const curatedQuotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    role: "Apple Co-founder",
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    role: "Apple Co-founder",
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
    role: "Traditional Wisdom",
  },
];

export function QuotesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"personal" | "curated">("personal");

  const activeQuotes = activeTab === "personal" ? quotes : curatedQuotes;
  const currentQuote = activeQuotes[currentIndex];

  const nextQuote = () => {
    setCurrentIndex((prev) => (prev + 1) % activeQuotes.length);
  };

  const prevQuote = () => {
    setCurrentIndex((prev) => (prev - 1 + activeQuotes.length) % activeQuotes.length);
  };

  const handleTabChange = (tab: "personal" | "curated") => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  return (
    <section id="insights" className="py-10 bg-card/30">
      <div className="container mx-auto px-5">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-6">
          <span className="text-primary font-semibold text-xs uppercase tracking-wider mb-2 block">Perspectives</span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">
            Insights & <span className="text-gradient-gold">Reflections</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Thoughts on leadership, technology, and the art of transformation.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-2 mb-6">
          <Button
            variant={activeTab === "personal" ? "default" : "outline"}
            onClick={() => handleTabChange("personal")}
          >
            My Perspectives
          </Button>
          <Button variant={activeTab === "curated" ? "default" : "outline"} onClick={() => handleTabChange("curated")}>
            Curated Wisdom
          </Button>
        </div>

        {/* Quote Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-card border border-border rounded-2xl p-6 md:p-8">
            {/* Quote Icon */}
            <div className="absolute -top-4 left-8">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-gold">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>

            {/* Quote Content */}
            <div className="text-center pt-2">
              <blockquote className="font-display text-lg md:text-xl lg:text-2xl font-medium text-foreground leading-relaxed mb-4">
                "{currentQuote.text}"
              </blockquote>

              <div className="flex flex-col items-center">
                <span className="font-semibold text-foreground text-sm">{currentQuote.author}</span>
                <span className="text-muted-foreground text-xs">{currentQuote.role}</span>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <Button variant="outline" size="icon" onClick={prevQuote} className="rounded-full">
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {activeQuotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <Button variant="outline" size="icon" onClick={nextQuote} className="rounded-full">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
