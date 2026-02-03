import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Building2, Layers, Mail, Linkedin, Calendar, MapPin, Phone, Loader2, CheckCircle } from "lucide-react";
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

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateField = (field: string, value: string) => {
    if (!value.trim()) return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    if (field === "email" && !validateEmail(value)) return "Please enter a valid email";
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
    setTouched(Object.fromEntries(Object.keys(formData).map(k => [k, true])));
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: formData.name,
        from_email: formData.email,
        subject: "Transformation Challenge",
        time: new Date().toLocaleString(),
        message: `Organization: ${formData.organization}\nType: ${formData.organizationType}\nArea: ${formData.functionalArea}\n\nChallenge:\n${formData.challenge}`,
        to_name: "Vjaindra Sonawwane",
      }, EMAILJS_PUBLIC_KEY);

      setIsSuccess(true);
      toast({ title: "Challenge Received!", description: "I will respond with insights shortly." });
      setFormData({ name: "", email: "", organization: "", organizationType: "", functionalArea: "", challenge: "" });
      setTimeout(() => setIsSuccess(false), 4000);
    } catch (error) {
      toast({ title: "Failed to Send", description: "Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="challenge" className="py-10 lg:py-12 bg-card">
      <div className="container mx-auto px-2 sm:px-3 lg:px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-10"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
            Let's Connect
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-foreground mb-3">
            Share Your <span className="text-gradient-gold">Challenge</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Whether you're facing IT modernization hurdles or need strategic guidance on your transformation journey—share your challenge and receive expert insights.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <a href="mailto:vjaindra.sonawwane@gmail.com" className="flex items-center gap-4 p-4 border-2 border-foreground/20 hover:border-foreground/40 transition-colors">
                <Mail className="w-5 h-5 text-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm text-foreground">vjaindra.sonawwane@gmail.com</p>
                </div>
              </a>
              <a href="https://linkedin.com/in/vjaindra-sonawwane" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border-2 border-foreground/20 hover:border-foreground/40 transition-colors">
                <Linkedin className="w-5 h-5 text-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="text-sm text-foreground">linkedin.com/in/vjaindra-sonawwane</p>
                </div>
              </a>
              <a href="tel:+971527451378" className="flex items-center gap-4 p-4 border-2 border-foreground/20 hover:border-foreground/40 transition-colors">
                <Phone className="w-5 h-5 text-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm text-foreground">+971 527451378</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 border-2 border-foreground/20">
                <MapPin className="w-5 h-5 text-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm text-foreground">Auckland, New Zealand</p>
                </div>
              </div>
            </div>

            {/* Schedule CTA */}
            <div className="border-2 border-foreground/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-foreground" />
                <h4 className="font-display text-lg text-foreground">Schedule Consultation</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Book a 30-minute discovery call to discuss your transformation challenges.
              </p>
              <Button variant="outline" className="w-full" onClick={() => setIsSchedulerOpen(true)}>
                Book Meeting
              </Button>
            </div>

            <ConsultationScheduler isOpen={isSchedulerOpen} onClose={() => setIsSchedulerOpen(false)} />
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <div className="border-2 border-foreground/20 p-8 lg:p-10">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-accent mb-6" />
                    <h4 className="font-display text-2xl text-foreground mb-2">Challenge Received</h4>
                    <p className="text-muted-foreground">Thank you. I'll respond with insights shortly.</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">Name</label>
                        <Input placeholder="Your name" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} onBlur={() => handleBlur("name")} className={errors.name && touched.name ? "border-destructive" : ""} />
                        {errors.name && touched.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">Email</label>
                        <Input type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} onBlur={() => handleBlur("email")} className={errors.email && touched.email ? "border-destructive" : ""} />
                        {errors.email && touched.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">Organization</label>
                      <Input placeholder="Company name" value={formData.organization} onChange={(e) => handleChange("organization", e.target.value)} onBlur={() => handleBlur("organization")} className={errors.organization && touched.organization ? "border-destructive" : ""} />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">Organization Type</label>
                        <select value={formData.organizationType} onChange={(e) => handleChange("organizationType", e.target.value)} onBlur={() => handleBlur("organizationType")} className={`w-full h-11 px-3 border bg-background text-foreground text-sm ${errors.organizationType && touched.organizationType ? "border-destructive" : "border-border"}`}>
                          <option value="">Select type</option>
                          {organizationTypes.map((type) => (<option key={type} value={type}>{type}</option>))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">Functional Area</label>
                        <select value={formData.functionalArea} onChange={(e) => handleChange("functionalArea", e.target.value)} onBlur={() => handleBlur("functionalArea")} className={`w-full h-11 px-3 border bg-background text-foreground text-sm ${errors.functionalArea && touched.functionalArea ? "border-destructive" : "border-border"}`}>
                          <option value="">Select area</option>
                          {functionalAreas.map((area) => (<option key={area} value={area}>{area}</option>))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">Your Challenge</label>
                      <Textarea placeholder="Describe your transformation challenge..." value={formData.challenge} onChange={(e) => handleChange("challenge", e.target.value)} onBlur={() => handleBlur("challenge")} className={`min-h-[120px] ${errors.challenge && touched.challenge ? "border-destructive" : ""}`} />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Sending...</> : <>Submit Challenge<Send className="w-4 h-4 ml-2" /></>}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
