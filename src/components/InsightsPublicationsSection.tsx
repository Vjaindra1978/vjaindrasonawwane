import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Quote,
  ChevronLeft, 
  ChevronRight,
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
import { ScrollReveal } from "./ScrollReveal";

// Quotes data
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
  {
    text: "Data without insight is just noise. The goal is to turn information into action.",
    author: "Vjaindra Sonawwane",
    role: "On Analytics",
  },
  {
    text: "Customer experience is the new battleground. Every touchpoint is an opportunity to build loyalty.",
    author: "Vjaindra Sonawwane",
    role: "On CX Innovation",
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
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
    role: "Traditional Wisdom",
  },
];

// Publications data
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

export function InsightsPublicationsSection() {
  const { toast } = useToast();
  
  // Quotes state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"personal" | "curated">("personal");
  
  // Publications state
  const [email, setEmail] = useState("");
  const [subscribedTopics, setSubscribedTopics] = useState<string[]>([]);

  const activeQuotes = activeTab === "personal" ? quotes : curatedQuotes;
  const currentQuote = activeQuotes[currentIndex];

  const nextQuote = () => {
    setCurrentIndex((prev) => (prev + 1) % activeQuotes.length);
  };

  const prevQuote = () => {
    setCurrentIndex((prev) => (prev - 1 + activeQuotes.length) % activeQuotes.length);
  };

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
    <section id="insights" className="py-16 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal variant="fadeUp">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
              Knowledge & Perspectives
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Insights & <span className="text-gradient-gold">Publications</span>
            </h2>
            <p className="text-muted-foreground">
              Thoughts on leadership, technology, and thought leadership on digital transformation.
            </p>
          </div>
        </ScrollReveal>

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

        {/* Side by Side Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Insights & Reflections */}
          <div className="space-y-6">
            <motion.div 
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Insights & Reflections
                </h3>
                <p className="text-sm text-muted-foreground">Thoughts on leadership & transformation</p>
              </div>
            </motion.div>

            {/* Tab Switcher */}
            <div className="flex gap-2 mb-4">
              <Button
                variant={activeTab === "personal" ? "default" : "outline"}
                size="sm"
                onClick={() => handleTabChange("personal")}
              >
                My Perspectives
              </Button>
              <Button 
                variant={activeTab === "curated" ? "default" : "outline"} 
                size="sm"
                onClick={() => handleTabChange("curated")}
              >
                Curated Wisdom
              </Button>
            </div>

            {/* Quote Card */}
            <div className="relative bg-card border border-border rounded-2xl p-6">
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              {/* Quote Content */}
              <div className="text-center pt-4">
                <AnimatePresence mode="wait">
                  <motion.blockquote 
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="font-display text-lg md:text-xl font-medium text-foreground leading-relaxed mb-4"
                  >
                    "{currentQuote.text}"
                  </motion.blockquote>
                </AnimatePresence>

                <motion.div 
                  key={`author-${currentIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col items-center"
                >
                  <span className="font-semibold text-foreground text-sm">{currentQuote.author}</span>
                  <span className="text-muted-foreground text-xs">{currentQuote.role}</span>
                </motion.div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6">
                <Button variant="outline" size="icon" onClick={prevQuote} className="rounded-full h-8 w-8">
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                {/* Dots */}
                <div className="flex gap-2">
                  {activeQuotes.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>

                <Button variant="outline" size="icon" onClick={nextQuote} className="rounded-full h-8 w-8">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right - Publications & Thought Leadership */}
          <div className="space-y-6" id="publications">
            <motion.div 
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Publications & Thought Leadership
                </h3>
                <p className="text-sm text-muted-foreground">Books, journals, and executive insights</p>
              </div>
            </motion.div>

            {/* Publications Grid */}
            <div className="space-y-3">
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
                    className="group bg-card border border-border rounded-xl p-4 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer"
                    onClick={() => {
                      if (pub.link) {
                        window.open(pub.link, "_blank");
                      }
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
                        <pub.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-foreground text-sm leading-tight truncate group-hover:text-primary transition-colors">
                            {pub.title}
                          </h4>
                          <span
                            className={`px-2 py-0.5 text-[10px] font-medium rounded-full flex-shrink-0 ${
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
                        <p className="text-muted-foreground text-xs mb-2 line-clamp-1">
                          {pub.description}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-0 h-auto text-xs text-primary hover:text-primary/80"
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
                              Read Article <ArrowRight className="w-3 h-3 ml-1" />
                            </>
                          ) : isSubscribed ? (
                            <>
                              <CheckCircle className="w-3 h-3 mr-1" /> Subscribed
                            </>
                          ) : (
                            <>
                              <Bell className="w-3 h-3 mr-1" /> Notify Me
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
              className="bg-card border border-border rounded-xl p-4 hover:border-primary/20 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-display text-sm font-semibold text-foreground flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-gradient-gold flex items-center justify-center">
                    <LinkIcon className="w-3 h-3 text-primary-foreground" />
                  </div>
                  Featured Articles
                </h4>
              </div>
              <div className="space-y-2">
                {articles.map((article, index) => (
                  <motion.a
                    key={index}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-2.5 rounded-lg bg-secondary/30 hover:bg-secondary transition-all"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-1 min-w-0">
                      <h5 className="font-medium text-foreground text-xs group-hover:text-primary transition-colors truncate">
                        {article.title}
                      </h5>
                      <div className="flex items-center gap-2 mt-0.5 text-[10px] text-muted-foreground">
                        <span>{article.source}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
