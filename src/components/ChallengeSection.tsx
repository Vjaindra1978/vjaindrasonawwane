import { useState } from "react";
import { Send, Building2, Layers, AlertCircle, Mail, Linkedin, Calendar, MapPin, Phone, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ConsultationScheduler } from "./ConsultationScheduler";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_n1s3igu";
const EMAILJS_TEMPLATE_ID = "template_3q6yu61";
const EMAILJS_PUBLIC_KEY = "OLEkUD0cAHdwJIaGr";

const functionalAreas = [
  "IT Strategy & Governance",
  "Enterprise Architecture",
  "ERP & System Modernization",
  "Cloud & Infrastructure",
  "Data & Analytics",
  "Automation & RPA",
  "Customer Experience",
  "Cybersecurity & Compliance",
  "Digital Transformation",
  "Other",
];

const organizationTypes = [
  "Enterprise (1000+ employees)",
  "Mid-Market (100-999 employees)",
  "SMB (Under 100 employees)",
  "Startup",
  "Government / Public Sector",
  "Non-Profit",
];

export function ChallengeSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    organizationType: "",
    functionalArea: "",
    challenge: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const currentDateTime = new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          from_email: formData.email,
          subject: "Transformation Challenge",
          time: currentDateTime,
          message: `Organization: ${formData.organization}\nOrganization Type: ${formData.organizationType}\nFunctional Area: ${formData.functionalArea}\n\nChallenge:\n${formData.challenge}`,
          to_name: "Vjaindra Sonawwane",
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Challenge Received!",
        description: "Thank you for sharing your transformation challenge. I will respond with insights shortly.",
      });

      setFormData({
        name: "",
        email: "",
        organization: "",
        organizationType: "",
        functionalArea: "",
        challenge: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to Send",
        description: "Something went wrong. Please try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="challenge" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Let's Connect
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Let's Decode Your{' '}
            <span className="text-gradient-gold">Transformation</span> Problem
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether you're facing IT modernization hurdles, struggling with digital 
            adoption, or need strategic guidance on your transformation journey—share 
            your challenge and receive expert insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Left Content - Contact Info & Challenges */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Contact Cards */}
            <div className="space-y-3">
              <a
                href="mailto:vjaindra.sonawwane@gmail.com"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground text-sm">vjaindra.sonawwane@gmail.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/vjaindra-sonawwane"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Linkedin className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="font-medium text-foreground text-sm">linkedin.com/in/vjaindra-sonawwane</p>
                </div>
              </a>

              <a
                href="tel:+971527451378"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground text-sm">+971 527451378</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground text-sm">Auckland, New Zealand</p>
                </div>
              </div>
            </div>

            {/* Schedule Consultation CTA */}
            <div className="bg-gradient-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-5 h-5 text-primary" />
                <h4 className="font-display text-base font-semibold text-foreground">
                  Schedule a Consultation
                </h4>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Book a 30-minute discovery call to discuss your transformation challenges.
              </p>
              <Button 
                variant="hero" 
                className="w-full"
                onClick={() => setIsSchedulerOpen(true)}
              >
                Book Meeting
              </Button>
            </div>

            <ConsultationScheduler 
              isOpen={isSchedulerOpen} 
              onClose={() => setIsSchedulerOpen(false)} 
            />

            {/* Trust Indicator */}
            <div className="p-5 bg-card border border-border rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <AlertCircle className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground text-sm">Confidential & Professional</span>
              </div>
              <p className="text-muted-foreground text-xs">
                All submissions are treated with strict confidentiality. Your organizational 
                details and challenges are used solely for providing relevant advisory insights.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Share Your Transformation Challenge
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Organization */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Building2 className="w-4 h-4 inline mr-2" />
                    Organization Name
                  </label>
                  <Input
                    placeholder="Your Company"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    required
                  />
                </div>

                {/* Organization Type */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Organization Type
                  </label>
                  <select
                    className="w-full h-10 px-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                    value={formData.organizationType}
                    onChange={(e) => setFormData({ ...formData, organizationType: e.target.value })}
                    required
                  >
                    <option value="">Select type...</option>
                    {organizationTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Functional Area */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Layers className="w-4 h-4 inline mr-2" />
                    Functional Area
                  </label>
                  <select
                    className="w-full h-10 px-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                    value={formData.functionalArea}
                    onChange={(e) => setFormData({ ...formData, functionalArea: e.target.value })}
                    required
                  >
                    <option value="">Select area...</option>
                    {functionalAreas.map((area) => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </select>
                </div>

                {/* Challenge Description */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Describe Your Challenge
                  </label>
                  <Textarea
                    placeholder="Tell me about your transformation challenge, pain points, or areas where you need strategic guidance..."
                    className="min-h-[120px]"
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Challenge
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
