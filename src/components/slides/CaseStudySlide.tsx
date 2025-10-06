import { Building2, TrendingUp, CheckCircle } from "lucide-react";

const CaseStudySlide = () => {
  return (
    <div className="h-full flex items-center justify-center p-12 bg-gradient-primary">
      <div className="max-w-5xl w-full">
        <h2 className="text-5xl font-bold text-foreground mb-4 text-center">
          Success <span className="text-primary">Story</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16">
          Real results from a leading insurance provider
        </p>

        <div className="p-10 rounded-xl bg-card/50 border border-primary shadow-glow-cyan">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 rounded-lg bg-primary/10">
              <Building2 className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                Mid-Size Insurance Provider
              </h3>
              <p className="text-muted-foreground">50,000+ active policyholders</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="p-6 rounded-lg bg-gradient-accent text-primary-foreground">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="h-6 w-6" />
                <h4 className="text-xl font-semibold">70% Faster</h4>
              </div>
              <p className="text-sm opacity-90">
                Response rates for customer inquiries and support requests
              </p>
            </div>

            <div className="p-6 rounded-lg bg-gradient-accent text-primary-foreground">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="h-6 w-6" />
                <h4 className="text-xl font-semibold">40% Reduction</h4>
              </div>
              <p className="text-sm opacity-90">
                In missed policy renewals and lapsed coverage
              </p>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-secondary/50 border border-border">
            <h4 className="text-lg font-semibold text-foreground mb-3">
              Implementation Results:
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                <span>Deployed in 4 weeks with full CRM integration</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                <span>Handled 15,000+ automated calls in first month</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                <span>Customer satisfaction scores increased by 28%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudySlide;
