import { TrendingUp, Cloud, Shield, Users, Zap, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const impactCards = [
  {
    icon: TrendingUp,
    title: "Enterprise ERP Transformation",
    description: "Directed Microsoft D365, Oracle Hospitality, and Navision rollouts across Asia and the GCC, standardizing processes and realizing over 40% cost savings.",
    metrics: ["Multi-country deployment", "40%+ cost reduction", "Unified reporting"],
  },
  {
    icon: Cloud,
    title: "Cloud Migration & Modernization",
    description: "Migrated legacy infrastructure to Azure and Oracle Cloud, achieving 99.9% uptime while improving data governance, scalability, and business continuity.",
    metrics: ["99.9% uptime", "Enhanced resilience", "Scalable architecture"],
  },
  {
    icon: Zap,
    title: "Automation & Process Excellence",
    description: "Implemented RPA frameworks across finance, HR, and supply chain operations, cutting manual effort by 60% and significantly increasing process accuracy.",
    metrics: ["60% effort reduction", "P2P automation", "Treasury optimization"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Intelligence",
    description: "Developed BI platforms using Power BI and Tableau, providing real-time operational visibility and predictive insights for executive decision-making.",
    metrics: ["Real-time dashboards", "Predictive analytics", "Executive reporting"],
  },
  {
    icon: Shield,
    title: "Governance & Security",
    description: "Established IT governance and cybersecurity controls aligned with ISO 27001/27701, protecting data integrity across regulated industries.",
    metrics: ["ISO compliance", "Risk management", "Data protection"],
  },
  {
    icon: Users,
    title: "Digital Customer Experience",
    description: "Led digital transformation for 350+ hospitality and retail sites, integrating eCommerce, CRM, loyalty, and mobile platforms to enhance guest satisfaction.",
    metrics: ["350+ sites", "Omnichannel CX", "Loyalty integration"],
  },
];

export function ImpactSection() {
  return (
    <section id="impact" className="py-16 lg:py-20 bg-background">
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
            Transformation Impact
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-4">
            Driving Measurable <span className="text-gradient-gold">Results</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A track record of delivering enterprise-wide transformation with quantifiable business outcomes across global markets.
          </p>
        </motion.div>

        {/* Impact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {impactCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-6 lg:p-8 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center border border-border mb-6 group-hover:border-foreground transition-colors">
                <card.icon className="w-5 h-5 text-foreground" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl lg:text-2xl text-foreground mb-4">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {card.description}
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2">
                {card.metrics.map((metric, i) => (
                  <span
                    key={i}
                    className="text-xs text-muted-foreground border-b border-border pb-1"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
