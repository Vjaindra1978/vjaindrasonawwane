import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="career" className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-10"
        >
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Professional Journey
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground">
              Career <span className="text-gradient-gold">Timeline</span>
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="w-10 h-10"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="w-10 h-10"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-6 left-0 right-0 h-px bg-border" />
          
          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {careerData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex-shrink-0 w-72"
              >
                {/* Timeline Dot */}
                <div className="relative mb-6">
                  <div className="absolute top-0 left-6 w-3 h-3 rounded-full bg-accent border-2 border-background" />
                </div>

                {/* Card */}
                <button
                  onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
                  className="w-full text-left p-5 border border-border bg-card hover:border-foreground/20 transition-colors group"
                >
                  <p className="text-xs text-muted-foreground tracking-wider mb-2">
                    {item.period}
                  </p>
                  <h3 className="font-display text-lg text-foreground mb-1 group-hover:opacity-80 transition-opacity">
                    {item.company}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {item.role}
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </p>
                  
                  <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
                    <span>Details</span>
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-300 ${
                        selectedIndex === index ? "rotate-180" : ""
                      }`}
                    />
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
                      <div className="p-4 border border-t-0 border-border bg-secondary/30">
                        <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 flex items-center gap-2">
                          <Briefcase className="w-3 h-3" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {item.responsibilities.map((resp, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="text-muted-foreground text-xs flex items-start gap-2"
                            >
                              <span className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                              {resp}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
