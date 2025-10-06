import { Award, Shield, Headphones } from "lucide-react";

const WhyChooseSlide = () => {
  const reasons = [
    {
      icon: Award,
      title: "AI Automation Expertise",
      points: [
        "Specialized in insurance industry workflows",
        "Proven track record with enterprise clients",
        "Cutting-edge voice AI technology",
        "Custom solutions tailored to your needs",
      ],
    },
    {
      icon: Shield,
      title: "Secure Integrations",
      points: [
        "Bank-level encryption and security",
        "HIPAA and compliance ready",
        "Seamless CRM and system integration",
        "Data privacy and protection guaranteed",
      ],
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      points: [
        "24/7 technical support team",
        "Ongoing optimization and updates",
        "Training and onboarding included",
        "Strategic consulting and guidance",
      ],
    },
  ];

  return (
    <div className="h-full flex items-center justify-center p-12 bg-gradient-primary">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-bold text-foreground mb-4 text-center">
          Why Choose <span className="text-primary">Growth Nexus</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16">
          Your trusted partner in AI automation
        </p>

        <div className="grid grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-xl bg-card/50 border border-border hover:border-primary transition-all hover:shadow-glow-red group"
              >
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {reason.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {reason.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-xl bg-gradient-accent text-primary-foreground text-center shadow-glow-red">
          <p className="text-lg font-semibold">
            Trusted by leading insurance companies across the United States
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSlide;
