'use client';

import { motion, useAnimation, Variants } from 'framer-motion';
import { useEffect, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

type Direction = 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  duration?: number; // animation speed
  delay?: number;    // delay before animating
  direction?: Direction; // movement direction
  distance?: number; // how far to move (px)
}

export default function ScrollReveal({
  children,
  className = '',
  duration = 0.6,
  delay = 0,
  direction = 'up',
  distance = 100,
}: ScrollRevealProps) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // trigger when 20% visible
    triggerOnce: false, // re-animate when scrolling back
  });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      scale: direction === 'scale' ? 0.8 : 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}