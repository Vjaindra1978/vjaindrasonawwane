import { motion } from "framer-motion";
import { 
  Compass, 
  Cloud, 
  Handshake, 
  Hotel, 
  Database, 
  Brain,
  Award,
  Briefcase,
  GraduationCap,
  Building2,
  Shield,
  ShoppingCart,
  Plane,
  Users,
  ConciergeBell,
} from "lucide-react";

const coreCompetencies = [
  { icon: Compass, title: "Global Technology Strategy & Execution", color: "from-cyan-500 to-blue-600" },
  { icon: Cloud, title: "Cloud Transformation & Platform Modernization", color: "from-orange-400 to-amber-500" },
  { icon: Handshake, title: "Executive Stakeholder & Partner Leadership", color: "from-pink-500 to-rose-600" },
  { icon: Briefcase, title: "Project / Program Management & PMO", color: "from-violet-500 to-purple-600" },
  { icon: Award, title: "Six Sigma Process Improvement & Reengineering", color: "from-emerald-500 to-green-600" },
  { icon: Building2, title: "Enterprise Architecture", color: "from-sky-500 to-indigo-600" },
  { icon: Shield, title: "ISO 27001 / ISO 27701 Certified", color: "from-red-500 to-rose-600" },
];

const technicalExpertise = [
  { icon: Hotel, title: "Oracle Hospitality Platforms", description: "PMS, POS & system integrations" },
  { icon: Database, title: "Multi-Cloud Platform Proficiency", description: "Oracle Cloud, Azure & AWS" },
  { icon: Brain, title: "Data-Driven & AI-Enabled Platforms", description: "Analytics, automation & AI insights" },
];

const domainItems = [
  { icon: ShoppingCart, title: "Retail", color: "from-blue-500 to-cyan-500" },
  { icon: Plane, title: "Travel Retail", color: "from-amber-500 to-orange-500" },
  { icon: Users, title: "Consulting", color: "from-violet-500 to-purple-500" },
  { icon: ConciergeBell, title: "Hospitality", color: "from-emerald-500 to-teal-500" },
];

const careerStats = [
  { value: "20+", label: "Years Experience", color: "from-cyan-400 to-teal-500" },
  { value: "50+", label: "Projects Delivered", color: "from-amber-400 to-orange-500" },
  { value: "15+", label: "Certifications", color: "from-pink-500 to-rose-500" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-10 lg:py-14 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
            Technical Expertise
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-foreground">
            Professional <span className="text-gradient-gold">Competencies</span>
          </h2>
        </motion.div>

        {/* Career Stats - Horizontal infographic bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-6 sm:gap-12 mb-10"
        >
          {careerStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stat.color} p-[2px]`}>
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <span className="font-display text-lg font-bold text-foreground">{stat.value}</span>
                </div>
              </div>
              <span className="text-xs text-muted-foreground font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Grid: Core Competencies + Domain/Expertise */}
        <div className="grid lg:grid-cols-5 gap-6">
          
          {/* Left: Core Competencies - 3 cols */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-xl border border-foreground/10 bg-background/50 p-5"
          >
            <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-primary rounded-full" />
              Core Competencies
            </h3>
            <div className="space-y-1">
              {coreCompetencies.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-foreground/[0.03] transition-colors"
                  >
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-foreground/90 group-hover:text-primary transition-colors">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Domain + Technical Expertise - 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Industry Domains */}
            <div className="rounded-xl border border-foreground/10 bg-background/50 p-5">
              <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-6 h-[2px] bg-primary rounded-full" />
                Industry Domains
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {domainItems.map((domain, index) => (
                  <motion.div
                    key={domain.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.06 }}
                    whileHover={{ scale: 1.04 }}
                    className="flex items-center gap-2.5 rounded-lg bg-card border border-foreground/5 px-3 py-2.5"
                  >
                    <div className={`w-7 h-7 rounded-md bg-gradient-to-br ${domain.color} flex items-center justify-center flex-shrink-0`}>
                      <domain.icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-xs font-medium text-foreground">{domain.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technical Expertise */}
            <div className="rounded-xl border border-foreground/10 bg-background/50 p-5 flex-1">
              <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-6 h-[2px] bg-primary rounded-full" />
                Technical Expertise
              </h3>
              <div className="space-y-2.5">
                {technicalExpertise.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 3 }}
                      className="group flex items-start gap-3 rounded-lg bg-card border border-foreground/5 px-3 py-2.5"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
