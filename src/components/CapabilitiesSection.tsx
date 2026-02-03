import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb,
  Building2,
  ShoppingCart,
  Database,
  Cloud,
  Shield,
  Heart,
  Bot,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

const capabilities = [
  {
    icon: Lightbulb,
    title: "Digital Strategy & Innovation",
    description: "Defining multi-year digital roadmaps aligned with business objectives, partnering with boards and CEOs to execute transformative initiatives.",
    challenges: [
      "Unclear digital vision or scattered initiatives",
      "Difficulty prioritizing technology investments",
      "Lack of innovation culture or digital mindset",
    ],
    outcomes: [
      "Cohesive digital strategy with clear milestones",
      "Prioritized investment portfolio with ROI tracking",
      "Organization-wide digital capability uplift",
    ],
  },
  {
    icon: Building2,
    title: "Enterprise & Solution Architecture",
    description: "Designing integrated business and technology architectures using TOGAF frameworks to support scalability, interoperability, and future growth.",
    challenges: [
      "Fragmented systems and data silos",
      "Legacy architecture blocking modernization",
      "Integration complexity across platforms",
    ],
    outcomes: [
      "Unified enterprise architecture blueprint",
      "Modernized, scalable technology stack",
      "Seamless system integration",
    ],
  },
  {
    icon: ShoppingCart,
    title: "ERP, POS & Omnichannel",
    description: "Leading ERP and POS transformations across Microsoft D365, Oracle Hospitality, and other enterprise platforms for unified operations.",
    challenges: [
      "Outdated ERP limiting business agility",
      "Disconnected POS and inventory systems",
      "Inconsistent customer experience across channels",
    ],
    outcomes: [
      "Modern, integrated ERP ecosystem",
      "Real-time inventory and sales visibility",
      "Seamless omnichannel customer journeys",
    ],
  },
  {
    icon: Database,
    title: "Data Analytics, BI & AI",
    description: "Building analytics platforms with Power BI and Tableau, enabling real-time insights, predictive analytics, and data-driven decision making.",
    challenges: [
      "Data scattered across multiple systems",
      "Lack of actionable insights for executives",
      "Manual reporting consuming resources",
    ],
    outcomes: [
      "Centralized data platform with governance",
      "Real-time executive dashboards",
      "Automated reporting and predictions",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "Migrating legacy systems to Azure, AWS, and Oracle Cloud with focus on scalability, resilience, and cost optimization.",
    challenges: [
      "On-premise infrastructure limiting scale",
      "High maintenance costs and downtime",
      "Security concerns with cloud adoption",
    ],
    outcomes: [
      "Cloud-native, scalable infrastructure",
      "99.9%+ uptime with disaster recovery",
      "Optimized cloud costs and governance",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity & Governance",
    description: "Establishing IT governance, risk management, and security frameworks aligned with ISO 27001/27701 and industry regulations.",
    challenges: [
      "Security vulnerabilities and compliance gaps",
      "Lack of IT policies and governance",
      "Data privacy and regulatory concerns",
    ],
    outcomes: [
      "ISO-aligned security frameworks",
      "Comprehensive IT governance model",
      "Regulatory compliance assurance",
    ],
  },
  {
    icon: Heart,
    title: "Customer Experience & Loyalty",
    description: "Designing and implementing CRM, loyalty programs, and customer engagement platforms that drive retention and lifetime value.",
    challenges: [
      "Fragmented customer data and touchpoints",
      "Low customer engagement and retention",
      "Ineffective loyalty programs",
    ],
    outcomes: [
      "360° customer view and personalization",
      "Increased customer engagement metrics",
      "Data-driven loyalty optimization",
    ],
  },
  {
    icon: Bot,
    title: "Automation & RPA",
    description: "Implementing robotic process automation across finance, HR, and operations, reducing manual effort and improving accuracy.",
    challenges: [
      "High volume of manual, repetitive tasks",
      "Process errors and inconsistencies",
      "Staff burnout on low-value activities",
    ],
    outcomes: [
      "60%+ reduction in manual effort",
      "Near-zero process error rates",
      "Staff focused on strategic work",
    ],
  },
];

export function CapabilitiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCapability = capabilities[activeIndex];

  return (
    <section id="capabilities" className="py-10 lg:py-12 bg-background">
      <div className="container mx-auto px-2 sm:px-3 lg:px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-10"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
            Advisory Services
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-foreground mb-3">
            Capability <span className="text-gradient-gold">Domains</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Strategic advisory across the full spectrum of digital transformation, from vision to execution.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-12">
          {/* Left - Capability List */}
          <div className="lg:col-span-2 space-y-1">
            {capabilities.map((cap, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ x: 5 }}
                className={`w-full text-left py-3 px-4 border-l-2 transition-all duration-300 ${
                  activeIndex === index
                    ? "border-foreground bg-background"
                    : "border-transparent hover:border-muted-foreground/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <cap.icon className={`w-5 h-5 ${activeIndex === index ? "text-foreground" : "text-muted-foreground"}`} />
                  <span className={`font-display text-base ${activeIndex === index ? "text-foreground" : "text-muted-foreground"}`}>
                    {cap.title}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right - Active Capability Detail */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="bg-background border-2 border-foreground/20 p-6 lg:p-8"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="w-12 h-12 flex items-center justify-center border border-border"
                  >
                    <activeCapability.icon className="w-5 h-5 text-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-2">
                      {activeCapability.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {activeCapability.description}
                    </p>
                  </div>
                </div>

                {/* Challenges */}
                <div className="mb-6">
                  <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Common Challenges
                  </h4>
                  <ul className="space-y-2">
                    {activeCapability.challenges.map((challenge, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="flex items-start gap-3 text-muted-foreground text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground/50 mt-1.5 flex-shrink-0" />
                        {challenge}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div>
                  <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Expected Outcomes
                  </h4>
                  <ul className="space-y-2">
                    {activeCapability.outcomes.map((outcome, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-start gap-3 text-foreground text-sm"
                      >
                        <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        {outcome}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
