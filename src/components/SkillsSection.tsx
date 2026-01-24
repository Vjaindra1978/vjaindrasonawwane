import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Digital Transformation Strategy", level: 95 },
  { name: "Enterprise Architecture (TOGAF)", level: 92 },
  { name: "Cloud & Infrastructure (Azure/AWS)", level: 90 },
  { name: "ERP & Business Systems", level: 88 },
  { name: "Data Analytics & BI", level: 85 },
  { name: "Cybersecurity & Governance", level: 87 },
  { name: "AI & Automation (RPA)", level: 82 },
  { name: "Stakeholder & C-Suite Engagement", level: 94 },
];

const technicalTools = [
  "Microsoft Azure",
  "AWS",
  "Power BI",
  "Tableau",
  "D365 F&O",
  "Oracle Hospitality",
  "SAP",
  "UiPath",
  "Blue Prism",
  "ServiceNow",
  "Jira",
  "Confluence",
];

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-primary font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-muted/50 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="h-full bg-gradient-to-r from-primary to-primary/70"
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Core <span className="text-gradient-gold">Competencies</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Two decades of hands-on experience across enterprise technologies and strategic leadership.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Skill Bars */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">
              Strategic & Technical Skills
            </h3>
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} {...skill} index={index} />
            ))}
          </div>

          {/* Technology Stack */}
          <div ref={ref}>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">
              Technology Stack
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {technicalTools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="px-4 py-3 border border-border bg-background text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <span className="text-sm text-foreground">{tool}</span>
                </motion.div>
              ))}
            </div>

            {/* Competency Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 p-6 border border-primary/30 bg-primary/5"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <span className="block text-2xl font-display text-primary">20+</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Years Experience</span>
                </div>
                <div>
                  <span className="block text-2xl font-display text-primary">50+</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Projects Delivered</span>
                </div>
                <div>
                  <span className="block text-2xl font-display text-primary">15+</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Certifications</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
