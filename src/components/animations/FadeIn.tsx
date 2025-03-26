"use client";
import { motion, MotionConfig, Variants, useReducedMotion } from 'framer-motion';
import { memo } from 'react';

const fadeInVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 20 
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    }
  },
  reducedMotion: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1
    }
  }
};

const animationStyles = {
  willChange: 'opacity, transform',
  backfaceVisibility: 'hidden' as 'hidden'
};

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
}

function FadeInComponent({ children, delay = 0 }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  
  const variant = shouldReduceMotion ? "reducedMotion" : "visible";
  
  return (
    <MotionConfig reducedMotion={shouldReduceMotion ? "user" : "never"}>
      <motion.div
        initial="hidden"
        animate={variant}
        variants={fadeInVariants}
        style={animationStyles}
        transition={{ delay }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}

const FadeIn = memo(FadeInComponent);

export default FadeIn;