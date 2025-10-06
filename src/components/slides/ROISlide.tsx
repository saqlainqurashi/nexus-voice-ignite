import { DollarSign, TrendingUp, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ROISlide = () => {
  return (
    <div className="h-full flex items-center justify-center p-12 bg-gradient-primary">
      <div className="max-w-5xl w-full">
        <h2 className="text-5xl font-bold text-foreground mb-4 text-center">
          ROI & <span className="text-primary">Next Steps</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16">
          Invest in the future of your customer service
        </p>

        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="p-8 rounded-xl bg-card/50 border border-primary hover:shadow-glow-red transition-all text-center">
            <div className="inline-flex p-4 rounded-lg bg-primary/10 mb-4">
              <DollarSign className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-4xl font-bold text-primary mb-2">50-60%</h3>
            <p className="text-muted-foreground">Cost Savings</p>
          </div>

          <div className="p-8 rounded-xl bg-card/50 border border-primary hover:shadow-glow-red transition-all text-center">
            <div className="inline-flex p-4 rounded-lg bg-primary/10 mb-4">
              <Calendar className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-4xl font-bold text-primary mb-2">90 Days</h3>
            <p className="text-muted-foreground">To Full ROI</p>
          </div>

          <div className="p-8 rounded-xl bg-card/50 border border-primary hover:shadow-glow-red transition-all text-center">
            <div className="inline-flex p-4 rounded-lg bg-primary/10 mb-4">
              <TrendingUp className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-4xl font-bold text-primary mb-2">3x</h3>
            <p className="text-muted-foreground">Efficiency Gain</p>
          </div>
        </div>

        <div className="p-10 rounded-xl bg-gradient-accent text-primary-foreground shadow-glow-red">
          <h3 className="text-3xl font-bold mb-6 text-center">
            Ready to Transform Your Operations?
          </h3>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="p-4 rounded-lg bg-primary-foreground/10">
              <h4 className="font-semibold mb-2">Quick Implementation</h4>
              <p className="text-sm opacity-90">Go live in 4-6 weeks</p>
            </div>
            <div className="p-4 rounded-lg bg-primary-foreground/10">
              <h4 className="font-semibold mb-2">Zero Risk Trial</h4>
              <p className="text-sm opacity-90">Pilot program available</p>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-xl px-12 py-6 h-auto font-bold shadow-lg"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <p className="text-sm mt-4 opacity-90">
              Contact us: demo@growthnexus.ai | (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROISlide;
