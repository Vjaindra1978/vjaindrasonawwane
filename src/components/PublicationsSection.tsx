import { useState } from "react";
import { BookOpen, FileText, Newspaper, ArrowRight, Bell, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const publications = [
  {
    type: "book",
    title: "Digital Transformation Playbook for Enterprise Leaders",
    description: "A comprehensive guide to leading successful digital transformation initiatives in large organizations.",
    status: "Coming Soon",
    icon: BookOpen,
  },
  {
    type: "journal",
    title: "The Future of Enterprise Architecture in the Age of AI",
    description: "Exploring how artificial intelligence is reshaping enterprise architecture practices and decision-making.",
    status: "In Progress",
    icon: FileText,
  },
  {
    type: "article",
    title: "RPA Implementation: Lessons from 350+ Site Deployments",
    description: "Key insights and best practices from implementing automation across hospitality and retail operations.",
    status: "Published",
    icon: Newspaper,
  },
];

const shortNotes = [
  {
    title: "Why Most ERP Projects Fail (And How to Avoid It)",
    date: "December 2024",
    readTime: "5 min read",
  },
  {
    title: "The CIO's Guide to Cloud Cost Optimization",
    date: "November 2024",
    readTime: "8 min read",
  },
  {
    title: "Building a Data-Driven Culture: Beyond the Technology",
    date: "October 2024",
    readTime: "6 min read",
  },
  {
    title: "Customer Experience in the Post-Pandemic Era",
    date: "September 2024",
    readTime: "7 min read",
  },
];

export function PublicationsSection() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [subscribedTopics, setSubscribedTopics] = useState<string[]>([]);

  const handleNotify = (title: string) => {
    if (subscribedTopics.includes(title)) {
      toast({
        title: "Already Subscribed",
        description: "You're already subscribed to updates for this publication.",
      });
      return;
    }

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
    <section id="publications" className="py-16 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Knowledge Assets
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Publications &{' '}
            <span className="text-gradient-gold">Thought Leadership</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Books, journals, and executive insights on digital transformation, 
            enterprise architecture, and technology leadership.
          </p>
        </div>

        {/* Newsletter Subscribe */}
        <div className="max-w-xl mx-auto mb-12">
          <form onSubmit={handleNewsletterSubscribe} className="flex gap-3">
            <div className="relative flex-1">
              <Bell className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email to get notified"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
            <Button type="submit" variant="hero">
              Get Notified
            </Button>
          </form>
        </div>

        {/* Featured Publications */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {publications.map((pub, index) => {
            const isSubscribed = subscribedTopics.includes(pub.title);
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-6 hover-lift"
              >
                {/* Icon & Status */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <pub.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      pub.status === "Published"
                        ? "bg-primary/20 text-primary"
                        : pub.status === "In Progress"
                        ? "bg-accent/20 text-accent"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {pub.status}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {pub.description}
                </p>

                {/* Action */}
                <Button 
                  variant={isSubscribed ? "outline" : "ghost"} 
                  className={`p-0 h-auto ${isSubscribed ? 'text-primary' : 'text-primary hover:text-primary/80'}`}
                  onClick={() => pub.status !== "Published" && handleNotify(pub.title)}
                >
                  {pub.status === "Published" ? (
                    <>
                      Read Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  ) : isSubscribed ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Subscribed
                    </>
                  ) : (
                    <>
                      <Bell className="w-4 h-4 mr-2" />
                      Get Notified
                    </>
                  )}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Short Notes */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display text-2xl font-semibold text-foreground">
              Executive Short Notes
            </h3>
            <Button variant="outline">
              View All Notes
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {shortNotes.map((note, index) => (
              <div
                key={index}
                className="group flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer"
              >
                <div>
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {note.title}
                  </h4>
                  <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                    <span>{note.date}</span>
                    <span>•</span>
                    <span>{note.readTime}</span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
