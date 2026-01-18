import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Building2, Layers, AlertCircle, Mail, Linkedin, Calendar, MapPin, Phone, Loader2, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ConsultationScheduler } from "./ConsultationScheduler";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
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
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    organizationType: "",
    functionalArea: "",
    challenge: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (field: string, value: string) => {
    const fieldLabels: Record<string, string> = {
      name: "Name",
      email: "Email",
      organization: "Organization",
      organizationType: "Organization type",
      functionalArea: "Functional area",
      challenge: "Challenge description",
    };
    if (!value.trim()) {
      return `${fieldLabels[field]} is required`;
    }
    if (field === "email" && !validateEmail(value)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });
    const error = validateField(field, formData[field as keyof typeof formData]);
    setErrors({ ...errors, [field]: error });
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors({ ...errors, [field]: error });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field as keyof typeof formData]);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    setTouched({ name: true, email: true, organization: true, organizationType: true, functionalArea: true, challenge: true });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
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

      setIsSuccess(true);
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
      setTimeout(() => setIsSuccess(false), 4000);
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
        <ScrollReveal variant="fadeUp">
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
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Left Content - Contact Info & Challenges */}
          <ScrollReveal variant="slideRight" className="lg:col-span-2">
            <div className="space-y-8">
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
            <div className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary-foreground" />
                </div>
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
          </ScrollReveal>

          {/* Right Form */}
          <ScrollReveal variant="slideLeft" delay={0.2} className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6 relative"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <CheckCircle className="w-10 h-10 text-green-500" />
                      </motion.div>
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                          animate={{ 
                            opacity: [0, 1, 0], 
                            scale: [0, 1, 0.5],
                            x: Math.cos(i * 60 * Math.PI / 180) * 60,
                            y: Math.sin(i * 60 * Math.PI / 180) * 60
                          }}
                          transition={{ delay: 0.4 + i * 0.1, duration: 0.8 }}
                          className="absolute"
                        >
                          <Sparkles className="w-4 h-4 text-primary" />
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.h4
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="font-display text-2xl font-bold text-foreground mb-2"
                    >
                      Challenge Received!
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-muted-foreground"
                    >
                      Thank you for sharing. I'll respond with insights shortly.
                    </motion.p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
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
                            onChange={(e) => handleChange("name", e.target.value)}
                            onBlur={() => handleBlur("name")}
                            className={errors.name && touched.name ? "border-destructive focus-visible:ring-destructive" : ""}
                          />
                          {errors.name && touched.name && (
                            <p className="text-destructive text-xs mt-1">{errors.name}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Email Address
                          </label>
                          <Input
                            type="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            onBlur={() => handleBlur("email")}
                            className={errors.email && touched.email ? "border-destructive focus-visible:ring-destructive" : ""}
                          />
                          {errors.email && touched.email && (
                            <p className="text-destructive text-xs mt-1">{errors.email}</p>
                          )}
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
                          onChange={(e) => handleChange("organization", e.target.value)}
                          onBlur={() => handleBlur("organization")}
                          className={errors.organization && touched.organization ? "border-destructive focus-visible:ring-destructive" : ""}
                        />
                        {errors.organization && touched.organization && (
                          <p className="text-destructive text-xs mt-1">{errors.organization}</p>
                        )}
                      </div>

                      {/* Organization Type */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Organization Type
                        </label>
                        <select
                          className={`w-full h-10 px-3 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent ${
                            errors.organizationType && touched.organizationType ? "border-destructive" : "border-border"
                          }`}
                          value={formData.organizationType}
                          onChange={(e) => handleChange("organizationType", e.target.value)}
                          onBlur={() => handleBlur("organizationType")}
                        >
                          <option value="">Select type...</option>
                          {organizationTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                        {errors.organizationType && touched.organizationType && (
                          <p className="text-destructive text-xs mt-1">{errors.organizationType}</p>
                        )}
                      </div>

                      {/* Functional Area */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          <Layers className="w-4 h-4 inline mr-2" />
                          Functional Area
                        </label>
                        <select
                          className={`w-full h-10 px-3 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent ${
                            errors.functionalArea && touched.functionalArea ? "border-destructive" : "border-border"
                          }`}
                          value={formData.functionalArea}
                          onChange={(e) => handleChange("functionalArea", e.target.value)}
                          onBlur={() => handleBlur("functionalArea")}
                        >
                          <option value="">Select area...</option>
                          {functionalAreas.map((area) => (
                            <option key={area} value={area}>{area}</option>
                          ))}
                        </select>
                        {errors.functionalArea && touched.functionalArea && (
                          <p className="text-destructive text-xs mt-1">{errors.functionalArea}</p>
                        )}
                      </div>

                      {/* Challenge Description */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Describe Your Challenge
                        </label>
                        <Textarea
                          placeholder="Tell me about your transformation challenge, pain points, or areas where you need strategic guidance..."
                          className={`min-h-[120px] ${errors.challenge && touched.challenge ? "border-destructive focus-visible:ring-destructive" : ""}`}
                          value={formData.challenge}
                          onChange={(e) => handleChange("challenge", e.target.value)}
                          onBlur={() => handleBlur("challenge")}
                        />
                        {errors.challenge && touched.challenge && (
                          <p className="text-destructive text-xs mt-1">{errors.challenge}</p>
                        )}
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
