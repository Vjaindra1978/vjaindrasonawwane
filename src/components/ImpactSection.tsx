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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { 
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
};

export function ImpactSection() {
  return (
    <section id="impact" className="py-10 lg:py-12 bg-card">
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
            Transformation Impact
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-foreground mb-3">
            Driving Measurable <span className="text-gradient-gold">Results</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            A track record of delivering enterprise-wide transformation with quantifiable business outcomes across global markets.
          </p>
        </motion.div>

        {/* Impact Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {impactCards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5, boxShadow: "0 8px 30px -10px hsl(var(--primary) / 0.15)" }}
              className="bg-background p-5 lg:p-6 group border-2 border-foreground/20 hover:border-foreground/40 transition-all duration-300"
            >
              {/* Icon */}
              <motion.div 
                whileHover={{ rotate: 5 }}
                className="w-10 h-10 flex items-center justify-center border border-border mb-4 group-hover:border-foreground group-hover:bg-foreground/5 transition-all duration-300"
              >
                <card.icon className="w-5 h-5 text-foreground" />
              </motion.div>

              {/* Title */}
              <h3 className="font-display text-lg lg:text-xl text-foreground mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
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
        </motion.div>
      </div>
    </section>
  );
}
