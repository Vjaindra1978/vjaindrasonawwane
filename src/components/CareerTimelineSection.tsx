import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, ChevronRight } from "lucide-react";

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
    company: "Landmark Group Hospitality",
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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="career" className="py-24 lg:py-32 bg-background">
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
            Professional Journey
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Career <span className="text-gradient-gold">Timeline</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            20+ years of progressive leadership across global enterprises in hospitality, retail, and technology.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-0">
          {careerData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
                className="w-full text-left py-6 border-t border-border group"
              >
                <div className="grid grid-cols-12 gap-4 items-start">
                  {/* Period */}
                  <div className="col-span-12 sm:col-span-3 lg:col-span-2">
                    <p className="text-xs text-muted-foreground tracking-wider">
                      {item.period}
                    </p>
                  </div>

                  {/* Company & Role */}
                  <div className="col-span-10 sm:col-span-8 lg:col-span-9">
                    <h3 className="font-display text-lg lg:text-xl text-foreground group-hover:opacity-70 transition-opacity">
                      {item.company}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {item.role}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="col-span-2 sm:col-span-1 flex justify-end">
                    <ChevronRight
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                        selectedIndex === index ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              <AnimatePresence>
                {selectedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pl-0 sm:pl-[25%] lg:pl-[16.67%]">
                      <div className="border-l border-border pl-6">
                        <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-3">
                          {item.responsibilities.map((resp, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="text-muted-foreground text-sm flex items-start gap-3"
                            >
                              <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                              {resp}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
