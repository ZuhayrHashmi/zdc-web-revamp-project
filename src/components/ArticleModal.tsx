
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface ArticleModalProps {
  article: {
    title: string;
    content: string;
    category: string;
    date: string;
    readTime: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

const ArticleModal = ({ 
  article, 
  isOpen, 
  onClose, 
  onNext, 
  onPrevious, 
  hasNext, 
  hasPrevious 
}: ArticleModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="fixed inset-4 bg-white rounded-lg shadow-xl overflow-hidden animate-scale-in">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <span className="bg-zd-teal text-white px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
            <div className="text-sm text-zd-gray">
              {article.date} • {article.readTime}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {hasPrevious && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={onPrevious}
                className="border-zd-teal text-zd-teal hover:bg-zd-teal/10"
              >
                <ChevronLeft size={16} />
                Previous
              </Button>
            )}
            {hasNext && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={onNext}
                className="border-zd-teal text-zd-teal hover:bg-zd-teal/10"
              >
                Next
                <ChevronRight size={16} />
              </Button>
            )}
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onClose}
              className="border-gray-300 hover:bg-gray-50"
            >
              <X size={16} />
            </Button>
          </div>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(100vh-200px)]">
          <h1 className="text-3xl font-display font-bold mb-6 text-zd-teal-dark">
            {article.title}
          </h1>
          <div className="prose prose-lg max-w-none text-zd-gray-dark">
            {article.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.trim() === '') return null;
              
              // Handle headings
              if (paragraph.includes('Key Challenges') || 
                  paragraph.includes('Key Considerations') || 
                  paragraph.includes('Recommendations for Decision-Makers') ||
                  paragraph.includes('Conclusion') ||
                  paragraph.includes('Key Takeaways')) {
                return (
                  <h2 key={index} className="text-2xl font-display font-semibold mt-8 mb-4 text-zd-teal">
                    {paragraph}
                  </h2>
                );
              }
              
              // Handle subheadings
              if (paragraph.includes(':') && paragraph.length < 100) {
                return (
                  <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-zd-teal-dark">
                    {paragraph}
                  </h3>
                );
              }
              
              return (
                <p key={index} className="mb-4 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal;
