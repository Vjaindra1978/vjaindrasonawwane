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

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">V</span>
              </div>
              <span className="font-display text-xl font-semibold text-foreground">
                Vjaindra Sonawane
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Strategic IT & Digital Transformation Leader with 20+ years of 
              international experience driving enterprise innovation and growth.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/vjaindra-sonawwane"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:vjaindra.sonawwane@gmail.com"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+971527451378"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-3">
              {["Impact", "Capabilities", "Insights", "Publications", "Podcast", "Connect"].map((link) => (
                <li key={link}>
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
            <div className="flex flex-wrap gap-1.5">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Academic Education */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h4 className="font-semibold text-foreground">Academic Education</h4>
            </div>
            <ul className="space-y-3">
              {academicEducations.map((edu, index) => (
                <li key={index} className="text-muted-foreground text-sm leading-relaxed">
                  {edu}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Vjaindra Sonawane. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Auckland, New Zealand • Dubai, UAE • Mumbai, India
          </p>
        </div>
      </div>
    </footer>
  );
}
