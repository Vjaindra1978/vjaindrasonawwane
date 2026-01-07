import { useState } from "react";
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
  Link as LinkIcon
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
    link: null,
  },
  {
    type: "journal",
    title: "The Future of Enterprise Architecture in the Age of AI",
    description: "How AI is reshaping enterprise architecture practices.",
    status: "In Progress",
    icon: FileText,
    link: null,
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
    link: "https://linkedin.com/in/vjaindra",
    readTime: "5 min",
  },
  {
    title: "The CIO's Guide to Cloud Cost Optimization",
    source: "Medium",
    link: "https://medium.com/@vjaindra",
    readTime: "8 min",
  },
  {
    title: "Building a Data-Driven Culture: Beyond Technology",
    source: "LinkedIn",
    link: "https://linkedin.com/in/vjaindra",
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

export function KnowledgePodcastSection() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [subscribedTopics, setSubscribedTopics] = useState<string[]>([]);
  const [activeEpisode, setActiveEpisode] = useState<number | null>(null);

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

  const handlePlayEpisode = (index: number, youtubeId?: string) => {
    if (youtubeId) {
      setActiveEpisode(activeEpisode === index ? null : index);
    } else {
      window.open("https://youtube.com/@vjaindra", "_blank");
    }
  };

  return (
    <section id="publications" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        {/* Unified Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Insights & Media
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Knowledge Assets & <span className="text-gradient-gold">Podcast</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thought leadership on digital transformation, enterprise architecture, and technology leadership.
          </p>
        </div>

        {/* Newsletter - Compact */}
        <div className="max-w-lg mx-auto mb-12">
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
        </div>

        {/* Side by Side Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Publications & Knowledge */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Publications & Thought Leadership
                </h3>
                <p className="text-sm text-muted-foreground">Books, journals, and executive insights</p>
              </div>
            </div>

            {/* Publications Grid - Compact */}
            <div className="space-y-3">
              {publications.map((pub, index) => {
                const isSubscribed = subscribedTopics.includes(pub.title);
                return (
                  <div
                    key={index}
                    className="group bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                        <pub.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-foreground text-sm leading-tight truncate">
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
                          onClick={() => {
                            if (pub.link) {
                              window.open(pub.link, "_blank");
                            } else {
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
                  </div>
                );
              })}
            </div>

            {/* Online Articles - Compact */}
            <div className="bg-card/50 border border-border rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-display text-sm font-semibold text-foreground flex items-center gap-2">
                  <LinkIcon className="w-4 h-4 text-primary" />
                  Featured Articles
                </h4>
                <Button variant="ghost" size="sm" className="text-xs h-7 px-2">
                  View All
                </Button>
              </div>
              <div className="space-y-2">
                {articles.map((article, index) => (
                  <a
                    key={index}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-2.5 rounded-lg bg-secondary/30 hover:bg-secondary transition-colors"
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
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Podcast */}
          <div className="space-y-6" id="podcast">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Headphones className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Leadership & Transformation Podcast
                </h3>
                <p className="text-sm text-muted-foreground">Insights from 20+ years experience</p>
              </div>
            </div>

            {/* Podcast Meta */}
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" />
                <span>10-15 Min Episodes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Launching 2026</span>
              </div>
            </div>

            {/* Subscribe Buttons */}
            <div className="flex gap-2">
              <Button variant="hero" size="sm" asChild className="flex-1">
                <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer">
                  <Play className="w-4 h-4 mr-1.5" />
                  Spotify
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild className="flex-1">
                <a href="https://youtube.com/@vjaindra" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-4 h-4 mr-1.5" />
                  YouTube
                </a>
              </Button>
            </div>

            {/* Episodes - Compact */}
            <div className="space-y-3">
              {episodes.map((episode, index) => (
                <div
                  key={index}
                  className={`group bg-card border rounded-xl p-4 transition-all cursor-pointer ${
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
                </div>
              ))}
            </div>

            {/* Video Player */}
            {activeEpisode !== null && episodes[activeEpisode]?.youtubeId && (
              <div className="rounded-xl overflow-hidden border border-border">
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
              </div>
            )}

            {/* Subscribe Note */}
            <div className="p-3 bg-secondary/30 rounded-lg border border-border/50 text-center">
              <p className="text-muted-foreground text-xs">
                Subscribe to get notified when new episodes are available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
