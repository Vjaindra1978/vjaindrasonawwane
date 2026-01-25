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
  GraduationCap
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
      className="group relative"
    >
      <div className="flex flex-col items-center text-center p-6">
        {/* Animated Ring */}
        <motion.div 
          className="relative mb-6"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Outer Ring */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} opacity-20 blur-md`} />
          <div className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${item.color} p-[3px]`}>
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className={`absolute inset-0 rounded-full border-2 border-dashed opacity-30`}
                style={{ borderColor: `hsl(var(--primary))` }}
              />
              <Icon className="w-10 h-10 text-primary" />
            </div>
          </div>
        </motion.div>
        
        {/* Content */}
        <h4 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
          {item.title}
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

function TechCard({ item, index }: { item: typeof technicalExpertise[0]; index: number }) {
  const Icon = item.icon;
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5, boxShadow: "0 10px 40px -10px hsl(var(--primary) / 0.3)" }}
      className="group relative bg-card border border-primary/20 p-6 hover:border-primary/50 transition-all duration-300"
    >
      {/* Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
      
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h4 className="font-display text-base text-foreground mb-1 group-hover:text-primary transition-colors">
            {item.title}
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        </div>
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
    <section id="skills" className="py-16 lg:py-20 bg-card border-y-2 border-primary/20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Technical Expertise
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-4">
            Professional <span className="text-gradient-gold">Competencies</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
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
            className="grid md:grid-cols-3 gap-8"
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
            Technical & Architect Expertise
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {technicalExpertise.map((item, index) => (
              <TechCard key={item.title} item={item} index={index} />
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
