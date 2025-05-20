import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  className?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
  withGrid?: boolean;
  withAnimation?: boolean;
  id?: string;
  as?: React.ElementType;
}

/**
 * Modern section component inspired by 21st.dev design principles
 */
const Section: React.FC<SectionProps> = ({
  className = '',
  children,
  fullHeight = false,
  withGrid = false,
  withAnimation = true,
  id,
  as: Component = 'section',
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Base styles
  const baseStyles = 'relative w-full overflow-hidden py-16 md:py-24';
  
  // Height styles
  const heightStyles = fullHeight ? 'min-h-screen' : '';
  
  // Grid styles
  const gridStyles = withGrid ? 'grid-bg' : '';
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };
  
  if (withAnimation) {
    return (
      <Component
        id={id}
        className={`${baseStyles} ${heightStyles} ${gridStyles} ${className}`}
      >
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="container mx-auto px-4"
        >
          {children}
        </motion.div>
      </Component>
    );
  }
  
  return (
    <Component
      id={id}
      className={`${baseStyles} ${heightStyles} ${gridStyles} ${className}`}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </Component>
  );
};

export default Section;

export const SectionTitle: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };
  
  return (
    <motion.h2 
      variants={variants}
      className={`text-4xl md:text-5xl font-bold mb-8 text-center ${className}`}
    >
      {children}
    </motion.h2>
  );
};

export const SectionDescription: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };
  
  return (
    <motion.p 
      variants={variants}
      className={`text-xl md:text-2xl mb-12 text-center text-gray-300 ${className}`}
    >
      {children}
    </motion.p>
  );
};
