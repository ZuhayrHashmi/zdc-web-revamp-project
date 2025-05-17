
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-zd-blue/10 to-zd-green/10">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')" }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-zd-blue">
            Transforming Business Through 
            <span className="text-zd-green"> Sustainable Solutions</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-zd-gray-dark max-w-3xl mx-auto">
            ZD Consultancy helps organizations implement effective ESG strategies, 
            improve sustainability practices, and drive positive environmental and social impact.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-zd-blue hover:bg-zd-blue-dark text-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-zd-blue text-zd-blue hover:bg-zd-blue/10"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={scrollToServices}
          aria-label="Scroll down"
          className="text-zd-gray-dark hover:text-zd-blue transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
