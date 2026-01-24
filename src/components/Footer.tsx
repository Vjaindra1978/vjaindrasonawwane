import { Linkedin, Mail, Phone, BadgeCheck, GraduationCap } from "lucide-react";

const certifications = [
  "Six Sigma Green Belt",
  "Six Sigma Black Belt",
  "Six Sigma Master Black Belt",
  "Agile Scrum Master",
  "Certified Prince2 Professional (Foundation & Practitioner)",
  "TOGAF 10",
  "ITIL V3",
  "Business Analyst - RPA",
  "PMP Training Certification, 35 PDU",
  "Business Process Management Training",
  "Certified ISO 27001",
  "Certified ISO 27701",
  "7 Habits of Outstanding Customer Service",
  "Design Thinking",
  "ITP Membership – New Zealand",
];

const academicEducations = [
  "Master of Business Administration in Hotel Operations | Arunodaya University, India",
  "Master Diploma in Operations & Project Management | IICT Lucknow, India",
  "PG Diploma in Business Management | AIIMAS (All India Institute of Management Studies), India",
  "Bachelor in Hotel Management & Catering Technology | Bharati Vidyapeeth, Pune, India",
];

const exploreLinks = ["Impact", "Capabilities", "Insights", "Publications", "Connect"];

export function Footer() {
  return (
    <footer id="connect" className="bg-card border-t-2 border-primary/30 py-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <span className="font-display text-xl text-foreground block mb-3">
              Vjaindra Sonawwane
            </span>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Strategic IT & Digital Transformation Leader with 20+ years of international experience.
            </p>
            <div className="flex gap-2">
              <a
                href="https://linkedin.com/in/vjaindra-sonawwane"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:vjaindra.sonawwane@gmail.com"
                className="w-8 h-8 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+971527451378"
                className="w-8 h-8 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-sm font-bold tracking-[0.15em] uppercase text-foreground mb-4">Explore</h4>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BadgeCheck className="w-4 h-4 text-primary" />
              <h4 className="text-sm font-bold tracking-[0.15em] uppercase text-foreground">Certifications</h4>
            </div>
            <ul className="space-y-1.5 max-h-52 overflow-y-auto pr-2 scrollbar-thin">
              {certifications.map((cert, index) => (
                <li key={index} className="text-muted-foreground text-xs leading-relaxed hover:text-foreground transition-colors">
                  • {cert}
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Education */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-4 h-4 text-primary" />
              <h4 className="text-sm font-bold tracking-[0.15em] uppercase text-foreground">Education</h4>
            </div>
            <ul className="space-y-2">
              {academicEducations.map((edu, index) => (
                <li key={index} className="text-muted-foreground text-xs leading-relaxed hover:text-foreground transition-colors">
                  • {edu}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Vjaindra Sonawwane. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">Auckland, New Zealand • Dubai, UAE • Mumbai, India</p>
        </div>
      </div>
    </footer>
  );
}
