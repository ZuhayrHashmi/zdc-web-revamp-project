
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
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
    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);
  
  return (
    <section id="about" className="section-padding bg-zd-background-light">
      <div className="container mx-auto">
        <div ref={sectionRef} className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-zd-teal-dark">About Zynapse</h2>
          <p className="text-lg text-zd-gray-dark max-w-3xl mx-auto">
            We are dedicated to helping organisations harness the power of Agentic AI and intelligent data solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="reveal">
            <div className="relative">
              <div className="bg-zd-teal/10 rounded-lg h-[400px] w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
                  alt="Business meeting with AI solutions" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-zd-teal-medium/20 h-32 w-32 rounded-lg z-0"></div>
              <div className="absolute -top-6 -left-6 bg-zd-teal/20 h-24 w-24 rounded-lg z-0"></div>
            </div>
          </div>
          
          <div ref={contentRef} className="reveal">
            <h3 className="text-2xl font-display font-semibold mb-4 text-zd-teal">Our Mission</h3>
            <p className="text-lg text-zd-gray-dark mb-6">
              Zynapse was founded with a vision to transform how businesses leverage Agentic AI and intelligent automation. 
              Our mission is to help organisations implement AI agents that can think, reason, and act autonomously to solve complex business challenges.
            </p>
            
            <h3 className="text-2xl font-display font-semibold mb-4 text-zd-teal">Our Approach</h3>
            <p className="text-lg text-zd-gray-dark mb-6">
              We combine cutting-edge AI technology with deep business understanding to deliver practical solutions. 
              Our collaborative approach ensures that AI implementations align with your strategic objectives and deliver measurable business value.
            </p>
            
            <Button 
              className="bg-zd-teal hover:bg-zd-teal-dark"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More About Our AI Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
