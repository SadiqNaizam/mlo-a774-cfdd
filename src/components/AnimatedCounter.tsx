import React from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  /** The target value to animate to */
  value: number;
  /** Optional additional class names for styling */
  className?: string;
}

/**
 * A component that displays a number and smoothly animates its value
 * up or down when the value prop changes.
 */
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, className }) => {
  console.log('AnimatedCounter loaded with value:', value);

  // Create a springy motion value. It will automatically animate when `value` changes.
  // The configuration provides a gentle, responsive animation.
  const springValue = useSpring(value, {
    mass: 0.8,
    stiffness: 100,
    damping: 20,
  });

  // Transform the spring value into a rounded integer and format it as Indian currency.
  // This ensures that during the animation, we only display whole numbers.
  const displayValue = useTransform(springValue, (latest) => {
    // 'en-IN' locale formats the number according to Indian numbering system (lakhs, crores)
    return `₹${Math.round(latest).toLocaleString('en-IN')}`;
  });

  return (
    <motion.p
      className={cn(
        "text-4xl font-bold tracking-tighter text-gray-900 dark:text-gray-50",
        className
      )}
    >
      {displayValue}
    </motion.p>
  );
};

export default AnimatedCounter;