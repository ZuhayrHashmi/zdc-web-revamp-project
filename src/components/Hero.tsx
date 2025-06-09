
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behaviour: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-zd-background-light">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-5" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80')" }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-zd-teal">
            Transforming Business Through 
            <span className="text-zd-teal-medium"> Agentic AI Solutions</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-zd-gray-dark max-w-3xl mx-auto">
            ZDConsultancy specialises in intelligent AI agents that automate workflows, enhance decision-making, and optimise business processes. We also provide comprehensive business intelligence and data analytics solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-zd-teal hover:bg-zd-teal-dark text-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behaviour: 'smooth' })}
            >
              Request AI Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-zd-teal text-zd-teal hover:bg-zd-teal/10"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behaviour: 'smooth' })}
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
