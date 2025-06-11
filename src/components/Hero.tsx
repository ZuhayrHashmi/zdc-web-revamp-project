
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import BlurText from "./BlurText";
import SplitText from "./SplitText";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-zd-background-light">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-5" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')" }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <BlurText
            text="Transforming Business Through Agentic AI Solutions"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-zd-teal"
            delay={100}
            animateBy="words"
            direction="top"
            animationFrom={{ filter: 'blur(10px)', opacity: 0, y: -50 }}
            animationTo={[
              { filter: 'blur(5px)', opacity: 0.5, y: 5 },
              { filter: 'blur(0px)', opacity: 1, y: 0 }
            ]}
            onAnimationComplete={() => {}}
          />
          
          <SplitText
            text="ZDConsultancy specialises in intelligent AI agents that automate workflows, enhance decision-making, and optimise business processes. We also provide comprehensive business intelligence and data analytics solutions."
            className="text-lg md:text-xl mb-8 text-zd-gray-dark max-w-3xl mx-auto"
            delay={30}
            duration={0.4}
            ease="power2.out"
            splitType="chars"
            from={{ opacity: 0, y: 15 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-zd-teal hover:bg-zd-teal-dark text-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request AI Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-zd-teal text-zd-teal hover:bg-zd-teal/10"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore AI Solutions
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={scrollToServices}
          aria-label="Scroll down"
          className="text-zd-gray-dark hover:text-zd-teal transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
