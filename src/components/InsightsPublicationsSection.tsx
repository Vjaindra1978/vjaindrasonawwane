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

export function InsightsPublicationsSection() {
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
    <section id="insights" className="py-16 lg:py-20 bg-background">
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
            Knowledge & Perspectives
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-4">
            Insights & <span className="text-gradient-gold">Publications</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Thoughts on leadership, technology, and digital transformation.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Insights */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-xl text-foreground">Perspectives</h3>
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
            <div className="border border-border p-8 mb-8">
              <Quote className="w-8 h-8 text-accent mb-6" />
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="font-display text-xl lg:text-2xl text-foreground leading-relaxed mb-6"
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
                  <button onClick={prevQuote} className="w-10 h-10 flex items-center justify-center border border-border hover:border-foreground transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={nextQuote} className="w-10 h-10 flex items-center justify-center border border-border hover:border-foreground transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <form onSubmit={handleNewsletterSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Subscribe for updates"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-border"
                required
              />
              <Button type="submit" variant="outline">
                Subscribe
              </Button>
            </form>
          </div>

          {/* Right - Publications */}
          <div id="publications">
            <h3 className="font-display text-xl text-foreground mb-6">Publications</h3>
            <div className="space-y-4">
              {publications.map((pub, index) => {
                const isSubscribed = subscribedTopics.includes(pub.title);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border border-border p-6 group hover:border-foreground transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center border border-border">
                        <pub.icon className="w-4 h-4 text-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-display text-lg text-foreground">{pub.title}</h4>
                          <span className={`text-xs tracking-wider uppercase ${
                            pub.status === "Published" ? "text-accent" : "text-muted-foreground"
                          }`}>
                            {pub.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{pub.description}</p>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
