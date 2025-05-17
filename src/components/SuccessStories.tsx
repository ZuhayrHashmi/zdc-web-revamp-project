
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuccessStory {
  title: string;
  description: string;
  outcome: string;
  industry: string;
}

const SuccessStories = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const storiesRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const successStories: SuccessStory[] = [
    {
      title: "Retail Analytics Transformation",
      description: "A national retail chain struggled with fragmented data across multiple stores. We implemented a centralized analytics platform that consolidated data from all locations and created intelligent dashboards for real-time insights.",
      outcome: "30% reduction in inventory costs and 15% increase in sales through data-driven merchandising decisions.",
      industry: "Retail"
    },
    {
      title: "AI-Powered Customer Service",
      description: "A financial services company needed to improve their customer support efficiency. We designed an AI agent solution that could handle routine inquiries, analyze customer sentiment, and route complex issues to specialists.",
      outcome: "Reduced response time by 65% and increased customer satisfaction ratings by 28%.",
      industry: "Financial Services"
    },
    {
      title: "Manufacturing Process Optimization",
      description: "A manufacturing client wanted to reduce waste and improve production efficiency. We implemented IoT sensors and developed a predictive maintenance AI system that analyzed equipment performance data.",
      outcome: "Reduced downtime by 40% and decreased production waste by 25%, resulting in $1.2M annual savings.",
      industry: "Manufacturing"
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (storiesRef.current) observer.observe(storiesRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (storiesRef.current) observer.unobserve(storiesRef.current);
    };
  }, []);
  
  const nextStory = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % successStories.length);
  };
  
  const prevStory = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + successStories.length) % successStories.length);
  };
  
  return (
    <section className="section-padding bg-zd-blue text-white">
      <div className="container mx-auto">
        <div ref={sectionRef} className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Client Success Stories</h2>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            See how we've helped organizations transform their operations through data analytics and AI solutions.
          </p>
        </div>
        
        <div ref={storiesRef} className="relative max-w-4xl mx-auto reveal">
          <div className="relative bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-lg">
            <div className="absolute text-white/20 top-6 right-6 text-xl font-bold">
              {successStories[activeIndex].industry}
            </div>
            
            <div className="relative z-10 min-h-[280px] flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4">{successStories[activeIndex].title}</h3>
              <p className="text-lg mb-6 opacity-90">{successStories[activeIndex].description}</p>
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="font-semibold text-lg text-zd-green">Outcome:</p>
                <p className="opacity-90">{successStories[activeIndex].outcome}</p>
              </div>
            </div>
            
            <div className="absolute -bottom-5 left-0 right-0 flex justify-center space-x-2">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all ${
                    activeIndex === index ? "bg-white w-6" : "bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to success story ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="flex justify-between mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevStory}
              className="bg-transparent border-white/20 text-white hover:bg-white/10"
              aria-label="Previous story"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextStory}
              className="bg-transparent border-white/20 text-white hover:bg-white/10"
              aria-label="Next story"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
