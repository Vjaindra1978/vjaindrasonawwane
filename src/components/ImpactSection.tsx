import { TrendingUp, Cloud, Shield, Users, Zap, BarChart3 } from "lucide-react";

const impactCards = [
  {
    icon: TrendingUp,
    title: "Enterprise-Wide ERP Transformation",
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
    metrics: ["60% effort reduction", "P2P & AR automation", "Treasury optimization"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Business Intelligence",
    description: "Developed BI platforms using Power BI and Tableau, providing real-time operational visibility and predictive insights for executive decision-making.",
    metrics: ["Real-time dashboards", "Predictive analytics", "Executive reporting"],
  },
  {
    icon: Shield,
    title: "Governance & Security Frameworks",
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
    <section id="impact" className="py-16 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Strategic Impact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Transformation Outcomes &{' '}
            <span className="text-gradient-gold">Enterprise Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Measurable results from leading multi-country, multi-brand digital transformation 
            programs across hospitality, retail, and travel industries.
          </p>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {impactCards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 hover-lift cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <card.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2">
                  {card.metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Award Banner */}
        <div className="mt-12 bg-gradient-card border border-border rounded-2xl p-6 md:p-10 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-3xl">🏆</span>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-display text-xl font-semibold text-foreground mb-2">
                DXC Award 2023 — Best Digital Customer Experience Leader
              </h4>
              <p className="text-muted-foreground">
                Recognized for delivering exceptional digital transformation outcomes and customer experience innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
