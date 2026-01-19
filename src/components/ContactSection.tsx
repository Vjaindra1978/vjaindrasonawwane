import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Calendar, MapPin, Phone, Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ConsultationScheduler } from "./ConsultationScheduler";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_n1s3igu";
const EMAILJS_TEMPLATE_ID = "template_alsnpb5";
const EMAILJS_PUBLIC_KEY = "OLEkUD0cAHdwJIaGr";

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
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
    setErrors({ ...errors, [field]: validateField(field, formData[field as keyof typeof formData]) });
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (touched[field]) setErrors({ ...errors, [field]: validateField(field, value) });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field as keyof typeof formData]);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    setTouched({ name: true, email: true, subject: true, message: true });
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
        subject: formData.subject,
        time: new Date().toLocaleString(),
        message: formData.message,
        to_name: "Vjaindra Sonawwane",
      }, EMAILJS_PUBLIC_KEY);

      setIsSuccess(true);
      toast({ title: "Message Sent!", description: "I'll respond within 24-48 hours." });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSuccess(false), 4000);
    } catch (error) {
      toast({ title: "Failed to Send", description: "Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="connect" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Let's <span className="text-gradient-gold">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether you're looking for strategic guidance, collaboration opportunities, or simply want to discuss technology and transformation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <a href="mailto:vjaindra.sonawwane@gmail.com" className="flex items-center gap-4 p-4 border border-border hover:border-foreground transition-colors">
                <Mail className="w-5 h-5 text-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm text-foreground">vjaindra.sonawwane@gmail.com</p>
                </div>
              </a>
              <a href="https://linkedin.com/in/vjaindra-sonawwane" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-border hover:border-foreground transition-colors">
                <Linkedin className="w-5 h-5 text-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="text-sm text-foreground">linkedin.com/in/vjaindra-sonawwane</p>
                </div>
              </a>
              <a href="tel:+971527451378" className="flex items-center gap-4 p-4 border border-border hover:border-foreground transition-colors">
                <Phone className="w-5 h-5 text-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm text-foreground">+971 527451378</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 border border-border">
                <MapPin className="w-5 h-5 text-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm text-foreground">Auckland, New Zealand</p>
                </div>
              </div>
            </div>

            {/* Schedule Meeting */}
            <div className="border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-foreground" />
                <h4 className="font-display text-lg text-foreground">Schedule Consultation</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Book a 30-minute discovery call to discuss your needs.
              </p>
              <Button variant="outline" className="w-full" onClick={() => setIsSchedulerOpen(true)}>
                Book Meeting
              </Button>
            </div>

            <ConsultationScheduler isOpen={isSchedulerOpen} onClose={() => setIsSchedulerOpen(false)} />
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="border border-border p-8 lg:p-10">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="w-16 h-16 text-accent mb-6" />
                    <h4 className="font-display text-2xl text-foreground mb-2">Message Sent</h4>
                    <p className="text-muted-foreground">I'll respond within 24-48 hours.</p>
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
                      <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">Subject</label>
                      <Input placeholder="How can I help?" value={formData.subject} onChange={(e) => handleChange("subject", e.target.value)} onBlur={() => handleBlur("subject")} className={errors.subject && touched.subject ? "border-destructive" : ""} />
                    </div>

                    <div>
                      <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">Message</label>
                      <Textarea placeholder="Tell me about your inquiry..." value={formData.message} onChange={(e) => handleChange("message", e.target.value)} onBlur={() => handleBlur("message")} className={`min-h-[150px] ${errors.message && touched.message ? "border-destructive" : ""}`} />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Sending...</> : <>Send Message<Send className="w-4 h-4 ml-2" /></>}
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
