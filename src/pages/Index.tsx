
import { useEffect } from 'react';
import { Home, Settings, User, FileText, Phone } from 'lucide-react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import SuccessStories from "@/components/SuccessStories";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Dock from "@/components/Dock";

const Index = () => {
  useEffect(() => {
    // Initialize scroll reveal
    const observeElements = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1 });
      
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
      
      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    };
    
    observeElements();
    
    // Update the document title
    document.title = 'ZDConsultancy - Agentic AI & Business Intelligence Solutions';
  }, []);

  const dockItems = [
    { 
      icon: <Home size={18} />, 
      label: 'Home', 
      onClick: () => {
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    { 
      icon: <Settings size={18} />, 
      label: 'Services', 
      onClick: () => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    { 
      icon: <User size={18} />, 
      label: 'About', 
      onClick: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    { 
      icon: <FileText size={18} />, 
      label: 'Articles', 
      onClick: () => {
        document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    { 
      icon: <Phone size={18} />, 
      label: 'Contact', 
      onClick: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
  ];
  
  return (
    <div className="min-h-screen bg-zd-background-light">
      <Header />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="success-stories">
          <SuccessStories />
        </div>
        <div id="articles">
          <Articles />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
      
      <Dock 
        items={dockItems}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
};

export default Index;
