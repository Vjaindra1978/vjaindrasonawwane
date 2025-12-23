import { ArrowRight, Linkedin, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpeg";
import profilePhoto from "/lovable-uploads/538e29bd-39b6-4a3c-a7ff-27aa2a81f6fb.jpg";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Full Background Image - Natural Coverage */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">
              20+ Years of Enterprise Transformation Leadership
            </span>
          </div>

          {/* Profile Photo + Name Container */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            {/* Round Profile Photo */}
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary via-gold to-gold-dark blur-lg opacity-60" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-gold opacity-40" />
              <img
                alt="Vjaindra Sonawwane - Strategic IT & Digital Transformation Leader"
                className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover object-top border-4 border-primary/50 shadow-2xl ring-4 ring-gold/30"
                src={profilePhoto}
              />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center shadow-lg">
                <span className="text-xs font-bold text-primary-foreground">✓</span>
              </div>
            </div>

            {/* Name beside photo */}
            <div className="text-center sm:text-left">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">
                Vjaindra Sonawane
              </h2>
              <p className="text-primary font-medium text-sm sm:text-base">
                Strategic IT & Digital Transformation Leader
              </p>
            </div>
          </div>

          {/* Main Headline */}
          <h1
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up"
            style={{
              animationDelay: "0.2s",
            }}
          >
            Driving <span className="text-gradient-gold">Enterprise Digital</span>
            <br />
            Transformation & Growth
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-up font-body"
            style={{
              animationDelay: "0.3s",
            }}
          >
            Strategic advisory leadership across IT strategy, enterprise architecture, automation, cloud platforms, data
            analytics, and customer experience innovation for global enterprises.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up"
            style={{
              animationDelay: "0.4s",
            }}
          >
            <Button variant="hero" size="xl" className="group" onClick={() => scrollToSection("challenge")}>
              Discuss a Transformation Challenge
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => scrollToSection("capabilities")}>
              Explore Strategic Capabilities
            </Button>
          </div>

          {/* Quick Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto animate-fade-up"
            style={{
              animationDelay: "0.5s",
            }}
          >
            {[
              {
                value: "350+",
                label: "Sites Transformed",
              },
              {
                value: "40%",
                label: "Cost Optimization",
              },
              {
                value: "99.9%",
                label: "System Uptime",
              },
              {
                value: "60%",
                label: "Process Automation",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-card/30 backdrop-blur-sm rounded-xl border border-border/30"
              >
                <div className="text-3xl sm:text-4xl font-display font-bold text-gradient-gold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div
            className="flex items-center justify-center gap-4 mt-8 animate-fade-up"
            style={{
              animationDelay: "0.6s",
            }}
          >
            <a
              href="https://linkedin.com/in/vjaindra-sonawwane"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:vjaindra.sonawwane@gmail.com"
              className="w-12 h-12 rounded-full border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#connect"
              className="w-12 h-12 rounded-full border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
}
