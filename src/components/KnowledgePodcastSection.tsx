import { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  FileText, 
  Newspaper, 
  ArrowRight, 
  Bell, 
  CheckCircle,
  ExternalLink,
  Link as LinkIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const publications = [
  {
    type: "book",
    title: "Digital Transformation Playbook for Enterprise Leaders",
    description: "Comprehensive guide to leading successful digital transformation.",
    status: "Coming Soon",
    icon: BookOpen,
    link: "https://www.amazon.com/s?k=digital+transformation+playbook",
  },
  {
    type: "journal",
    title: "The Future of Enterprise Architecture in the Age of AI",
    description: "How AI is reshaping enterprise architecture practices.",
    status: "In Progress",
    icon: FileText,
    link: "https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=enterprise%20architecture%20AI",
  },
  {
    type: "article",
    title: "RPA Implementation: Lessons from 350+ Deployments",
    description: "Key insights from automation across hospitality & retail.",
    status: "Published",
    icon: Newspaper,
    link: "https://medium.com/@vjaindra",
  },
];

const articles = [
  {
    title: "Why Most ERP Projects Fail (And How to Avoid It)",
    source: "LinkedIn",
    link: "https://www.linkedin.com/pulse/why-most-erp-projects-fail-how-avoid-vinay-jaindra",
    readTime: "5 min",
  },
  {
    title: "The CIO's Guide to Cloud Cost Optimization",
    source: "Medium",
    link: "https://medium.com/@vjaindra/cloud-cost-optimization",
    readTime: "8 min",
  },
  {
    title: "Building a Data-Driven Culture: Beyond Technology",
    source: "LinkedIn",
    link: "https://www.linkedin.com/pulse/building-data-driven-culture-vinay-jaindra",
    readTime: "6 min",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }),
  hover: {
    y: -4,
    scale: 1.02,
    transition: { duration: 0.2 }
  }
};

export function KnowledgePodcastSection() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [subscribedTopics, setSubscribedTopics] = useState<string[]>([]);

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
    <section id="publications" className="py-16 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Insights & Media
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Publications & <span className="text-gradient-gold">Thought Leadership</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thought leadership on digital transformation, enterprise architecture, and technology leadership.
          </p>
        </motion.div>

        {/* Newsletter - Compact */}
        <motion.div 
          className="max-w-lg mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleNewsletterSubscribe} className="flex gap-2">
            <div className="relative flex-1">
              <Bell className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Get notified on new content"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-9 h-10 text-sm"
                required
              />
            </div>
            <Button type="submit" variant="hero" size="sm">
              Subscribe
            </Button>
          </form>
        </motion.div>

        {/* Centered Publications Layout */}
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Publications Header */}
          <motion.div 
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Publications & Thought Leadership
              </h3>
              <p className="text-sm text-muted-foreground">Books, journals, and executive insights</p>
            </div>
          </motion.div>

          {/* Publications Grid */}
          <div className="space-y-4">
            {publications.map((pub, index) => {
              const isSubscribed = subscribedTopics.includes(pub.title);
              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  className="group bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer"
                  onClick={() => {
                    if (pub.link) {
                      window.open(pub.link, "_blank");
                    }
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <pub.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-foreground text-base leading-tight group-hover:text-primary transition-colors">
                          {pub.title}
                        </h4>
                        <span
                          className={`px-2 py-0.5 text-xs font-medium rounded-full flex-shrink-0 ${
                            pub.status === "Published"
                              ? "bg-primary/20 text-primary"
                              : pub.status === "In Progress"
                              ? "bg-amber-500/20 text-amber-600"
                              : "bg-secondary text-secondary-foreground"
                          }`}
                        >
                          {pub.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">
                        {pub.description}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-0 h-auto text-sm text-primary hover:text-primary/80"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (pub.status === "Published" && pub.link) {
                            window.open(pub.link, "_blank");
                          } else if (pub.status !== "Published") {
                            handleNotify(pub.title);
                          }
                        }}
                      >
                        {pub.status === "Published" ? (
                          <>
                            Read Article <ArrowRight className="w-4 h-4 ml-1" />
                          </>
                        ) : isSubscribed ? (
                          <>
                            <CheckCircle className="w-4 h-4 mr-1" /> Subscribed
                          </>
                        ) : (
                          <>
                            <Bell className="w-4 h-4 mr-1" /> Notify Me
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Online Articles */}
          <motion.div 
            className="bg-card/50 border border-border rounded-xl p-6 hover:border-primary/20 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                <LinkIcon className="w-5 h-5 text-primary" />
                Featured Articles
              </h4>
            </div>
            <div className="space-y-3">
              {articles.map((article, index) => (
                <motion.a
                  key={index}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary transition-all"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-1 min-w-0">
                    <h5 className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                      {article.title}
                    </h5>
                    <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                      <span>{article.source}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-3" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
