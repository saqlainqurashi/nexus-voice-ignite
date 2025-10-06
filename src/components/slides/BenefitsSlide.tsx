import { TrendingDown, Zap, Heart, Link } from "lucide-react";

const BenefitsSlide = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Cost Reduction",
      description: "Significantly lower operational expenses",
      stat: "50-60%",
      statLabel: "Cost Savings",
    },
    {
      icon: Zap,
      title: "Faster Response Times",
      description: "Instant answers to customer queries",
      stat: "70%",
      statLabel: "Faster Responses",
    },
    {
      icon: Heart,
      title: "Improved Satisfaction",
      description: "Enhanced customer experience and retention",
      stat: "40%",
      statLabel: "Better Engagement",
    },
    {
      icon: Link,
      title: "Seamless CRM Integration",
      description: "Works with your existing tools and workflows",
      stat: "100%",
      statLabel: "Compatibility",
    },
  ];

  return (
    <div className="h-full flex items-center justify-center p-12 bg-gradient-primary">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-bold text-foreground mb-4 text-center">
          Measurable <span className="text-primary">Benefits</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16">
          Transform your operations with proven results
        </p>

        <div className="grid grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-xl bg-card/50 border border-border hover:border-primary transition-all hover:shadow-glow-red group"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {benefit.description}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-primary">
                        {benefit.stat}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {benefit.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSlide;
