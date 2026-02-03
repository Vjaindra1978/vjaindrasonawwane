import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Quote,
  ChevronLeft, 
  ChevronRight,
  BookOpen, 
  FileText, 
  Newspaper, 
  Bell, 
  CheckCircle,
  ExternalLink,
  Mic,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const quotes = [
  {
    text: "Digital transformation is not about technology—it's about reimagining how we create value for customers and stakeholders.",
    author: "Vjaindra Sonawwane",
    role: "Personal Reflection",
  },
  {
    text: "The best architecture is invisible. It empowers teams to innovate without thinking about infrastructure.",
    author: "Vjaindra Sonawwane",
    role: "On Enterprise Architecture",
  },
  {
    text: "Automation should liberate human potential, not replace human purpose. Focus on augmenting, not eliminating.",
    author: "Vjaindra Sonawwane",
    role: "On RPA & Automation",
  },
];

const curatedQuotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    role: "Apple Co-founder",
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    role: "Apple Co-founder",
  },
];

const publications = [
  {
    type: "book",
    title: "Digital Transformation Playbook",
    description: "Comprehensive guide to leading successful digital transformation.",
    status: "Coming Soon",
    icon: BookOpen,
    link: "#",
  },
  {
    type: "journal",
    title: "Enterprise Architecture in the Age of AI",
    description: "How AI is reshaping enterprise architecture practices.",
    status: "In Progress",
    icon: FileText,
    link: "#",
  },
  {
    type: "article",
    title: "RPA Implementation: Lessons Learned",
    description: "Key insights from automation across hospitality & retail.",
    status: "Published",
    icon: Newspaper,
    link: "https://medium.com/@vjaindra",
  },
];

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
};

export function InsightsRecognitionsSection() {
  const { toast } = useToast();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"personal" | "curated">("personal");
  const [email, setEmail] = useState("");
  const [subscribedTopics, setSubscribedTopics] = useState<string[]>([]);

  const activeQuotes = activeTab === "personal" ? quotes : curatedQuotes;
  const currentQuote = activeQuotes[currentIndex];

  const nextQuote = () => setCurrentIndex((prev) => (prev + 1) % activeQuotes.length);
  const prevQuote = () => setCurrentIndex((prev) => (prev - 1 + activeQuotes.length) % activeQuotes.length);

  const handleTabChange = (tab: "personal" | "curated") => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  const handleNotify = (title: string) => {
    if (subscribedTopics.includes(title)) return;
    setSubscribedTopics([...subscribedTopics, title]);
    toast({
      title: "Notification Set",
      description: `You'll be notified when "${title}" is available.`,
    });
  };

  const handleNewsletterSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "Subscribed!",
      description: "You'll receive updates on new publications and insights.",
    });
    setEmail("");
  };

  return (
    <section id="insights" className="py-10 lg:py-12 bg-secondary/50">
      <div className="container mx-auto px-2 sm:px-3 lg:px-4">
        {/* Two Column Layout for Both Sections */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Left Column - Insights & Publications */}
          <div>
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                Knowledge & Perspectives
              </p>
              <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-3">
                Insights & <span className="text-gradient-gold">Publications</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Thoughts on leadership, technology, and digital transformation.
              </p>
            </motion.div>

            {/* Perspectives */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-lg text-foreground">Perspectives</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleTabChange("personal")}
                    className={`text-xs tracking-wider uppercase px-3 py-1 transition-colors ${
                      activeTab === "personal" ? "text-foreground border-b border-foreground" : "text-muted-foreground"
                    }`}
                  >
                    Personal
                  </button>
                  <button
                    onClick={() => handleTabChange("curated")}
                    className={`text-xs tracking-wider uppercase px-3 py-1 transition-colors ${
                      activeTab === "curated" ? "text-foreground border-b border-foreground" : "text-muted-foreground"
                    }`}
                  >
                    Curated
                  </button>
                </div>
              </div>

              {/* Quote */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border-2 border-foreground/20 p-6 mb-6"
              >
                <Quote className="w-6 h-6 text-accent mb-4" />
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="font-display text-lg lg:text-xl text-foreground leading-relaxed mb-4"
                  >
                    "{currentQuote.text}"
                  </motion.blockquote>
                </AnimatePresence>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-foreground">{currentQuote.author}</p>
                    <p className="text-xs text-muted-foreground">{currentQuote.role}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={prevQuote} className="w-8 h-8 flex items-center justify-center border-2 border-foreground/20 hover:border-foreground/40 transition-colors">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button onClick={nextQuote} className="w-8 h-8 flex items-center justify-center border-2 border-foreground/20 hover:border-foreground/40 transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Newsletter */}
              <form onSubmit={handleNewsletterSubscribe} className="flex gap-2 mb-6">
                <Input
                  type="email"
                  placeholder="Subscribe for updates"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border-border"
                  required
                />
                <Button type="submit" variant="outline" size="sm">
                  Subscribe
                </Button>
              </form>
            </div>

            {/* Publications */}
            <div id="publications">
              <h3 className="font-display text-lg text-foreground mb-4">Publications</h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {publications.map((pub, index) => {
                  const isSubscribed = subscribedTopics.includes(pub.title);
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="border-2 border-foreground/20 p-4 group hover:border-foreground/40 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 flex items-center justify-center border-2 border-foreground/20 flex-shrink-0">
                          <pub.icon className="w-4 h-4 text-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h4 className="font-display text-base text-foreground">{pub.title}</h4>
                            <span className={`text-xs tracking-wider uppercase ${
                              pub.status === "Published" ? "text-accent" : "text-muted-foreground"
                            }`}>
                              {pub.status}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mb-2">{pub.description}</p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (pub.status === "Published" && pub.link) {
                                window.open(pub.link, "_blank");
                              } else if (pub.status !== "Published") {
                                handleNotify(pub.title);
                              }
                            }}
                            className="text-xs text-foreground flex items-center gap-1 hover:opacity-70 transition-opacity"
                          >
                            {pub.status === "Published" ? (
                              <>Read <ExternalLink className="w-3 h-3" /></>
                            ) : isSubscribed ? (
                              <><CheckCircle className="w-3 h-3" /> Subscribed</>
                            ) : (
                              <><Bell className="w-3 h-3" /> Notify Me</>
                            )}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Right Column - Recognition & Leadership */}
          <div>
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                Recognition & Leadership
              </p>
              <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-3">
                Awards & <span className="text-gradient-gold">Speaking</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Industry recognition for excellence in digital transformation and thought leadership.
              </p>
            </motion.div>

            {/* Recognitions Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-4"
            >
              {recognitions.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5, boxShadow: "0 4px 20px -5px hsl(var(--primary) / 0.2)" }}
                  className="bg-background p-5 border-2 border-foreground/20 group hover:border-foreground/40 transition-all duration-300"
                >
                  {/* Year & Type */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs tracking-wider text-muted-foreground">
                      {item.year}
                    </span>
                    <span className="text-xs tracking-wider uppercase text-muted-foreground">
                      {item.type}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-9 h-9 flex items-center justify-center border-2 border-foreground/20 mb-3 group-hover:border-foreground/40 transition-colors">
                    <item.icon className="w-4 h-4 text-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-base text-foreground mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
