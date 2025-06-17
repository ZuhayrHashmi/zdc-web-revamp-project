
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

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = {
      name: formData.name,
      email: formData.email,
      address: formData.address,
      phone: formData.phone,
      company: formData.company,
      message: formData.message
    };

    try {
      await fetch("https://script.google.com/a/macros/zynapse.co.uk/s/AKfycbwg_qt02MdEhK8vn0N0zdmcy_ZlUZLq2z9XbFJUSkKM26h17HFgGkRfVDvSsx7PqDWjkw/exec", {
        method: "POST",
        mode: "no-cors",  // Because Google Apps Script doesn’t support CORS
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formDataToSend).toString(),
      });

      // We assume success because no-cors mode blocks response access
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

    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive"
      });
    }
  };


  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div ref={sectionRef} className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-zd-teal">Get In Touch</h2>
          <p className="text-lg text-zd-gray-dark max-w-3xl mx-auto">
            Ready to start your AI transformation journey? Contact us today for a consultation.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div ref={formRef} className="bg-white shadow-lg rounded-lg p-8 reveal w-full max-w-2xl">
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
                className="w-full bg-zd-teal hover:bg-zd-teal-dark text-white" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
