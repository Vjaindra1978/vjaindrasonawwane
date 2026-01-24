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
    <section id="capabilities" className="py-16 lg:py-20 bg-background border-y-2 border-primary/20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Advisory Services
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-4">
            Capability <span className="text-gradient-gold">Domains</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Strategic advisory across the full spectrum of digital transformation, from vision to execution.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left - Capability List */}
          <div className="lg:col-span-2 space-y-1">
            {capabilities.map((cap, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left py-4 px-4 border-l-2 transition-all duration-300 ${
                  activeIndex === index
                    ? "border-foreground bg-background"
                    : "border-transparent hover:border-muted-foreground/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  <cap.icon className={`w-5 h-5 ${activeIndex === index ? "text-foreground" : "text-muted-foreground"}`} />
                  <span className={`font-display text-lg ${activeIndex === index ? "text-foreground" : "text-muted-foreground"}`}>
                    {cap.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Right - Active Capability Detail */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-background border border-border p-8 lg:p-10"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-14 h-14 flex items-center justify-center border border-border">
                    <activeCapability.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-foreground mb-2">
                      {activeCapability.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {activeCapability.description}
                    </p>
                  </div>
                </div>

                {/* Challenges */}
                <div className="mb-8">
                  <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Common Challenges
                  </h4>
                  <ul className="space-y-3">
                    {activeCapability.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                        <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div>
                  <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Expected Outcomes
                  </h4>
                  <ul className="space-y-3">
                    {activeCapability.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground text-sm">
                        <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        {outcome}
                      </li>
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
