import { useState } from "react";
import { Send, Building2, Layers, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    organizationType: "",
    functionalArea: "",
    challenge: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Since there's no backend, show a toast message
    toast({
      title: "Challenge Received",
      description: "Thank you for sharing your transformation challenge. In a production environment, this would be stored and I would respond with insights.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      organization: "",
      organizationType: "",
      functionalArea: "",
      challenge: "",
    });
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Share Your Challenge
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Let's Decode Your{' '}
              <span className="text-gradient-gold">Transformation</span> Problem
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Whether you're facing IT modernization hurdles, struggling with digital 
              adoption, or need strategic guidance on your transformation journey—share 
              your challenge and receive expert insights.
            </p>

            {/* What I Help With */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Common Challenges I Address:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Legacy system modernization",
                  "Cloud migration strategy",
                  "ERP/CRM implementation",
                  "Data silos & integration",
                  "Process automation gaps",
                  "Customer experience gaps",
                  "IT governance issues",
                  "Digital transformation roadmap",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 p-6 bg-card border border-border rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Confidential & Professional</span>
              </div>
              <p className="text-muted-foreground text-sm">
                All submissions are treated with strict confidentiality. Your organizational 
                details and challenges are used solely for providing relevant advisory insights.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="min-h-[150px]"
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                  required
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Submit Challenge
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
