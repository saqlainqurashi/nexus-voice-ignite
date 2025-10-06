import { Phone, Zap, Clock, Database } from "lucide-react";

const SolutionSlide = () => {
  const features = [
    {
      icon: Phone,
      title: "Intelligent Voice Bots",
      description: "Make and receive calls automatically",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a customer inquiry",
    },
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Handle policy renewals and claims updates in real-time",
    },
    {
      icon: Database,
      title: "Smart Integration",
      description: "Seamlessly connects with your existing systems",
    },
  ];

  return (
    <div className="h-full flex items-center justify-center p-12 bg-gradient-primary">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-bold text-foreground mb-4 text-center">
          AI Calling Agent <span className="text-primary">Solution</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16">
          Powered by advanced AI voice technology
        </p>

        <div className="grid grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-card/50 border border-border hover:border-primary transition-all hover:shadow-glow-red group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-foreground ml-10">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="p-8 rounded-xl bg-gradient-accent text-primary-foreground border border-primary shadow-glow-red">
          <h3 className="text-2xl font-bold mb-4">Key Capabilities</h3>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary-foreground"></div>
              Policy renewal reminders and processing
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary-foreground"></div>
              Claims status updates and documentation
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary-foreground"></div>
              Customer query resolution and support
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SolutionSlide;
