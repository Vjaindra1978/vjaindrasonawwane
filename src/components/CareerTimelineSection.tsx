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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="career" className="py-16 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Professional Journey
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Career <span className="text-gradient-gold">Timeline</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            20+ years of progressive leadership across global enterprises
          </p>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent hidden lg:block" />
          
          {/* Timeline Items - Horizontal Scroll */}
          <div className="flex overflow-x-auto pb-6 gap-4 lg:gap-6 scrollbar-hide snap-x snap-mandatory">
            {careerData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex-shrink-0 snap-start"
              >
                {/* Timeline Node */}
                <div className="flex flex-col items-center">
                  {/* Dot */}
                  <motion.button
                    onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative z-10 w-4 h-4 rounded-full border-2 transition-all duration-300 mb-4 hidden lg:block ${
                      selectedIndex === index 
                        ? 'bg-primary border-primary shadow-lg shadow-primary/50' 
                        : 'bg-card border-primary/50 hover:border-primary hover:bg-primary/20'
                    }`}
                  />
                  
                  {/* Card */}
                  <motion.button
                    onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
                    whileHover={{ scale: 1.02, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-56 sm:w-64 p-4 rounded-xl border text-left transition-all duration-300 ${
                      selectedIndex === index 
                        ? 'bg-primary/10 border-primary shadow-lg shadow-primary/20' 
                        : 'bg-card border-border hover:border-primary/50 hover:bg-card/80'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-muted-foreground font-medium">
                        {item.period}
                      </span>
                      <ChevronRight className={`w-4 h-4 text-primary transition-transform duration-300 ${
                        selectedIndex === index ? 'rotate-90' : ''
                      }`} />
                    </div>
                    <h3 className="font-display font-bold text-foreground text-sm mb-1 line-clamp-1">
                      {item.company}
                    </h3>
                    <p className="text-primary text-xs font-medium line-clamp-1">
                      {item.role}
                    </p>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Expanded Responsibilities Panel */}
        <AnimatePresence mode="wait">
          {selectedIndex !== null && (
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-8 overflow-hidden"
            >
              <motion.div 
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-card via-card to-primary/5 border border-primary/30 rounded-2xl shadow-xl"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <motion.h3 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="font-display text-xl sm:text-2xl font-bold text-foreground"
                    >
                      {careerData[selectedIndex].company}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 }}
                      className="text-primary font-medium"
                    >
                      {careerData[selectedIndex].role}
                    </motion.p>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4 text-muted-foreground text-sm"
                  >
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {careerData[selectedIndex].location}
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span>{careerData[selectedIndex].period}</span>
                  </motion.div>
                </div>

                {/* Responsibilities with Sprinkle Animation */}
                <div>
                  <motion.h4 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    className="font-semibold text-foreground mb-4 flex items-center gap-2"
                  >
                    <Briefcase className="w-5 h-5 text-primary" />
                    Strategic Roles & Responsibilities
                  </motion.h4>
                  <div className="grid gap-3">
                    {careerData[selectedIndex].responsibilities.map((resp, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -30, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.3 + i * 0.15,
                          type: "spring",
                          stiffness: 100
                        }}
                        className="flex items-start gap-3 p-3 bg-background/50 rounded-lg border border-border/50"
                      >
                        <motion.div 
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: 0.4 + i * 0.15,
                            type: "spring",
                            stiffness: 200
                          }}
                          className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-gold mt-2 flex-shrink-0" 
                        />
                        <span className="text-muted-foreground">{resp}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Custom scrollbar hide styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
