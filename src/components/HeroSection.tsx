import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "/lovable-uploads/538e29bd-39b6-4a3c-a7ff-27aa2a81f6fb.jpg";
import heroBg from "@/assets/hero-bg.jpeg";

const RESUME_URL = "/Vjaindra_Sonawwane_Resume.pdf";

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
    <section className="min-h-[90vh] flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Image - Full visible with proper aspect ratio */}
      <div 
        className="absolute inset-0 bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/45 via-background/40 to-background/50 dark:from-background/50 dark:via-background/45 dark:to-background/55" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-10">
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
              className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
            >
              Strategic IT & Digital Transformation
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-6"
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
              className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed"
            >
              20+ years directing enterprise-wide digital transformation, 
              ERP modernization, and cloud innovation across global markets.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button variant="hero" size="lg" onClick={scrollToImpact}>
                View Impact
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={RESUME_URL} download="Vjaindra_Sonawwane_Resume.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            {/* Stats - Minimal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex gap-10 pt-6 border-t border-border"
            >
              <div>
                <p className="font-display text-3xl text-foreground">20+</p>
                <p className="text-sm text-muted-foreground tracking-wider uppercase mt-1">Years</p>
              </div>
              <div>
                <p className="font-display text-3xl text-foreground">350+</p>
                <p className="text-sm text-muted-foreground tracking-wider uppercase mt-1">Sites</p>
              </div>
              <div>
                <p className="font-display text-3xl text-foreground">40%</p>
                <p className="text-sm text-muted-foreground tracking-wider uppercase mt-1">Cost Savings</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end mt-[2in]"
          >
            <div className="relative">
              {/* Double Gold Border Container */}
              <div className="relative p-2">
                {/* Outer animated border */}
                <div className="absolute inset-0 border-2 border-primary animate-pulse-glow" />
                {/* Inner border with gap */}
                <div className="absolute inset-[6px] border-2 border-primary/70 animate-border-glow" />
                
                {/* Main Image - Portrait aspect ratio */}
                <div className="w-64 sm:w-72 lg:w-80 aspect-[3/4] overflow-hidden relative z-10 m-3">
                  <img
                    src={profilePhoto}
                    alt="Vjaindra Sonawwane"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Corner Accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/50" />
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border border-primary/30" />
              
              {/* Social Links */}
              <div className="absolute -left-5 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                <a
                  href="https://linkedin.com/in/vjaindra-sonawwane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-border bg-background hover:border-primary hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:vjaindra.sonawwane@gmail.com"
                  className="w-9 h-9 flex items-center justify-center border border-border bg-background hover:border-primary hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="tel:+971527451378"
                  className="w-9 h-9 flex items-center justify-center border border-border bg-background hover:border-primary hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
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
          className="flex justify-center pb-4"
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
