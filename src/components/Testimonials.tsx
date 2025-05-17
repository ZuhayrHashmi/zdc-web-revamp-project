
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      quote: "ZD Consultancy helped us develop a comprehensive ESG strategy that aligned with our business objectives and resonated with our stakeholders. Their expertise and guidance were invaluable.",
      author: "Sarah Johnson",
      position: "Chief Sustainability Officer",
      company: "Global Retail Inc."
    },
    {
      quote: "Working with ZD Consultancy transformed our approach to sustainability. Their team provided practical solutions that not only reduced our environmental footprint but also improved our bottom line.",
      author: "Michael Chen",
      position: "CEO",
      company: "Tech Innovators Ltd."
    },
    {
      quote: "The carbon management program developed by ZD Consultancy has been instrumental in helping us achieve our net-zero targets. Their ongoing support has been exceptional.",
      author: "Ava Williams",
      position: "Head of Operations",
      company: "Manufacturing Solutions"
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
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (testimonialsRef.current) observer.unobserve(testimonialsRef.current);
    };
  }, []);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="section-padding bg-zd-blue text-white">
      <div className="container mx-auto">
        <div ref={sectionRef} className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Client Success Stories</h2>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            See how we've helped organizations across industries achieve their sustainability goals.
          </p>
        </div>
        
        <div ref={testimonialsRef} className="relative max-w-4xl mx-auto reveal">
          <div className="relative bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-lg">
            <svg className="absolute text-white/20 top-6 left-6 w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.077-1.928.71-2.932.634-1.003 1.537-1.86 2.708-2.568l-1.065-1.74c-1.63.944-2.913 2.006-3.85 3.185C5.203 10.145 4.79 11.448 4.79 12.876c0 1.004.256 1.88.768 2.628.512.748 1.19 1.122 2.03 1.122.512 0 .986-.13 1.423-.388.437-.258.78-.601 1.03-1.028.25-.427.375-.892.375-1.395v-.058h.77zm8.66 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.077-1.928.71-2.932.634-1.003 1.537-1.86 2.708-2.568l-1.065-1.74c-1.63.944-2.913 2.006-3.85 3.185-1.5 1.789-1.91 3.092-1.91 4.52 0 1.004.256 1.88.768 2.628.512.748 1.19 1.122 2.03 1.122.512 0 .986-.13 1.423-.388.437-.258.78-.601 1.03-1.028.25-.427.375-.892.375-1.395v-.058h.77z" />
            </svg>
            
            <div className="relative z-10 min-h-[240px] flex flex-col justify-center">
              <p className="text-lg md:text-xl italic mb-8">{testimonials[activeIndex].quote}</p>
              <div>
                <p className="font-semibold">{testimonials[activeIndex].author}</p>
                <p className="text-sm opacity-80">
                  {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                </p>
              </div>
            </div>
            
            <div className="absolute -bottom-5 left-0 right-0 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all ${
                    activeIndex === index ? "bg-white w-6" : "bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="flex justify-between mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="bg-transparent border-white/20 text-white hover:bg-white/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="bg-transparent border-white/20 text-white hover:bg-white/10"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
