import { useState } from "react";
import { Play, Headphones, Clock, Calendar, Youtube, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    description: "Exploring the key principles that separate successful transformations from failed initiatives.",
    duration: "45 min",
    date: "Coming Soon",
  },
  {
    number: "EP 02",
    title: "Building High-Performing IT Teams Across Cultures",
    description: "Lessons from leading multicultural technology teams across India, Middle East, and New Zealand.",
    duration: "38 min",
    date: "Coming Soon",
  },
  {
    number: "EP 03",
    title: "From Legacy to Cloud: A CTO's Journey",
    description: "Real-world insights on migrating enterprise systems to the cloud without disrupting operations.",
    duration: "42 min",
    date: "Coming Soon",
  },
];

export function PodcastSection() {
  const [activeEpisode, setActiveEpisode] = useState<number | null>(null);

  const handlePlayEpisode = (index: number, youtubeId?: string) => {
    if (youtubeId) {
      setActiveEpisode(activeEpisode === index ? null : index);
    } else {
      // For coming soon episodes, open YouTube channel
      window.open("https://youtube.com/@vjaindra", "_blank");
    }
  };

  return (
    <section id="podcast" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">The Podcast</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Leadership, Technology & <span className="text-gradient-gold">Transformation</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Conversations about the intersection of technology leadership, digital transformation, and organizational
              change. Featuring insights from 20+ years of enterprise experience.
            </p>

            {/* Podcast Info */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Headphones className="w-5 h-5 text-primary" />
                <span>Weekly Episodes</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                //..<span>30-45 Minutes</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Launching 2026</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer">
                  <Play className="w-5 h-5 mr-2" />
                  Subscribe on Spotify
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://youtube.com/@vjaindra" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5 mr-2" />
                  Subscribe on YouTube
                </a>
              </Button>
            </div>

            {/* Video Player Area - Shows when episode is active */}
            {activeEpisode !== null && episodes[activeEpisode]?.youtubeId && (
              <div className="mt-8 rounded-xl overflow-hidden border border-border">
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
          </div>

          {/* Right Episodes */}
          <div className="space-y-4">
            {episodes.map((episode, index) => (
              <div
                key={index}
                className={`group bg-card border rounded-xl p-6 transition-all duration-300 cursor-pointer ${
                  activeEpisode === index ? "border-primary shadow-lg shadow-primary/10" : "border-border hover-lift"
                }`}
                onClick={() => handlePlayEpisode(index, episode.youtubeId)}
              >
                <div className="flex items-start gap-4">
                  {/* Play Button */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      activeEpisode === index ? "bg-primary" : "bg-primary/10 group-hover:bg-primary"
                    }`}
                  >
                    {episode.youtubeId ? (
                      <Play
                        className={`w-6 h-6 transition-colors ${
                          activeEpisode === index
                            ? "text-primary-foreground"
                            : "text-primary group-hover:text-primary-foreground"
                        }`}
                      />
                    ) : (
                      <Youtube className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold text-primary">{episode.number}</span>
                      <span className="text-xs text-muted-foreground">{episode.duration}</span>
                      <span className="px-2 py-0.5 text-xs bg-secondary rounded-full text-secondary-foreground">
                        {episode.date}
                      </span>
                    </div>
                    <h4 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {episode.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">{episode.description}</p>

                    {episode.youtubeId && (
                      <div className="mt-3 flex items-center gap-2 text-primary text-sm">
                        <ExternalLink className="w-4 h-4" />
                        <span>Watch on YouTube</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Add Episode Note */}
            <div className="p-4 bg-secondary/30 rounded-lg border border-border/50 text-center">
              <p className="text-muted-foreground text-sm">
                New episodes added regularly. Subscribe to get notified when new content is available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
