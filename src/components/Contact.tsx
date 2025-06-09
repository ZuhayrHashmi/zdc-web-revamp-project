
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  
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
    if (formRef.current) observer.observe(formRef.current);
    if (contactInfoRef.current) observer.observe(contactInfoRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
      if (contactInfoRef.current) observer.unobserve(contactInfoRef.current);
    };
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        address: "",
        phone: "",
        company: "",
        message: ""
      });
      
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
      });
    }, 1500);
  };
  
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div ref={sectionRef} className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-zd-blue">Get In Touch</h2>
          <p className="text-lg text-zd-gray-dark max-w-3xl mx-auto">
            Ready to start your AI transformation journey? Contact us today for a consultation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div ref={formRef} className="bg-white shadow-lg rounded-lg p-8 reveal">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.co.uk"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="123 Business Street, London, EC1A 1AA"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+44 20 1234 5678"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd"
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or enquiry..."
                  className="min-h-[150px]"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-zd-blue hover:bg-zd-blue-dark"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          <div ref={contactInfoRef} className="reveal">
            <div className="bg-zd-blue text-white p-8 rounded-lg h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-display font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="mr-4 h-6 w-6 shrink-0" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="mt-1 opacity-80">123 AI Innovation Street</p>
                      <p className="opacity-80">London, EC1A 1AA</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="mr-4 h-6 w-6 shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="mt-1 opacity-80">+44 (0)20 1234 5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="mr-4 h-6 w-6 shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="mt-1 opacity-80">info@zdconsultancy.co.uk</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <p className="text-lg font-medium mb-2">Office Hours</p>
                <p className="opacity-80">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="opacity-80">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
