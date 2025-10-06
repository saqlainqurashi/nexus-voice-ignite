import { Bell, FileText, Users, Calendar } from "lucide-react";

const UseCasesSlide = () => {
  const useCases = [
    {
      icon: Bell,
      title: "Policy Renewal Reminders",
      description: "Automated outbound calls for upcoming renewals",
      features: ["Personalized reminders", "Payment processing", "Policy updates"],
    },
    {
      icon: FileText,
      title: "Claim Status Updates",
      description: "Real-time updates on claim processing",
      features: ["Instant notifications", "Document requests", "Resolution tracking"],
    },
    {
      icon: Users,
      title: "Lead Qualification",
      description: "Intelligent screening and routing of prospects",
      features: ["Smart qualification", "Priority routing", "Data capture"],
    },
    {
      icon: Calendar,
      title: "Appointment Scheduling",
      description: "Seamless booking for consultations and reviews",
      features: ["Calendar integration", "Automated reminders", "Rescheduling support"],
    },
  ];

  return (
    <div className="h-full flex items-center justify-center p-12 bg-gradient-primary">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-bold text-foreground mb-4 text-center">
          Proven <span className="text-primary">Use Cases</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16">
          Real-world applications driving results
        </p>

        <div className="grid grid-cols-2 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-card/50 border border-border hover:border-primary transition-all hover:shadow-glow-cyan group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {useCase.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 ml-14">
                  {useCase.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UseCasesSlide;
