import { useState } from "react";
import { 
  Lightbulb, 
  Building2, 
  ShoppingCart, 
  Database, 
  Cloud, 
  Shield, 
  Heart, 
  Bot,
  ChevronRight
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
    title: "ERP, POS & Omnichannel Platforms",
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
    title: "Cloud Platforms & Infrastructure",
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
    <section id="capabilities" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Advisory Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            How I Help Organizations{' '}
            <span className="text-gradient-gold">Transform</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Strategic advisory across the full spectrum of digital transformation, 
            from vision to execution.
          </p>
        </div>

        {/* Capabilities Layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Capability List */}
          <div className="lg:col-span-4 space-y-2">
            {capabilities.map((cap, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-primary/10 border border-primary/30"
                    : "bg-card border border-transparent hover:bg-card/80 hover:border-border"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    activeIndex === index ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                  }`}
                >
                  <cap.icon className="w-5 h-5" />
                </div>
                <span
                  className={`font-medium flex-1 ${
                    activeIndex === index ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {cap.title}
                </span>
                <ChevronRight
                  className={`w-5 h-5 transition-transform ${
                    activeIndex === index ? "text-primary rotate-90" : "text-muted-foreground"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Capability Detail */}
          <div className="lg:col-span-8">
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <activeCapability.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {activeCapability.title}
                </h3>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {activeCapability.description}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Challenges */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-destructive" />
                    Common Challenges
                  </h4>
                  <ul className="space-y-3">
                    {activeCapability.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-destructive mt-1">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Expected Outcomes
                  </h4>
                  <ul className="space-y-3">
                    {activeCapability.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1">✓</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
