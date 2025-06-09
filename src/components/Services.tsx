
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { Bot, Brain, Workflow, BarChart, Database, LineChart } from "lucide-react";

const ServiceCard = ({ title, description, icon, isPrimary = false }: { 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  isPrimary?: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div ref={cardRef} className="reveal">
      <Card className={`h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 ${
        isPrimary ? 'bg-zd-teal text-white transform scale-105' : 'bg-white'
      }`}>
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className={`p-3 rounded-full ${
            isPrimary ? 'bg-white/20 text-white' : 'bg-zd-teal/10 text-zd-teal'
          }`}>
            {icon}
          </div>
          <CardTitle className={`text-xl ${isPrimary ? 'text-white' : 'text-zd-teal-dark'}`}>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className={`text-base ${
            isPrimary ? 'text-white/90' : 'text-zd-gray-dark'
          }`}>
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

const Services = () => {
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const services = [
    {
      title: "Agentic AI Solutions",
      description: "We design and implement intelligent AI agents that can reason, plan, and execute complex business tasks autonomously, transforming how your organization operates.",
      icon: <Bot className="w-6 h-6" />,
      isPrimary: true
    },
    {
      title: "AI Workflow Automation",
      description: "Create efficient AI-powered workflows that streamline operations, reduce manual tasks, and optimize business processes through intelligent automation.",
      icon: <Workflow className="w-6 h-6" />
    },
    {
      title: "Intelligent Decision Systems",
      description: "Build AI systems that analyze complex data patterns and provide intelligent recommendations to enhance strategic decision-making capabilities.",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights with interactive dashboards and comprehensive analytics to drive data-driven business decisions.",
      icon: <BarChart className="w-6 h-6" />
    },
    {
      title: "Data Analytics",
      description: "Comprehensive data analysis services that uncover valuable insights, trends, and patterns to optimize business performance and strategy.",
      icon: <LineChart className="w-6 h-6" />
    },
    {
      title: "Data Infrastructure",
      description: "Build robust data infrastructure that ensures reliable data collection, storage, processing, and accessibility for all your business intelligence needs.",
      icon: <Database className="w-6 h-6" />
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div ref={sectionRef} className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-zd-teal-dark">Our Services</h2>
          <p className="text-lg text-zd-gray-dark max-w-3xl mx-auto">
            We specialize in cutting-edge Agentic AI solutions, complemented by comprehensive business intelligence and data analytics services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              isPrimary={service.isPrimary}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
