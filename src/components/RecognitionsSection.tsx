import { Mic, GraduationCap, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const recognitions = [
  {
    year: "2023",
    title: "DXC Award – Best Digital Customer Experience Leader",
    type: "Award",
    icon: Trophy,
    description: "Recognized for delivering exceptional digital transformation outcomes and customer experience innovation.",
  },
  {
    year: "2023",
    title: "Speaker at Transform with Google",
    type: "Speaking",
    icon: Mic,
    description: "Featured speaker sharing insights on digital transformation strategies and cloud adoption.",
  },
  {
    year: "2023",
    title: "Six Sigma Trainer",
    type: "Certification",
    icon: GraduationCap,
    description: "Certified trainer delivering Six Sigma methodologies for process excellence and quality improvement.",
  },
  {
    year: "2022",
    title: "Speaker at Digital Transformance Forums",
    type: "Speaking",
    icon: Mic,
    description: "Keynote speaker at the Digital Transformance Forums 2022, presenting enterprise transformation best practices.",
  },
];

export function RecognitionsSection() {
  return (
    <section id="recognitions" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Recognition & Leadership
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Awards & <span className="text-gradient-gold">Speaking</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Industry recognition for excellence in digital transformation and thought leadership.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {recognitions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-8 group"
            >
              {/* Year & Type */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs tracking-wider text-muted-foreground">
                  {item.year}
                </span>
                <span className="text-xs tracking-wider uppercase text-muted-foreground">
                  {item.type}
                </span>
              </div>

              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center border border-border mb-4 group-hover:border-foreground transition-colors">
                <item.icon className="w-4 h-4 text-foreground" />
              </div>

              {/* Title */}
              <h3 className="font-display text-lg text-foreground mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
