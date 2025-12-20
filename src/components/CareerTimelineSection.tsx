import { Briefcase, MapPin } from "lucide-react";

const careerData = [
  {
    period: "Apr 2024 – Present",
    role: "Contact Centre Management",
    company: "Auckland Taxi",
    location: "Auckland, New Zealand",
    highlights: ["Booking & dispatch optimization", "Contact center process improvements", "System integrations"],
  },
  {
    period: "Apr 2023 – Jul 2023",
    role: "General Manager IT",
    company: "Gourmet Investment Pvt. Ltd",
    location: "India",
    highlights: ["Digital & IT transformation", "ERP performance optimization", "Multi-brand strategy"],
  },
  {
    period: "Jan 2018 – Apr 2023",
    role: "Head of IT Projects, Program Manager & Digital Transformation",
    company: "Travel Food Services",
    location: "Mumbai, India",
    highlights: ["350+ retail & hospitality outlets", "Multi-year digital roadmap", "Cloud migration to Azure"],
  },
  {
    period: "Dec 2016 – Dec 2017",
    role: "Independent Consultant",
    company: "Citrus IT Solutions & Techno Labs",
    location: "India",
    highlights: ["IT strategy & architecture", "Technology roadmaps", "Digital maturity assessment"],
  },
  {
    period: "May 2015 – Sep 2016",
    role: "GM Information Technology",
    company: "Paradise Food Court",
    location: "Hyderabad, India",
    highlights: ["CRM & ERP integration", "Analytics-driven insights", "Digital payment solutions"],
  },
  {
    period: "Jun 2010 – Sep 2014",
    role: "IT Manager",
    company: "Landmark Group Hospitality (Food Mark)",
    location: "Dubai, UAE",
    highlights: ["Oracle CRM & ERP solutions", "Process automation", "Cross-functional alignment"],
  },
  {
    period: "Dec 2007 – May 2010",
    role: "Business Analyst – IT",
    company: "Nakheel Retail Corp",
    location: "Dubai, UAE",
    highlights: ["ERP & POS transformation", "Customer journey standardization", "Aggregator integrations"],
  },
  {
    period: "Feb 2003 – Nov 2007",
    role: "Senior Product Specialist",
    company: "Key Information Technology",
    location: "Dubai, UAE",
    highlights: ["Micros implementation expert", "HMS & POS systems", "Cross-team collaboration"],
  },
];

export function CareerTimelineSection() {
  return (
    <section id="career" className="py-16 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Professional Journey
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Career <span className="text-gradient-gold">Timeline</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            20+ years of progressive leadership across global enterprises
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {careerData.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-8 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background z-10" />

              {/* Content Card */}
              <div
                className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:text-right" : ""
                }`}
              >
                <div className="bg-card border border-border rounded-xl p-5 hover-lift">
                  <span className="text-primary text-sm font-semibold">
                    {item.period}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-1">
                    {item.role}
                  </h3>
                  <div className={`flex items-center gap-2 text-muted-foreground text-sm mt-1 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Briefcase className="w-4 h-4" />
                    <span>{item.company}</span>
                  </div>
                  <div className={`flex items-center gap-2 text-muted-foreground text-sm ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                  <div className={`flex flex-wrap gap-2 mt-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {item.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
