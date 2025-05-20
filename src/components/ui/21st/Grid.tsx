import React from 'react';
import { motion } from 'framer-motion';

interface GridProps {
  className?: string;
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
}

/**
 * Modern grid component inspired by 21st.dev design principles
 */
const Grid: React.FC<GridProps> = ({
  className = '',
  children,
  cols = 3,
  gap = 'md',
  animate = false,
}) => {
  // Columns styles
  const colsStyles = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  };
  
  // Gap styles
  const gapStyles = {
    none: 'gap-0',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-8',
    xl: 'gap-12',
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  if (animate) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`grid ${colsStyles[cols]} ${gapStyles[gap]} ${className}`}
      >
        {children}
      </motion.div>
    );
  }
  
  return (
    <div className={`grid ${colsStyles[cols]} ${gapStyles[gap]} ${className}`}>
      {children}
    </div>
  );
};

export default Grid;

export const GridItem: React.FC<{ className?: string; children: React.ReactNode; animate?: boolean }> = ({
  className = '',
  children,
  animate = false,
}) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };
  
  if (animate) {
    return (
      <motion.div
        variants={variants}
        className={className}
      >
        {children}
      </motion.div>
    );
  }
  
  return (
    <div className={className}>
      {children}
    </div>
  );
};
