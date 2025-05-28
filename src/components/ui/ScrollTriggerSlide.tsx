'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SpaceParticlesBackground from './SpaceParticlesBackground';

interface SlideItem {
  name: string;
  href: string;
  description: string;
  icon: string;
}

interface ScrollTriggerSlideProps {
  title: string;
  subtitle?: string;
  items: SlideItem[];
  particleColor: string;
  slideDirection?: 'left' | 'right' | 'up' | 'down';
  className?: string;
}

const ScrollTriggerSlide: React.FC<ScrollTriggerSlideProps> = ({
  title,
  subtitle,
  items,
  particleColor,
  slideDirection = 'up',
  className = ''
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '-100px 0px'
  });

  const getSlideVariants = () => {
    const distance = 100;
    switch (slideDirection) {
      case 'left':
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0 }
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0 }
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 }
        };
      default: // 'up'
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 }
        };
    }
  };

  const slideVariants = getSlideVariants();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div ref={ref} className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <SpaceParticlesBackground 
          particleCount={250} 
          color={particleColor} 
          speed="slow" 
          depth={true} 
          interactive={true} 
        />
      </div>

      {/* Slide Content */}
      <motion.div
        variants={slideVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ 
          duration: 0.8, 
          ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for cinematic feel
        }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20"
      >
        {/* Title Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-6xl md:text-8xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h2>
          {subtitle && (
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>

        {/* Items Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {items.map((item, index) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="group cursor-pointer"
            >
              <div className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-8 h-full hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10">
                {/* Icon */}
                <motion.div 
                  className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {item.name}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {item.description}
                </p>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Cinematic Bottom Fade */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-30" />
        </motion.div>
      </motion.div>

      {/* Cinematic Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20 pointer-events-none z-5" />
    </div>
  );
};

export default ScrollTriggerSlide;
