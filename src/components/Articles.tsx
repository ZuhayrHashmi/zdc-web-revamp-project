
import { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface Article {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const Articles = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  
  const articles: Article[] = [
    {
      title: "Data-Driven Decision-Making: A Game-Changer for Your Business",
      excerpt: "In today's data-driven world, relying on intuition or guesswork is no longer enough. Data-driven decision-making (DDDM) is about leveraging insights from data to guide strategies, optimise operations, and outperform competitors.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Business Intelligence",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    },
    {
      title: "In-House vs. Outsourced Data Analytics: A Critical Business Decision",
      excerpt: "In today's data-centric business environment, organisations face a critical decision: should they develop an in-house analytics team or outsource their data analytics needs? This choice significantly impacts cost, expertise, scalability, and strategic alignment.",
      date: "Dec 10, 2024",
      readTime: "12 min read",
      category: "Data Strategy",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80"
    }
  ];
  
  return (
    <section id="articles" className="section-padding bg-zd-background-light">
      <div className="container mx-auto">
        <div ref={sectionRef} className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-zd-teal-dark">Latest Articles & Insights</h2>
          <p className="text-lg text-zd-gray-dark max-w-3xl mx-auto">
            Stay updated with the latest trends in Agentic AI, business intelligence, and data analytics.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {articles.map((article, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-zd-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg leading-tight text-zd-teal-dark hover:text-zd-teal transition-colors cursor-pointer">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-zd-gray-dark mb-4 line-clamp-3">
                        {article.excerpt}
                      </CardDescription>
                      <div className="flex items-center justify-between text-sm text-zd-gray">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock size={14} />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        <button className="flex items-center space-x-1 text-zd-teal hover:text-zd-teal-dark transition-colors">
                          <span className="text-sm font-medium">Read</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-zd-teal text-zd-teal hover:bg-zd-teal/10" />
            <CarouselNext className="border-zd-teal text-zd-teal hover:bg-zd-teal/10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Articles;
