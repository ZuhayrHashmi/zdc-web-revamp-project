
import { useEffect } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import SuccessStories from "@/components/SuccessStories";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
    document.title = 'ZD Consultancy - Data Analytics & AI Solutions';
  }, []);
  
  return (
    <div className="min-h-screen bg-zd-background-light">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <SuccessStories />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
