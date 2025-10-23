'use client';
 
import * as React from 'react';
import { motion, type Transition } from 'motion/react';
 
import { cn } from '@/lib/utils';
 
type GradientTextProps = React.ComponentProps<'span'> & {
  text: string;
  gradient?: string;
  neon?: boolean;
  transition?: Transition;
};
 
function GradientText({
  text,
  className,
  gradient = 'radial-gradient(270deg, #3b82f6 0%, #a855f7 20%, #ec4899 50%, #a855f7 80%, #3b82f6 100%)',
  neon = false,
  transition = { duration: 3, repeat: Infinity, ease: 'easeInOut'},
  ...props
}: GradientTextProps) {
  const baseStyle: React.CSSProperties = {
    backgroundImage: gradient,
  };
 
  return (
    <span
      data-slot="gradient-text"
      className={cn('relative inline-block', className)}
      {...props}
    >
      <motion.span
        className="m-0 text-transparent bg-clip-text bg-[length:200%_100%]"
        style={baseStyle}
        animate={{ backgroundPositionX: ['200%', '0%'] }}
        transition={transition}
      >
        {text}
      </motion.span>
 
      {neon && (
        <motion.span
          className="m-0 absolute top-0 left-0 text-transparent bg-clip-text blur-[8px] mix-blend-plus-lighter bg-[length:200%_100%]"
          style={baseStyle}
          animate={{ backgroundPositionX: ['200%', '0%'] }}
          transition={transition}
        >
          {text}
        </motion.span>
      )}
    </span>
  );
}
 
export { GradientText, type GradientTextProps };