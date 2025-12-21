import { TrendingUp, Cloud, Shield, Users, Zap, BarChart3 } from "lucide-react";
const impactCards = [{
  icon: TrendingUp,
  title: "Enterprise-Wide ERP Transformation",
  description: "Directed Microsoft D365, Oracle Hospitality, and Navision rollouts across Asia and the GCC, standardizing processes and realizing over 40% cost savings.",
  metrics: ["Multi-country deployment", "40%+ cost reduction", "Unified reporting"]
}, {
  icon: Cloud,
  title: "Cloud Migration & Modernization",
  description: "Migrated legacy infrastructure to Azure and Oracle Cloud, achieving 99.9% uptime while improving data governance, scalability, and business continuity.",
  metrics: ["99.9% uptime", "Enhanced resilience", "Scalable architecture"]
}, {
  icon: Zap,
  title: "Automation & Process Excellence",
  description: "Implemented RPA frameworks across finance, HR, and supply chain operations, cutting manual effort by 60% and significantly increasing process accuracy.",
  metrics: ["60% effort reduction", "P2P & AR automation", "Treasury optimization"]
}, {
  icon: BarChart3,
  title: "Data Analytics & Business Intelligence",
  description: "Developed BI platforms using Power BI and Tableau, providing real-time operational visibility and predictive insights for executive decision-making.",
  metrics: ["Real-time dashboards", "Predictive analytics", "Executive reporting"]
}, {
  icon: Shield,
  title: "Governance & Security Frameworks",
  description: "Established IT governance and cybersecurity controls aligned with ISO 27001/27701, protecting data integrity across regulated industries.",
  metrics: ["ISO compliance", "Risk management", "Data protection"]
}, {
  icon: Users,
  title: "Digital Customer Experience",
  description: "Led digital transformation for 350+ hospitality and retail sites, integrating eCommerce, CRM, loyalty, and mobile platforms to enhance guest satisfaction.",
  metrics: ["350+ sites", "Omnichannel CX", "Loyalty integration"]
}];
export function ImpactSection() {
  return (
    <section id="impact" className="py-12 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Transformation Impact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Driving Measurable <span className="text-gradient-gold">Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A track record of delivering enterprise-wide transformation with quantifiable business outcomes
          </p>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactCards.map((card, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover-lift transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {card.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {card.metrics.map((metric, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}