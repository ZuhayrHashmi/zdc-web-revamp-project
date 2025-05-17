
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { BarChart, Database, FileText, Brain, LineChart, Users } from "lucide-react";

const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
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
      <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="bg-zd-blue/10 p-3 rounded-full text-zd-blue">
            {icon}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-zd-gray text-base">{description}</CardDescription>
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
      title: "Business Intelligence",
      description: "We help organizations leverage their data to gain valuable insights, create interactive dashboards, and make data-driven business decisions.",
      icon: <BarChart className="w-6 h-6" />
    },
    {
      title: "Data Analytics",
      description: "Our expert team provides comprehensive data analysis services, transforming raw data into actionable insights and valuable business intelligence.",
      icon: <LineChart className="w-6 h-6" />
    },
    {
      title: "AI Agent Solutions",
      description: "We design and implement custom AI agents that automate tasks, analyze data, and provide intelligent recommendations tailored to your business needs.",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Data Infrastructure",
      description: "We build robust data infrastructure that ensures reliable data collection, storage, processing, and accessibility for all your business needs.",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Data Strategy Consulting",
      description: "Our consultants help develop comprehensive data strategies aligned with your business objectives to maximize the value of your data assets.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "AI Workflow Design",
      description: "We create efficient AI-powered workflows that streamline operations, reduce manual tasks, and optimize business processes.",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div ref={sectionRef} className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-zd-blue">Our Services</h2>
          <p className="text-lg text-zd-gray-dark max-w-3xl mx-auto">
            We offer comprehensive data analytics and AI solutions to help your organization make smarter decisions and optimize operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
