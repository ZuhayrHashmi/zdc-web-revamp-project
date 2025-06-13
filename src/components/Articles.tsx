
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import ArticleModal from "./ArticleModal";

interface Article {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const Articles = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
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
      content: `In today's data-driven world, relying on intuition or guesswork is no longer enough. Data-driven decision-making (DDDM) is about leveraging insights from data to guide strategies, optimise operations, and outperform competitors.

But what does this look like in practice?

Here's why DDDM is a game-changer for businesses today:

Better decisions start with analytics

Nearly 50% of executives cite analytics as a key factor in improving decision-making. Research from Deloitte highlights how data reveals what's working, where to pivot, and how to stay on track.

Take Google, for instance. Its "Project Oxygen" initiative mined data from thousands of employee reviews, uncovering key traits of high-performing managers. The findings informed training programmes that boosted employee retention and improved team performance.

Cost savings through smarter operations

Data analytics often exposes inefficiencies, enabling businesses to reallocate resources and save costs while boosting productivity.

One example is Tesco, which uses real-time data analytics to optimise inventory management. By analysing seasonal trends and customer purchasing habits, Tesco ensures that shelves are stocked appropriately, reducing waste and cutting unnecessary expenses.

Improving processes across the board

Data isn't confined to marketing. It can transform operations across supply chains, finance, HR, and customer service. Businesses that integrate data into every department create a synergy that drives collective success.

Amazon exemplifies this by using data-driven logistics to streamline inventory, optimise delivery routes, and personalise customer recommendations. This approach contributes to both operational efficiency and customer satisfaction.

Gain a competitive advantage

By leveraging data to analyse trends, anticipate customer behaviour, and seize opportunities faster, businesses can stay ahead of the competition.

Netflix is a great example. By analysing viewer preferences and behaviours, Netflix tailors content recommendations and invests in original productions that resonate with its audience. This proactive, data-driven approach has solidified its position as an industry leader.

The power of forecasting

Data empowers businesses to make forward-thinking decisions by forecasting future trends and challenges. Accurate predictions allow for better resource allocation, risk management, and strategic planning.

For example, airlines often use predictive analytics to forecast demand, adjusting pricing and routes accordingly. This, not only maximises revenue, but also ensures efficient resource use and improved customer satisfaction.

Key Challenges

Of course, embracing DDDM comes with challenges. Businesses need the right tools, data literacy training, and high-quality data to succeed. Yet, the payoff is undeniable: companies that master DDDM lead the way in innovation and growth.

Whether you're using data to refine marketing strategies, improve supply chains, or forecast the future, the possibilities are endless.`,
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Business Intelligence",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    },
    {
      title: "In-House vs. Outsourced Data Analytics: A Critical Business Decision",
      excerpt: "In today's data-centric business environment, organisations face a critical decision: should they develop an in-house analytics team or outsource their data analytics needs? This choice significantly impacts cost, expertise, scalability, and strategic alignment.",
      content: `In today's data-centric business environment, organisations face a critical decision: should they develop an in-house analytics team or outsource their data analytics needs?

This choice significantly impacts cost, expertise, scalability, and strategic alignment. Below, we analyse the advantages, challenges, and critical considerations for each approach, supported by industry research and case studies.

Key Considerations

Cost Implications

In-House Analytics:
Building an internal team involves substantial initial investments, including recruitment, training, infrastructure, and ongoing operational costs. These expenses can be prohibitive for small-to-medium enterprises (SMEs).

Outsourcing Analytics:
Outsourcing can reduce upfront costs by eliminating the need for infrastructure setup, hiring, and training. Pricing models are often flexible, allowing businesses to pay for services based on usage.

Access to Expertise

In-House Analytics:
Recruiting skilled professionals is challenging due to a competitive talent market. However, internal teams develop institutional knowledge, aligning analytics with business goals.

Outsourcing Analytics:
External providers offer specialised expertise and access to cutting-edge tools, enabling businesses to leverage advanced analytics capabilities without extensive internal development.

Data Security and Privacy

In-House Analytics:
Maintaining analytics in-house ensures complete control over sensitive data, which is crucial for industries like healthcare and finance. This approach facilitates adherence to internal security policies and regulatory requirements.

Outsourcing Analytics:
Sharing sensitive data with third parties raises concerns about data breaches and compliance with data privacy regulations. Ensuring that external providers adhere to stringent data security protocols is essential.

Scalability and Flexibility

In-House Analytics:
Scaling an internal team requires additional investments in staff, tools, and training, which can be time-consuming and may slow growth.

Outsourcing Analytics:
Outsourcing offers greater flexibility to scale services up or down quickly without the need for new hires or infrastructure upgrades, making it ideal for businesses with fluctuating analytics needs.

Time to Market

In-House Analytics:
Building a team and setting up processes takes time, making it better suited for long-term projects. The initial setup phase can delay the implementation of analytics solutions.

Outsourcing Analytics:
External companies often have the infrastructure and expertise to deliver results faster, providing a quicker time-to-market for analytics initiatives.

Intellectual Property (IP) Rights

In-House Analytics:
Retaining full IP ownership is vital for competitive differentiation, especially when developing proprietary algorithms or models.

Outsourcing Analytics:
Contracts must clearly define IP ownership to prevent potential conflicts, ensuring that proprietary insights are protected.

Cultural and Strategic Alignment

In-House Analytics:
Internal teams align with company culture, fostering collaboration and rapid iteration. This alignment can lead to more effective implementation of analytics solutions.

Outsourcing Analytics:
External teams may lack context, leading to misaligned solutions. Regular communication and detailed project briefs can mitigate this risk.

Long-Term Sustainability

In-House Analytics:
Sustainable for organisations with continuous analytics needs, as internal teams can evolve with the company's objectives.

Outsourcing Analytics:
While offering short-term efficiency, over-reliance on vendors can hinder the development of internal capabilities and long-term sustainability.

Recommendations for Decision-Makers

Conduct a Cost-Benefit Analysis
Compare the long-term return on investment (ROI) for in-house versus outsourced models, considering factors such as scalability, control, and alignment with business objectives.

Adopt a Hybrid Model
Retain core analytics functions in-house to maintain control over critical data and processes, while outsourcing specialised tasks to leverage external expertise and flexibility.

Prioritise Data Governance
When outsourcing, select vendors with proven compliance frameworks and robust data security measures to protect sensitive information.

Invest in Knowledge Transfer
Ensure that external providers facilitate knowledge transfer to internal teams, building long-term capabilities and reducing dependence on external resources.

Evaluate Vendor Expertise
Choose providers with industry-specific experience to ensure that their solutions align with your business context and requirements.

Leverage Advance Tools
Integrate advanced analytics platforms and tools, whether in-house or outsourced, to enhance data analysis capabilities and drive innovation.

Conclusion

The choice between in-house and outsourced analytics is not a binary one, it's a strategic balancing act.

Organisations must weigh control vs. agility, cost vs. expertise, and short-term gains vs. long-term resilience.

Key Takeaways

Hybrid Models Excel: Companies like Airbnb (in-house core analytics + outsourced NLP for customer reviews) and Unilever (outsourced AI-driven demand forecasting) demonstrate that blending both approaches maximises flexibility and innovation while retaining control over critical assets.

ROI is Contextual: For SMEs, outsourcing slashes upfront costs by 30–50%, while enterprises like Netflix justify in-house investments with $1B annual savings from proprietary algorithms.

Data Governance is Non-Negotiable: Whether in-house or outsourced, 92% of data breaches stem from poor governance frameworks. Prioritise ISO 27001-certified vendors or build internal protocols.`,
      date: "Dec 10, 2024",
      readTime: "12 min read",
      category: "Data Strategy",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80"
    }
  ];

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  const handleNextArticle = () => {
    if (!selectedArticle) return;
    const currentIndex = articles.findIndex(article => article.title === selectedArticle.title);
    const nextIndex = (currentIndex + 1) % articles.length;
    setSelectedArticle(articles[nextIndex]);
  };

  const handlePreviousArticle = () => {
    if (!selectedArticle) return;
    const currentIndex = articles.findIndex(article => article.title === selectedArticle.title);
    const previousIndex = currentIndex === 0 ? articles.length - 1 : currentIndex - 1;
    setSelectedArticle(articles[previousIndex]);
  };

  const getCurrentArticleIndex = () => {
    if (!selectedArticle) return -1;
    return articles.findIndex(article => article.title === selectedArticle.title);
  };

  const currentIndex = getCurrentArticleIndex();
  
  return (
    <>
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
                          <button 
                            onClick={() => handleArticleClick(article)}
                            className="flex items-center space-x-1 text-zd-teal hover:text-zd-teal-dark transition-colors"
                          >
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

      <ArticleModal
        article={selectedArticle}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onNext={handleNextArticle}
        onPrevious={handlePreviousArticle}
        hasNext={currentIndex < articles.length - 1}
        hasPrevious={currentIndex > 0}
      />
    </>
  );
};

export default Articles;
