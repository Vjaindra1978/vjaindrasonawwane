import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const coreCompetencies = [
  "Global Technology Strategy & Execution",
  "Oracle Hospitality Ecosystem (PMS, POS, Integrations)",
  "OPERA / Simphony / Enterprise POS & Guest Platforms",
  "Cloud Transformation & Platform Modernization",
  "Global Service Delivery & Managed Services",
  "Software Development & Product Lifecycle Leadership",
  "Proprietary Platform & IP Development",
  "Enterprise Architecture & Integration Frameworks",
  "AI, Automation & Data-Driven Innovation",
  "Executive Stakeholder & Partner Leadership",
  "Global Team Building & Talent Development",
];

const technicalSkills = [
  "Oracle Hospitality Platforms (PMS, POS, Integrations)",
  "Enterprise POS & Guest Experience Systems",
  "Cloud Platforms (Oracle Cloud, Azure, AWS)",
  "API & Integration Frameworks",
  "Data Analytics, BI & Customer Insights",
  "Automation, RPA & AI-Enabled Platforms",
  "Cybersecurity & Privacy Governance",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    x: -20,
  },
  visible: { 
    opacity: 1, 
    x: 0,
  },
};

function SkillItem({ skill, index }: { skill: string; index: number }) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex items-start gap-3 py-2 group"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.4, 
          delay: index * 0.08 + 0.3,
          type: "spring",
          stiffness: 200,
        }}
      >
        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 group-hover:text-accent transition-colors duration-300" />
      </motion.div>
      <span className="text-sm text-foreground leading-relaxed group-hover:text-primary transition-colors duration-300">
        {skill}
      </span>
    </motion.div>
  );
}

export function SkillsSection() {
  const coreRef = useRef(null);
  const techRef = useRef(null);
  const isCoreInView = useInView(coreRef, { once: true, margin: "-50px" });
  const isTechInView = useInView(techRef, { once: true, margin: "-50px" });

  return (
    <section id="skills" className="py-16 lg:py-20 bg-card border-y-2 border-primary/20">
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
            Technical Expertise
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-4">
            Professional <span className="text-gradient-gold">Competencies</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Two decades of hands-on experience across enterprise technologies and strategic leadership.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Core Competencies */}
          <div ref={coreRef}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider border-b border-primary/30 pb-3">
                Core Competencies
              </h3>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isCoreInView ? "visible" : "hidden"}
              className="space-y-1"
            >
              {coreCompetencies.map((skill, index) => (
                <SkillItem key={skill} skill={skill} index={index} />
              ))}
            </motion.div>
          </div>

          {/* Technical & Architect */}
          <div ref={techRef}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider border-b border-primary/30 pb-3">
                Technical & Architect
              </h3>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isTechInView ? "visible" : "hidden"}
              className="space-y-1"
            >
              {technicalSkills.map((skill, index) => (
                <SkillItem key={skill} skill={skill} index={index} />
              ))}
            </motion.div>

            {/* Competency Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 p-6 border border-primary/30 bg-primary/5"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <span className="block text-2xl font-display text-primary">20+</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Years Experience</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <span className="block text-2xl font-display text-primary">50+</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Projects Delivered</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <span className="block text-2xl font-display text-primary">15+</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Certifications</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
