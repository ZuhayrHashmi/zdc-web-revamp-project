
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
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div ref={sectionRef} className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-zd-blue">About ZD Consultancy</h2>
          <p className="text-lg text-zd-gray-dark max-w-3xl mx-auto">
            We are dedicated to helping organizations harness the power of data and AI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="reveal">
            <div className="relative">
              <div className="bg-zd-blue/10 rounded-lg h-[400px] w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
                  alt="ZD Consultancy Team" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-zd-green/20 h-32 w-32 rounded-lg z-0"></div>
              <div className="absolute -top-6 -left-6 bg-zd-blue/20 h-24 w-24 rounded-lg z-0"></div>
            </div>
          </div>
          
          <div ref={contentRef} className="reveal">
            <h3 className="text-2xl font-display font-semibold mb-4 text-zd-green">Our Mission</h3>
            <p className="text-lg text-zd-gray-dark mb-6">
              ZD Consultancy was founded with a vision to transform how businesses leverage data and AI. 
              Our mission is to help organizations extract maximum value from their data assets and implement 
              intelligent solutions that drive growth, efficiency, and competitive advantage.
            </p>
            
            <h3 className="text-2xl font-display font-semibold mb-4 text-zd-green">Our Approach</h3>
            <p className="text-lg text-zd-gray-dark mb-6">
              We combine deep technical expertise with business acumen to deliver practical solutions. 
              Our collaborative approach ensures that data and AI initiatives align with your 
              business objectives and deliver measurable results.
            </p>
            
            <Button 
              className="bg-zd-green hover:bg-zd-green-dark"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
