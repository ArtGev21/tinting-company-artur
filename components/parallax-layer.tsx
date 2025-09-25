'use client';

import { useEffect, useRef } from 'react';

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down';
  className?: string;
}

export default function ParallaxLayer({ 
  children, 
  speed = 0.3, 
  direction = 'up',
  className = '' 
}: ParallaxLayerProps) {
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

      // Check if element is in viewport
      if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
        const multiplier = direction === 'up' ? -1 : 1;
        const yPos = (scrolled - elementTop) * speed * multiplier;
        element.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}