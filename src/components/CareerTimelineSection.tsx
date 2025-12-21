import { useState } from "react";
import { ChevronDown, ChevronUp, Briefcase, MapPin } from "lucide-react";

interface CareerItem {
  period: string;
  role: string;
  company: string;
  location: string;
  responsibilities: string[];
}

const careerData: CareerItem[] = [
  {
    period: "Apr 2024 – Present",
    role: "Contact Centre Management",
    company: "Auckland Taxi",
    location: "Auckland, New Zealand",
    responsibilities: [
      "Overseeing booking & dispatch optimization for fleet operations",
      "Implementing contact center process improvements and system integrations",
      "Driving customer service excellence through technology enablement",
    ],
  },
  {
    period: "Apr 2023 – Jul 2023",
    role: "General Manager IT",
    company: "Gourmet Investment Pvt. Ltd",
    location: "India",
    responsibilities: [
      "Led digital & IT transformation across multi-brand hospitality portfolio",
      "Optimized ERP performance and streamlined technology operations",
      "Developed technology roadmaps aligned with business growth strategy",
    ],
  },
  {
    period: "Jan 2018 – Apr 2023",
    role: "Head of IT Projects & Digital Transformation",
    company: "Travel Food Services",
    location: "Mumbai, India",
    responsibilities: [
      "Directed IT strategy for 350+ retail & hospitality outlets",
      "Executed multi-year digital roadmap including cloud migration to Azure",
      "Led ERP, CRM, and BI implementations driving operational excellence",
    ],
  },
  {
    period: "Dec 2016 – Dec 2017",
    role: "Independent Consultant",
    company: "Citrus IT Solutions & Techno Labs",
    location: "India",
    responsibilities: [
      "Provided IT strategy & enterprise architecture advisory services",
      "Developed technology roadmaps for retail and hospitality clients",
      "Conducted digital maturity assessments and transformation planning",
    ],
  },
  {
    period: "May 2015 – Sep 2016",
    role: "GM Information Technology",
    company: "Paradise Food Court",
    location: "Hyderabad, India",
    responsibilities: [
      "Integrated CRM & ERP systems across restaurant chain operations",
      "Implemented analytics-driven insights for business decision-making",
      "Deployed digital payment solutions and customer engagement platforms",
    ],
  },
  {
    period: "Jun 2010 – Sep 2014",
    role: "IT Manager",
    company: "Landmark Group Hospitality (Food Mark)",
    location: "Dubai, UAE",
    responsibilities: [
      "Managed Oracle CRM & ERP solutions for hospitality division",
      "Drove process automation and cross-functional IT alignment",
      "Led vendor management and technology partnership initiatives",
    ],
  },
  {
    period: "Dec 2007 – May 2010",
    role: "Business Analyst – IT",
    company: "Nakheel Retail Corp",
    location: "Dubai, UAE",
    responsibilities: [
      "Led ERP & POS transformation across retail operations",
      "Standardized customer journey and aggregator integrations",
      "Managed requirements gathering and solution implementation",
    ],
  },
  {
    period: "Feb 2003 – Nov 2007",
    role: "Senior Product Specialist",
    company: "Key Information Technology",
    location: "Dubai, UAE",
    responsibilities: [
      "Expert in Micros implementation for hospitality systems",
      "Deployed HMS & POS systems across hotel and restaurant chains",
      "Provided technical consulting and cross-team collaboration",
    ],
  },
];

export function CareerTimelineSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="career" className="py-12 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
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

        {/* Compact Timeline */}
        <div className="max-w-3xl mx-auto space-y-2">
          {careerData.map((item, index) => (
            <div
              key={index}
              className="group"
            >
              {/* Compact Row - Clickable */}
              <button
                onClick={() => toggleExpand(index)}
                className="w-full flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-card/80 transition-all duration-300 text-left"
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  {/* Company & Role */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-display font-semibold text-foreground">
                        {item.company}
                      </span>
                      <span className="text-muted-foreground hidden sm:inline">•</span>
                      <span className="text-primary text-sm font-medium">
                        {item.role}
                      </span>
                    </div>
                    <div className="text-muted-foreground text-sm mt-0.5">
                      {item.period}
                    </div>
                  </div>
                </div>

                {/* Expand Icon */}
                <div className="ml-4 text-muted-foreground group-hover:text-primary transition-colors">
                  {expandedIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {/* Expanded Details */}
              {expandedIndex === index && (
                <div className="mt-2 ml-4 mr-4 p-4 bg-secondary/30 border border-border/50 rounded-lg animate-fade-in">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    Strategic Roles & Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {item.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground text-sm"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
