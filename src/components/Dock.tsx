
import React, { useState } from 'react';
import { Home, Settings, User, FileText, Phone } from 'lucide-react';

interface DockItem {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

interface DockProps {
  items: DockItem[];
  panelHeight: number;
  baseItemSize: number;
  magnification: number;
}

const Dock: React.FC<DockProps> = ({ items, panelHeight, baseItemSize, magnification }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div 
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
      style={{ height: panelHeight }}
    >
      <div className="flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 px-3 py-2">
        {items.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const size = isHovered ? magnification : baseItemSize;
          
          return (
            <button
              key={index}
              className="flex flex-col items-center justify-center mx-1 transition-all duration-200 ease-out text-zd-gray-dark hover:text-zd-teal"
              style={{
                width: size,
                height: size,
                transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={item.onClick}
              title={item.label}
            >
              {item.icon}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Dock;
