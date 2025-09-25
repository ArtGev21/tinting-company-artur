'use client';

import { useEffect, useRef } from 'react';

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxBackground({ children, speed = 0.5, className = '' }: ParallaxBackgroundProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Only apply parallax when element is in viewport
      if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
        const yPos = -(scrolled - elementTop) * speed;
        element.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}