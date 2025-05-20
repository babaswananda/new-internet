import React from 'react';
import { motion } from 'framer-motion';

type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small' | 'span';
type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
type TextAlign = 'left' | 'center' | 'right';

interface TextProps {
  variant?: TextVariant;
  weight?: TextWeight;
  align?: TextAlign;
  className?: string;
  children: React.ReactNode;
  animate?: boolean;
  color?: string;
  uppercase?: boolean;
  tracking?: 'normal' | 'wide' | 'wider' | 'widest';
}

/**
 * Modern text component inspired by 21st.dev design principles
 */
const Text: React.FC<TextProps> = ({
  variant = 'p',
  weight = 'normal',
  align = 'left',
  className = '',
  children,
  animate = false,
  color = '',
  uppercase = false,
  tracking = 'normal',
}) => {
  // Variant styles
  const variantStyles = {
    h1: 'text-4xl md:text-6xl',
    h2: 'text-3xl md:text-5xl',
    h3: 'text-2xl md:text-4xl',
    h4: 'text-xl md:text-2xl',
    p: 'text-base',
    small: 'text-sm',
    span: '',
  };
  
  // Weight styles
  const weightStyles = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };
  
  // Alignment styles
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  // Text transform
  const textTransform = uppercase ? 'uppercase' : '';
  
  // Letter spacing
  const letterSpacing = {
    normal: '',
    wide: 'tracking-wide',
    wider: 'tracking-wider',
    widest: 'tracking-widest',
  };
  
  // Color styles
  const colorStyles = color || '';
  
  // Combined styles
  const styles = `${variantStyles[variant]} ${weightStyles[weight]} ${alignStyles[align]} ${colorStyles} ${textTransform} ${letterSpacing[tracking]} ${className}`;
  
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };
  
  const Component = animate ? motion[variant] : variant;
  
  const animationProps = animate
    ? {
        variants: textVariants,
        initial: "hidden",
        animate: "visible",
      }
    : {};
  
  return (
    <Component className={styles} {...animationProps}>
      {children}
    </Component>
  );
};

export default Text;
