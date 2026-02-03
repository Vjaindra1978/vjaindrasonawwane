import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Briefcase, MapPin, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

// Timeline Card with GSAP and Parallax effects
function TimelineCard({ item, index, selectedIndex, setSelectedIndex }: {
  item: CareerItem;
  index: number;
  selectedIndex: number | null;
  setSelectedIndex: (index: number | null) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, margin: "-50px" });
  
  useEffect(() => {
    if (cardRef.current && isInView) {
      gsap.fromTo(cardRef.current,
        { 
          opacity: 0, 
          y: 40, 
          scale: 0.95,
          rotateX: 15
        },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          rotateX: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out"
        }
      );
    }
  }, [isInView, index]);

  return (
    <motion.div
      ref={cardRef}
      className="flex-shrink-0 w-80"
      style={{ perspective: 1000 }}
    >
      {/* Timeline Dot with Pulse Animation */}
      <div className="relative mb-6">
        <motion.div 
          className="absolute top-0 left-6 w-4 h-4 rounded-full bg-accent border-2 border-background"
          animate={{ 
            scale: [1, 1.2, 1],
            boxShadow: [
              "0 0 0 0 hsl(var(--accent) / 0.4)",
              "0 0 0 8px hsl(var(--accent) / 0)",
              "0 0 0 0 hsl(var(--accent) / 0)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
        />
      </div>

      {/* Card with 3D Tilt Effect */}
      <motion.button
        onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
        whileHover={{ 
          y: -8, 
          scale: 1.02,
          rotateY: 5,
          boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.2)"
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-full text-left p-6 border-2 border-foreground/20 bg-card hover:border-foreground/40 transition-colors group relative overflow-hidden"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        
        {/* Content */}
        <div className="relative z-10">
          <motion.p 
            className="text-xs text-accent tracking-wider mb-2 font-semibold"
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            {item.period}
          </motion.p>
          <h3 className="font-display text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
            {item.company}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            {item.role}
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {item.location}
          </p>
          
          <div className="flex items-center gap-1 mt-4 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
            <span>View Details</span>
            <motion.div
              animate={{ rotate: selectedIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-3 h-3" />
            </motion.div>
          </div>
        </div>
      </motion.button>

      {/* Expanded Content with Parallax Effect */}
      <AnimatePresence>
        {selectedIndex === index && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <motion.div 
              className="p-5 border-2 border-t-0 border-foreground/20 bg-secondary/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Key Responsibilities
              </h4>
              <ul className="space-y-3">
                {item.responsibilities.map((resp, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20, y: 10 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ 
                      delay: 0.3 + i * 0.15,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="text-muted-foreground text-sm flex items-start gap-3"
                  >
                    <motion.span 
                      className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.15, type: "spring" }}
                    />
                    {resp}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function CareerTimelineSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  
  // Parallax scroll effect for section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const springY = useSpring(parallaxY, { stiffness: 100, damping: 30 });
  
  // GSAP Timeline line animation
  useEffect(() => {
    if (timelineLineRef.current) {
      gsap.fromTo(timelineLineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineLineRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 360;
      gsap.to(scrollRef.current, {
        scrollLeft: scrollRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount),
        duration: 0.6,
        ease: "power2.out"
      });
    }
  };

  return (
    <section ref={sectionRef} id="career" className="py-10 lg:py-12 bg-secondary/50 overflow-hidden">
      <motion.div 
        className="container mx-auto px-2 sm:px-3 lg:px-4"
        style={{ y: springY }}
      >
        {/* Section Header with Reveal Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-end justify-between mb-10"
        >
          <div className="max-w-xl">
            <motion.p 
              className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Professional Journey
            </motion.p>
            <motion.h2 
              className="font-display text-2xl sm:text-3xl lg:text-4xl text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Career <span className="text-gradient-gold">Timeline</span>
            </motion.h2>
          </div>
          
          {/* Navigation Arrows with Hover Animation */}
          <motion.div 
            className="hidden md:flex gap-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("left")}
                className="w-12 h-12 border-2 border-foreground/20 hover:border-foreground/40"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("right")}
                className="w-12 h-12 border-2 border-foreground/20 hover:border-foreground/40"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <div 
            ref={timelineLineRef}
            className="absolute top-7 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-foreground/30 to-accent"
          />
          
          {/* Scrollable Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide scroll-smooth pt-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {careerData.map((item, index) => (
              <TimelineCard
                key={index}
                item={item}
                index={index}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            ))}
          </div>
        </div>
        
        {/* Mobile scroll hint */}
        <motion.div 
          className="md:hidden flex justify-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-xs text-muted-foreground flex items-center gap-2">
            <ChevronLeft className="w-3 h-3" />
            Swipe to explore
            <ChevronRight className="w-3 h-3" />
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
