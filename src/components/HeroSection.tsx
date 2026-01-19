import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "/lovable-uploads/538e29bd-39b6-4a3c-a7ff-27aa2a81f6fb.jpg";

export function HeroSection() {
  const scrollToImpact = () => {
    const element = document.querySelector("#impact");
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6"
            >
              Strategic IT & Digital Transformation
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.1] mb-8"
            >
              Transforming
              <br />
              <span className="text-gradient-gold">Enterprises</span>
              <br />
              Through Technology
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-muted-foreground max-w-md mb-10 leading-relaxed"
            >
              20+ years directing enterprise-wide digital transformation, 
              ERP modernization, and cloud innovation across global markets.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button variant="hero" size="lg" onClick={scrollToImpact}>
                View Impact
              </Button>
              <Button variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </motion.div>

            {/* Stats - Minimal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex gap-12 pt-8 border-t border-border"
            >
              <div>
                <p className="font-display text-3xl text-foreground">20+</p>
                <p className="text-xs text-muted-foreground tracking-wider uppercase mt-1">Years</p>
              </div>
              <div>
                <p className="font-display text-3xl text-foreground">350+</p>
                <p className="text-xs text-muted-foreground tracking-wider uppercase mt-1">Sites</p>
              </div>
              <div>
                <p className="font-display text-3xl text-foreground">40%</p>
                <p className="text-xs text-muted-foreground tracking-wider uppercase mt-1">Cost Savings</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Vjaindra Sonawwane"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Accent Line */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-accent" />
              
              {/* Social Links */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                <a
                  href="https://linkedin.com/in/vjaindra-sonawwane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-border bg-background hover:border-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-foreground" />
                </a>
                <a
                  href="mailto:vjaindra.sonawwane@gmail.com"
                  className="w-10 h-10 flex items-center justify-center border border-border bg-background hover:border-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 text-foreground" />
                </a>
                <a
                  href="tel:+971527451378"
                  className="w-10 h-10 flex items-center justify-center border border-border bg-background hover:border-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 text-foreground" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center pb-8"
        >
          <button
            onClick={scrollToImpact}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
