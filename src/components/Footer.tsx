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

const exploreLinks = ["Impact", "Capabilities", "Insights", "Publications", "Podcast", "Connect"];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">V</span>
              </div>
              <span className="font-display text-lg font-semibold text-foreground">Vjaindra Sonawwane</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Strategic IT & Digital Transformation Leader with 20+ years of international experience driving enterprise innovation and growth.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/vjaindra-sonawwane"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:vjaindra.sonawwane@gmail.com"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+971527451378"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
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
              <BadgeCheck className="w-5 h-5 text-primary" />
              <h4 className="font-semibold text-foreground">Certifications</h4>
            </div>
            <ul className="space-y-1.5 max-h-64 overflow-y-auto pr-2">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-xs leading-relaxed">{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Education */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h4 className="font-semibold text-foreground">Academic Education</h4>
            </div>
            <ul className="space-y-3">
              {academicEducations.map((edu, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-xs leading-relaxed">{edu}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Vjaindra Sonawwane. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">Auckland, New Zealand • Dubai, UAE • Mumbai, India</p>
        </div>
      </div>
    </footer>
  );
}
