
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const SplitText = ({
  text = '',
  className = '',
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}) => {
  const elements = splitType === 'chars' ? text.split('') : text.split(' ');
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const handleAnimationComplete = () => {
    if (onLetterAnimationComplete) {
      onLetterAnimationComplete();
    }
  };

  return (
    <p
      ref={ref}
      className={className}
      style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        textAlign: textAlign,
        justifyContent: textAlign === 'center' ? 'center' : 'flex-start'
      }}
    >
      {elements.map((char, index) => (
        <motion.span
          className="inline-block will-change-[transform,opacity]"
          key={index}
          initial={from}
          animate={inView ? to : from}
          transition={{
            duration: duration,
            delay: (index * delay) / 1000,
            ease: ease,
          }}
          onAnimationComplete={
            index === elements.length - 1 ? handleAnimationComplete : undefined
          }
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </p>
  );
};

export default SplitText;
