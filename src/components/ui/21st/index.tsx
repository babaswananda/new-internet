'use client';

// Simplified exports for demo purposes
import React from 'react';
import { motion } from 'framer-motion';

// Button component
export const Button: React.FC<any> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const variantClasses = {
    primary: 'bg-white text-black hover:bg-white/90',
    secondary: 'bg-white/10 text-white hover:bg-white/20',
    outline: 'border border-white/20 text-white hover:bg-white/10',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${variantClasses[variant as keyof typeof variantClasses]} ${sizeClasses[size as keyof typeof sizeClasses]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// Text component
export const Text: React.FC<any> = ({
  children,
  variant = 'p',
  weight = 'normal',
  className = '',
  ...props
}) => {
  const Component = variant as any;
  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  return (
    <Component
      className={`${weightClasses[weight as keyof typeof weightClasses]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

// Section components
export const Section: React.FC<any> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <section className={`py-16 ${className}`} {...props}>
      {children}
    </section>
  );
};

export const SectionTitle: React.FC<any> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`text-4xl md:text-5xl font-bold mb-8 text-center ${className}`}
      {...props}
    >
      {children}
    </motion.h2>
  );
};

export const SectionDescription: React.FC<any> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`text-xl md:text-2xl mb-8 text-center ${className}`}
      {...props}
    >
      {children}
    </motion.p>
  );
};

// Card components
export const Card: React.FC<any> = ({
  children,
  glassEffect = false,
  bordered = false,
  className = '',
  ...props
}) => {
  const glassClasses = glassEffect ? 'bg-white/5 backdrop-blur-md' : 'bg-black/40';
  const borderClasses = bordered ? 'border border-white/10' : '';

  return (
    <div className={`${glassClasses} ${borderClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<any> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardTitle: React.FC<any> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <h3 className={`text-xl font-semibold ${className}`} {...props}>
      {children}
    </h3>
  );
};

export const CardContent: React.FC<any> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<any> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={`p-6 pt-0 flex items-center ${className}`} {...props}>
      {children}
    </div>
  );
};

// Grid components
export const Grid: React.FC<any> = ({
  children,
  cols = 3,
  gap = 'md',
  animate = false,
  className = '',
  ...props
}) => {
  const colsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-8',
    xl: 'gap-12',
  };

  return (
    <div
      className={`grid ${colsClasses[cols as keyof typeof colsClasses]} ${gapClasses[gap as keyof typeof gapClasses]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const GridItem: React.FC<any> = ({
  children,
  animate = false,
  className = '',
  ...props
}) => {
  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};
