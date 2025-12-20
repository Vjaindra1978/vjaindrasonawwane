import { Award, Mic, GraduationCap, Trophy } from "lucide-react";

const recognitions = [
  {
    year: "2023",
    title: "DXC Award – Best Digital Customer Experience Leader",
    type: "award",
    icon: Trophy,
    description: "Recognized for delivering exceptional digital transformation outcomes and customer experience innovation.",
  },
  {
    year: "2023",
    title: "Speaker at Transform with Google",
    type: "speaker",
    icon: Mic,
    description: "Featured speaker sharing insights on digital transformation strategies and cloud adoption.",
  },
  {
    year: "2023",
    title: "Six Sigma Trainer",
    type: "training",
    icon: GraduationCap,
    description: "Certified trainer delivering Six Sigma methodologies for process excellence and quality improvement.",
  },
  {
    year: "2022",
    title: "Speaker at Digital Transformance Forums",
    type: "speaker",
    icon: Mic,
    description: "Keynote speaker at the Digital Transformance Forums 2022, presenting enterprise transformation best practices.",
  },
];

const iconColors = {
  award: "bg-primary/20 text-primary",
  speaker: "bg-blue-500/20 text-blue-400",
  training: "bg-emerald-500/20 text-emerald-400",
};

export function RecognitionsSection() {
  return (
    <section id="recognitions" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Recognition & Leadership
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Recognitions, Speaker &{' '}
            <span className="text-gradient-gold">Training</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Industry recognition for excellence in digital transformation and thought leadership
          </p>
        </div>

        {/* Recognitions Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {recognitions.map((item, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-6 hover-lift"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${iconColors[item.type as keyof typeof iconColors]}`}>
                  <item.icon className="w-7 h-7" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-primary/20 text-primary">
                      {item.year}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-10 max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            Continuously contributing to the industry through speaking engagements, 
            training programs, and thought leadership initiatives.
          </p>
        </div>
      </div>
    </section>
  );
}
