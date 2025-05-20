import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  interactive?: boolean;
  glassEffect?: boolean;
  bordered?: boolean;
  hoverEffect?: boolean;
}

/**
 * Modern card component inspired by 21st.dev design principles
 */
const Card: React.FC<CardProps> = ({
  className = '',
  children,
  interactive = false,
  glassEffect = false,
  bordered = false,
  hoverEffect = false,
}) => {
  // Base styles
  const baseStyles = 'overflow-hidden';
  
  // Glass effect styles
  const glassStyles = glassEffect 
    ? 'bg-white/5 backdrop-blur-md' 
    : 'bg-black/40';
  
  // Border styles
  const borderStyles = bordered 
    ? 'border border-white/10' 
    : '';
  
  // Interactive styles
  const interactiveStyles = interactive 
    ? 'cursor-pointer' 
    : '';
  
  const Component = interactive ? motion.div : 'div';
  
  const motionProps = interactive
    ? {
        whileHover: hoverEffect ? { scale: 1.02, y: -5 } : undefined,
        whileTap: { scale: 0.98 },
      }
    : {};
  
  return (
    <Component
      className={`${baseStyles} ${glassStyles} ${borderStyles} ${interactiveStyles} ${className}`}
      {...motionProps}
    >
      {children}
    </Component>
  );
};

export default Card;

export const CardHeader: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

export const CardTitle: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  return (
    <h3 className={`text-xl font-semibold ${className}`}>
      {children}
    </h3>
  );
};

export const CardDescription: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  return (
    <p className={`text-sm text-gray-400 mt-2 ${className}`}>
      {children}
    </p>
  );
};

export const CardContent: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  return (
    <div className={`p-6 pt-0 flex items-center ${className}`}>
      {children}
    </div>
  );
};
