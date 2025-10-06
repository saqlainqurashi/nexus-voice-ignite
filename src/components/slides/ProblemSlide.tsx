import { PhoneOff, Clock, TrendingUp, DollarSign } from "lucide-react";

const ProblemSlide = () => {
  const problems = [
    {
      icon: PhoneOff,
      title: "High Call Volumes",
      description: "Overwhelming number of incoming customer calls",
    },
    {
      icon: Clock,
      title: "Manual Follow-ups",
      description: "Time-consuming manual processes for renewals and claims",
    },
    {
      icon: TrendingUp,
      title: "Long Response Times",
      description: "Customers waiting hours or days for answers",
    },
    {
      icon: DollarSign,
      title: "Rising Costs",
      description: "Increasing customer service operational expenses",
    },
  ];

  return (
    <div className="h-full flex items-center justify-center p-12 bg-gradient-primary">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-bold text-foreground mb-4 text-center">
          The <span className="text-primary">Challenge</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16">
          Insurance companies face critical operational hurdles
        </p>

        <div className="grid grid-cols-2 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
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
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {problem.description}
                    </p>
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

export default ProblemSlide;
