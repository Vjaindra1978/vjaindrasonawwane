import { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  FileText, 
  Newspaper, 
  ArrowRight, 
  Bell, 
  CheckCircle,
  Play,
  Headphones,
  Clock,
  Calendar,
  Youtube,
  ExternalLink,
  Link as LinkIcon,
  X,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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

interface Episode {
  number: string;
  title: string;
  description: string;
  duration: string;
  date: string;
  youtubeId?: string;
}

const episodes: Episode[] = [
  {
    number: "EP 01",
    title: "The Art of Enterprise Digital Transformation",
    description: "Key principles separating successful transformations from failed initiatives.",
    duration: "45 min",
    date: "Coming Soon",
  },
  {
    number: "EP 02",
    title: "Building High-Performing IT Teams Across Cultures",
    description: "Leading multicultural teams across India, Middle East, and New Zealand.",
    duration: "38 min",
    date: "Coming Soon",
  },
  {
    number: "EP 03",
    title: "From Legacy to Cloud: A CTO's Journey",
    description: "Migrating enterprise systems without disrupting operations.",
    duration: "42 min",
    date: "Coming Soon",
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
  const [podcastEmail, setPodcastEmail] = useState("");
  const [subscribedTopics, setSubscribedTopics] = useState<string[]>([]);
  const [activeEpisode, setActiveEpisode] = useState<number | null>(null);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [comingSoonType, setComingSoonType] = useState<"spotify" | "youtube" | "articles">("spotify");
  const [showSubscribeDialog, setShowSubscribeDialog] = useState(false);
  const [isPodcastSubscribed, setIsPodcastSubscribed] = useState(false);

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

  const handlePodcastSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!podcastEmail) return;
    setIsPodcastSubscribed(true);
    toast({
      title: "Subscribed to Podcast!",
      description: "You'll be notified when new episodes are available.",
    });
    setPodcastEmail("");
    setShowSubscribeDialog(false);
  };

  const handlePlayEpisode = (index: number, youtubeId?: string) => {
    if (youtubeId) {
      setActiveEpisode(activeEpisode === index ? null : index);
    } else {
      setComingSoonType("youtube");
      setShowComingSoon(true);
    }
  };

  const handlePlatformClick = (platform: "spotify" | "youtube") => {
    setComingSoonType(platform);
    setShowComingSoon(true);
  };

  const handleViewAllArticles = () => {
    setComingSoonType("articles");
    setShowComingSoon(true);
  };

  const getComingSoonContent = () => {
    switch (comingSoonType) {
      case "spotify":
        return {
          title: "Spotify Coming Soon",
          description: "Our podcast will be available on Spotify soon. Subscribe to get notified when we launch!",
          icon: <Play className="w-12 h-12 text-primary" />
        };
      case "youtube":
        return {
          title: "YouTube Coming Soon",
          description: "Our video content is in production. Subscribe to get notified when new episodes are released!",
          icon: <Youtube className="w-12 h-12 text-primary" />
        };
      case "articles":
        return {
          title: "More Articles Coming Soon",
          description: "We're working on bringing you more insightful articles. Subscribe to stay updated!",
          icon: <Newspaper className="w-12 h-12 text-primary" />
        };
    }
  };

  const comingSoonContent = getComingSoonContent();

  return (
    <section id="publications" className="py-10 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        {/* Unified Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Insights & Media
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Knowledge Assets & <span className="text-gradient-gold">Podcast</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thought leadership on digital transformation, enterprise architecture, and technology leadership.
          </p>
        </motion.div>

        {/* Newsletter - Compact */}
        <motion.div 
          className="max-w-lg mx-auto mb-8"
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
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Publications & Knowledge */}
          <div className="space-y-6">
            <motion.div 
              className="flex items-center gap-3 mb-4"
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

            {/* Publications Grid - Compact with Animation */}
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
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <pub.icon className="w-5 h-5 text-primary" />
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

            {/* Online Articles - Compact with Animation */}
            <motion.div 
              className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/20 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-display text-sm font-semibold text-foreground flex items-center gap-2">
                  <LinkIcon className="w-4 h-4 text-primary" />
                  Featured Articles
                </h4>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-xs h-7 px-2"
                  onClick={handleViewAllArticles}
                >
                  View All
                </Button>
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

          {/* Right - Podcast */}
          <div className="space-y-6" id="podcast">
            <motion.div 
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Headphones className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Leadership & Transformation Podcast
                </h3>
                <p className="text-sm text-muted-foreground">Insights from 20+ years experience</p>
              </div>
            </motion.div>

            {/* Podcast Meta */}
            <motion.div 
              className="flex flex-wrap gap-4 text-xs text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" />
                <span>10-15 Min Episodes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Launching 2026</span>
              </div>
            </motion.div>

            {/* Subscribe Buttons */}
            <motion.div 
              className="flex gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button 
                variant="hero" 
                size="sm" 
                className="flex-1"
                onClick={() => handlePlatformClick("spotify")}
              >
                <Play className="w-4 h-4 mr-1.5" />
                Spotify
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1"
                onClick={() => handlePlatformClick("youtube")}
              >
                <Youtube className="w-4 h-4 mr-1.5" />
                YouTube
              </Button>
            </motion.div>

            {/* Episodes - Compact with Animation */}
            <div className="space-y-3">
              {episodes.map((episode, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  className={`group bg-card border rounded-xl p-4 transition-all cursor-pointer hover:shadow-lg hover:shadow-primary/5 ${
                    activeEpisode === index
                      ? "border-primary shadow-md shadow-primary/10"
                      : "border-border hover:border-primary/30"
                  }`}
                  onClick={() => handlePlayEpisode(index, episode.youtubeId)}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        activeEpisode === index
                          ? "bg-primary"
                          : "bg-primary/10 group-hover:bg-primary"
                      }`}
                    >
                      {episode.youtubeId ? (
                        <Play
                          className={`w-4 h-4 transition-colors ${
                            activeEpisode === index
                              ? "text-primary-foreground"
                              : "text-primary group-hover:text-primary-foreground"
                          }`}
                        />
                      ) : (
                        <Youtube className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-semibold text-primary">{episode.number}</span>
                        <span className="text-[10px] text-muted-foreground">{episode.duration}</span>
                        <span className="px-1.5 py-0.5 text-[10px] bg-secondary rounded text-secondary-foreground">
                          {episode.date}
                        </span>
                      </div>
                      <h4 className="font-medium text-foreground text-sm group-hover:text-primary transition-colors leading-tight">
                        {episode.title}
                      </h4>
                      <p className="text-muted-foreground text-xs mt-1 line-clamp-1">
                        {episode.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Video Player */}
            {activeEpisode !== null && episodes[activeEpisode]?.youtubeId && (
              <motion.div 
                className="rounded-xl overflow-hidden border border-border"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${episodes[activeEpisode].youtubeId}?autoplay=1`}
                    title={episodes[activeEpisode].title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
            )}

            {/* Subscribe Note - Enhanced */}
            <motion.div 
              className="p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20 cursor-pointer hover:border-primary/40 transition-all"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onClick={() => setShowSubscribeDialog(true)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Bell className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-medium">
                      {isPodcastSubscribed ? "You're subscribed!" : "Get notified for new episodes"}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {isPodcastSubscribed ? "We'll notify you when new episodes drop" : "Be the first to know when we launch"}
                    </p>
                  </div>
                </div>
                {!isPodcastSubscribed && (
                  <ArrowRight className="w-4 h-4 text-primary" />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Coming Soon Dialog */}
      <Dialog open={showComingSoon} onOpenChange={setShowComingSoon}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              {comingSoonContent.icon}
            </div>
            <DialogTitle className="text-2xl font-display">{comingSoonContent.title}</DialogTitle>
            <DialogDescription className="text-center pt-2">
              {comingSoonContent.description}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handlePodcastSubscribe} className="mt-4 space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={podcastEmail}
                onChange={(e) => setPodcastEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
            <Button type="submit" variant="hero" className="w-full">
              <Bell className="w-4 h-4 mr-2" />
              Notify Me When Available
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Subscribe Dialog */}
      <Dialog open={showSubscribeDialog} onOpenChange={setShowSubscribeDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Headphones className="w-12 h-12 text-primary" />
            </div>
            <DialogTitle className="text-2xl font-display">Subscribe to the Podcast</DialogTitle>
            <DialogDescription className="text-center pt-2">
              Get notified when new episodes are available. Be the first to hear insights on leadership, technology, and digital transformation.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handlePodcastSubscribe} className="mt-4 space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={podcastEmail}
                onChange={(e) => setPodcastEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
            <Button type="submit" variant="hero" className="w-full">
              <Bell className="w-4 h-4 mr-2" />
              Subscribe for Updates
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
