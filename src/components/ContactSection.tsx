import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Calendar, MapPin, Phone, Send, MessageSquare, Loader2, CheckCircle, Sparkles } from "lucide-react";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (field: string, value: string) => {
    if (!value.trim()) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
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
    setTouched({ name: true, email: true, subject: true, message: true });
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
          subject: formData.subject,
          time: currentDateTime,
          message: formData.message,
          to_name: "Vjaindra Sonawwane",
        },
        EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll respond within 24-48 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
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
    <section id="connect" className="py-16 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Let's{' '}
            <span className="text-gradient-gold">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether you're looking for strategic guidance, collaboration opportunities, 
            or simply want to discuss technology and transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <a
                href="mailto:vjaindra.sonawwane@gmail.com"
                className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">vjaindra.sonawwane@gmail.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/vjaindra-sonawwane"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Linkedin className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium text-foreground">linkedin.com/in/vjaindra-sonawwane</p>
                </div>
              </a>

              <a
                href="tel:+971527451378"
                className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">+971 527451378</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">Auckland, New Zealand</p>
                </div>
              </div>
            </div>

            {/* Schedule Meeting CTA */}
            <div className="bg-gradient-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-primary" />
                <h4 className="font-display text-lg font-semibold text-foreground">
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
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
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
                      Message Sent!
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-muted-foreground"
                    >
                      Thank you for reaching out. I'll respond within 24-48 hours.
                    </motion.p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <MessageSquare className="w-6 h-6 text-primary" />
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        Send a Message
                      </h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
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

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Subject
                        </label>
                        <Input
                          placeholder="How can I help you?"
                          value={formData.subject}
                          onChange={(e) => handleChange("subject", e.target.value)}
                          onBlur={() => handleBlur("subject")}
                          className={errors.subject && touched.subject ? "border-destructive focus-visible:ring-destructive" : ""}
                        />
                        {errors.subject && touched.subject && (
                          <p className="text-destructive text-xs mt-1">{errors.subject}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Message
                        </label>
                        <Textarea
                          placeholder="Tell me about your inquiry, project, or collaboration idea..."
                          className={`min-h-[150px] ${errors.message && touched.message ? "border-destructive focus-visible:ring-destructive" : ""}`}
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          onBlur={() => handleBlur("message")}
                        />
                        {errors.message && touched.message && (
                          <p className="text-destructive text-xs mt-1">{errors.message}</p>
                        )}
                      </div>

                      <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
