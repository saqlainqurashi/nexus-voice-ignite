import { Bot, Workflow, MessageSquare } from "lucide-react";

const IntroSlide = () => {
  return (
    <div className="h-full flex items-center justify-center p-12 bg-gradient-primary">
      <div className="max-w-5xl w-full text-center space-y-8">
        <div className="inline-block">
          <h1 className="text-6xl font-bold text-foreground mb-2">
            Growth <span className="text-primary">Nexus</span>
          </h1>
          <div className="h-1 bg-gradient-accent rounded-full shadow-glow-red"></div>
        </div>

        <h2 className="text-4xl font-semibold text-foreground mt-8">
          AI Calling Agents for the Insurance Industry
        </h2>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Transforming customer service through intelligent automation
        </p>

        <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card/50 border border-border hover:border-primary transition-all hover:shadow-glow-red">
            <MessageSquare className="h-12 w-12 text-primary" />
            <span className="text-foreground font-medium">AI Chatbots</span>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card/50 border border-border hover:border-primary transition-all hover:shadow-glow-red">
            <Bot className="h-12 w-12 text-primary" />
            <span className="text-foreground font-medium">AI Calling Agents</span>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card/50 border border-border hover:border-primary transition-all hover:shadow-glow-red">
            <Workflow className="h-12 w-12 text-primary" />
            <span className="text-foreground font-medium">Workflow Automation</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-8">
          Specialized AI automation for U.S. businesses
        </p>
      </div>
    </div>
  );
};

export default IntroSlide;
