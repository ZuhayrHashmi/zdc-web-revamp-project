import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, TrendingUp, Zap, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuccessStory {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  description: string;
  challenge: string;
  solution: string;
  results: {
    title: string;
    description: string;
  }[];
  industry: string;
  tools: string;
}

const SuccessStories = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const storiesRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const successStories: SuccessStory[] = [
    {
      title: "Productivity Dashboard",
      subtitle: "Transforming KYC Operations Through Data Analytics",
      icon: <TrendingUp className="h-8 w-8" />,
      description: "This success story illustrates our commitment to leveraging data analytics to overcome operational challenges, drive efficiency, and elevate client satisfaction within the Financial Services sector.",
      challenge: "A medium-sized Financial Services company encountered challenges in assessing the productivity of their KYC (Know Your Customer) team. Despite a focus on throughput, inefficiencies within their process hindered their capacity to boost and sustain productivity levels.",
      solution: "A custom data analytics solution was designed using Alteryx to extract and transform data from internal servers. The transformed data would then be loaded onto a Power BI dashboard consisting of visuals highlighting team performance through average throughput times, KYC pipelines, and error rates post-KYC completion.",
      results: [
        {
          title: "Bottleneck Identification",
          description: "Stakeholders were able to identify multiple bottlenecks with the KYC process with the help of average completion time graphs for each stage. Changes to the process increased throughput by 23%."
        },
        {
          title: "Error Rate Reduction", 
          description: "Team metrics were analysed to understand where error rates were most prevalent. Training was provided to team members reducing error rates by 47%."
        },
        {
          title: "Transparency and Workload Distribution",
          description: "The dashboard was rolled out to team members providing greater transparency. This reduced error rates by 14% and increased throughput by 23%."
        },
        {
          title: "Improved Client Satisfaction",
          description: "A byproduct of the changes saw client satisfaction increase by 32% as the process required less back and forth through emails whilst maintaining higher KYC throughput."
        }
      ],
      industry: "Financial Services",
      tools: "Alteryx & Power BI"
    },
    {
      title: "Process Automation",
      subtitle: "Streamlining Investment Operations Reporting",
      icon: <Zap className="h-8 w-8" />,
      description: "This success story showcases how automating regular reports for an Investment Management firm drastically reduced production time, enhanced productivity, and mitigated operational risks.",
      challenge: "Investment Management firms face complex challenges, especially in Investment Operations. One firm struggled with time-consuming MI (Management Information) reporting, requiring collaboration across global teams and manual data extraction from information systems and spreadsheets. These delays not only hindered efficiency but also posed potential operational and regulatory risks.",
      solution: "The devised solution involved employing a combination of Python and Power BI for data extraction. Python was integrated within the Power BI environment to extract data from systems requiring API connectivity. Additionally, databases such as MongoDB, Denodo, and Microsoft Excel were accessed using Power BI functionality.",
      results: [
        {
          title: "Rapid Reporting",
          description: "The amalgamation of analytical tools led to a 75% reduction in report production time. This time-saving aspect was further amplified across all stakeholders involved."
        },
        {
          title: "Increased Productivity",
          description: "Teams were provided access to the report, facilitating the tracking of relevant metrics and providing heightened visibility into operational processes. The real-time nature empowered senior stakeholders to holistically assess their functions."
        }
      ],
      industry: "Investment Management",
      tools: "Python & Power BI"
    },
    {
      title: "Revenue Analytics",
      subtitle: "Combating Suspicious Trading Activity with Advanced Analytics",
      icon: <DollarSign className="h-8 w-8" />,
      description: "This success story highlights how Python can be used to develop a sophisticated revenue analytics system, resulting in significant cost savings, proactive risk mitigation, and versatile insights for a small Brokerage business facing challenges with suspicious trading activity.",
      challenge: "Within a small brokerage business, there were increasing levels of suspicious trading activity where individuals would take advantage of lagging price updates for currency pairs using robotic trading systems. These systems would identify lagging price updates between stock exchanges and the business which was not only costly for the firm but had serious regulatory and reputation implications.",
      solution: "The solution centred around Python, where a sophisticated revenue analytics system was developed and tailored to the organisation's needs. Leveraging Python's advanced data processing capabilities, trade data was extracted and analysed to identify anomalies indicative of suspicious activity. This included assessing the region where the trade originated, the length of time a position was held, and the daily fluctuations in account balance.",
      results: [
        {
          title: "Enhanced Cost Saving",
          description: "The implementation of the suspicious trading report provided stakeholders with enhanced visibility into accounts exhibiting irregularities. This facilitated the identification of suspicious traders, resulting in an average daily cost saving of £8,000."
        },
        {
          title: "Proactive Pre-trade Identification",
          description: "Teams successfully discerned patterns in account opening behaviours, aiding in the identification of potentially suspicious individuals. This proactive approach led to a 35% reduction in suspicious trading activity."
        },
        {
          title: "Report Versatility and Reusability",
          description: "Beyond its primary function, the report proved versatile in assessing client portfolios. It enabled the firm to ensure liquidity was plentiful and changes in client portfolios were adjusted in hedged accounts for both Institutional and Retail clients."
        }
      ],
      industry: "Financial Brokerage",
      tools: "Python"
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
    if (storiesRef.current) observer.observe(storiesRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (storiesRef.current) observer.unobserve(storiesRef.current);
    };
  }, []);
  
  const nextStory = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % successStories.length);
  };
  
  const prevStory = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + successStories.length) % successStories.length);
  };
  
  const currentStory = successStories[activeIndex];
  
  return (
    <section className="section-padding bg-white" id="success-stories">
      <div className="container mx-auto">
        <div ref={sectionRef} className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-zd-teal-dark">Client Success Stories</h2>
          <p className="text-lg text-zd-gray-dark max-w-3xl mx-auto">
            See how we've helped organisations transform their operations through data analytics and AI solutions.
          </p>
        </div>
        
        <div ref={storiesRef} className="relative max-w-6xl mx-auto reveal">
          <div className="relative bg-gradient-to-br from-zd-teal to-zd-teal-dark text-white p-6 md:p-8 lg:p-12 rounded-xl shadow-2xl">
            {/* Industry and tools info - hidden on mobile */}
            <div className="absolute top-6 right-6 hidden md:flex items-center gap-4 text-white/80">
              <div className="text-right">
                <div className="text-sm font-medium">{currentStory.industry}</div>
                <div className="text-xs">{currentStory.tools}</div>
              </div>
              <div className="text-white/60">
                {currentStory.icon}
              </div>
            </div>
            
            <div className="relative z-10 min-h-[500px] flex flex-col">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{currentStory.title}</h3>
                <h4 className="text-lg md:text-xl text-white/90 mb-4">{currentStory.subtitle}</h4>
                <p className="text-base md:text-lg text-white/95">{currentStory.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 flex-1">
                <div className="space-y-6">
                  <div className="bg-white/10 p-4 md:p-6 rounded-lg backdrop-blur-sm">
                    <h5 className="text-lg font-semibold mb-3 text-white">Challenge</h5>
                    <p className="text-white/90 text-sm leading-relaxed">{currentStory.challenge}</p>
                  </div>
                  
                  <div className="bg-white/10 p-4 md:p-6 rounded-lg backdrop-blur-sm">
                    <h5 className="text-lg font-semibold mb-3 text-white">Solution</h5>
                    <p className="text-white/90 text-sm leading-relaxed">{currentStory.solution}</p>
                  </div>
                </div>
                
                <div className="bg-white/15 p-4 md:p-6 rounded-lg backdrop-blur-sm">
                  <h5 className="text-lg font-semibold mb-4 text-white">Results</h5>
                  <div className="space-y-4">
                    {currentStory.results.map((result, index) => (
                      <div key={index} className="border-l-2 border-white/40 pl-4">
                        <h6 className="font-medium text-white mb-1">{result.title}</h6>
                        <p className="text-white/90 text-sm">{result.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-5 left-0 right-0 flex justify-center space-x-2">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all ${
                    activeIndex === index ? "bg-white w-6" : "bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to success story ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="flex justify-between mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevStory}
              className="border-zd-teal text-zd-teal hover:bg-zd-teal/10"
              aria-label="Previous story"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextStory}
              className="border-zd-teal text-zd-teal hover:bg-zd-teal/10"
              aria-label="Next story"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
