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
  {
    icon: Compass,
    title: "Global Technology Strategy & Execution",
    description: "Driving technology vision from planning to implementation across global enterprises.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Cloud,
    title: "Cloud Transformation & Platform Modernization",
    description: "Leading the migration and modernization of enterprise systems to cloud platforms.",
    color: "from-orange-400 to-amber-500",
  },
  {
    icon: Handshake,
    title: "Executive Stakeholder & Partner Leadership",
    description: "Building and managing relationships with key business leaders and strategic partners.",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: Briefcase,
    title: "Project / Program Management & PMO",
    description: "End-to-end program governance, PMO setup, and delivery excellence across portfolios.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Award,
    title: "Six Sigma Process Improvement & Reengineering",
    description: "Driving operational excellence through Lean Six Sigma methodologies and process optimization.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: Building2,
    title: "Enterprise Architecture",
    description: "Designing scalable enterprise architectures aligned with business strategy and technology roadmaps.",
    color: "from-sky-500 to-indigo-600",
  },
  {
    icon: Shield,
    title: "ISO 27001 / ISO 27701 Certified",
    description: "Certified expertise in information security and privacy management systems.",
    color: "from-red-500 to-rose-600",
  },
];

const technicalExpertise = [
  {
    icon: Hotel,
    title: "Oracle Hospitality Platforms",
    description: "Expertise in PMS, POS, and system integrations for hospitality industry.",
  },
  {
    icon: Database,
    title: "Multi-Cloud Platform Proficiency",
    description: "Specializing in Oracle Cloud, Azure, and AWS environments.",
  },
  {
    icon: Brain,
    title: "Data-Driven & AI-Enabled Platforms",
    description: "Leveraging data analytics, automation, and AI for business insights.",
  },
];

const careerStats = [
  { value: "20+", label: "Years", sublabel: "Of professional experience", color: "from-cyan-400 to-teal-500" },
  { value: "50+", label: "Projects", sublabel: "Projects delivered", color: "from-amber-400 to-orange-500" },
  { value: "15+", label: "Certifications", sublabel: "Professional certifications", color: "from-pink-500 to-rose-500" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
};

function CompetencyCard({ item, index }: { item: typeof coreCompetencies[0]; index: number }) {
  const Icon = item.icon;
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ x: 4 }}
      className="group flex items-center gap-3 py-2"
    >
      <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br ${item.color} p-[2px]`}>
        <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
          <Icon className="w-4 h-4 text-primary" />
        </div>
      </div>
      <span className="font-display text-sm text-foreground group-hover:text-primary transition-colors">
        {item.title}
      </span>
    </motion.div>
  );
}

function TechCard({ item, index }: { item: typeof technicalExpertise[0]; index: number }) {
  const Icon = item.icon;
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ x: 4 }}
      className="group flex items-center gap-3 py-2"
    >
      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <div>
        <h4 className="font-display text-sm text-foreground group-hover:text-primary transition-colors">
          {item.title}
        </h4>
        <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}

function StatBadge({ stat, index }: { stat: typeof careerStats[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center"
    >
      {/* Circular Badge */}
      <div className="relative">
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${stat.color} opacity-20 blur-lg`} />
        <div className={`relative w-28 h-28 rounded-full bg-gradient-to-br ${stat.color} p-[4px]`}>
          <div className="w-full h-full rounded-full bg-card flex flex-col items-center justify-center">
            <span className="font-display text-2xl text-foreground">{stat.value}</span>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">{stat.label}</span>
          </div>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-3 text-center max-w-[100px]">{stat.sublabel}</p>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-10 lg:py-12 bg-card">
      <div className="container mx-auto px-2 sm:px-3 lg:px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
            Technical Expertise
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-foreground mb-3">
            Professional <span className="text-gradient-gold">Competencies</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Two decades of hands-on experience driving enterprise technologies and strategic leadership across global markets.
          </p>
        </motion.div>

        {/* Core Competencies */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center text-sm font-bold text-foreground uppercase tracking-wider mb-10"
          >
            Core Competencies
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-1"
          >
            {coreCompetencies.map((item, index) => (
              <CompetencyCard key={item.title} item={item} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Technical & Architect Expertise */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center text-sm font-bold text-foreground uppercase tracking-wider mb-10"
          >
            Functional Technical & Architect Expertise
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-1"
          >
            {technicalExpertise.map((item, index) => (
              <TechCard key={item.title} item={item} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Domain Proficiency */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center text-sm font-bold text-foreground uppercase tracking-wider mb-10"
          >
            Industry Domain Proficiency
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-1"
          >
            {[
              { icon: ShoppingCart, title: "Retail" },
              { icon: Plane, title: "Travel Retail" },
              { icon: Users, title: "Consulting" },
              { icon: ConciergeBell, title: "Hospitality" },
            ].map((domain, index) => (
              <motion.div
                key={domain.title}
                variants={itemVariants}
                whileHover={{ x: 4 }}
                className="group flex items-center gap-3 py-2"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <domain.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="font-display text-sm text-foreground group-hover:text-primary transition-colors">{domain.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Career at a Glance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-10 border-t border-primary/20"
        >
          <h3 className="text-center text-sm font-bold text-foreground uppercase tracking-wider mb-10">
            Career at a Glance
          </h3>
          
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {careerStats.map((stat, index) => (
              <StatBadge key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
