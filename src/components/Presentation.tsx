import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import IntroSlide from "./slides/IntroSlide";
import ProblemSlide from "./slides/ProblemSlide";
import SolutionSlide from "./slides/SolutionSlide";
import BenefitsSlide from "./slides/BenefitsSlide";
import UseCasesSlide from "./slides/UseCasesSlide";
import CaseStudySlide from "./slides/CaseStudySlide";
import WhyChooseSlide from "./slides/WhyChooseSlide";
import ROISlide from "./slides/ROISlide";

const slides = [
  IntroSlide,
  ProblemSlide,
  SolutionSlide,
  BenefitsSlide,
  UseCasesSlide,
  CaseStudySlide,
  WhyChooseSlide,
  ROISlide,
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 relative overflow-hidden">
        <CurrentSlideComponent />
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full border border-border shadow-glow-cyan">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="text-foreground hover:text-primary hover:bg-secondary"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-primary w-8 shadow-glow-cyan"
                  : "bg-muted hover:bg-muted-foreground"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="text-foreground hover:text-primary hover:bg-secondary"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Slide Counter */}
      <div className="fixed top-8 right-8 text-sm text-muted-foreground">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Presentation;
