'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import CinematicMediaPlaceholder from './CinematicMediaPlaceholder';

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  component: React.ReactNode;
  media?: {
    id: string;
    title: string;
    description: string;
    type: 'video' | 'image' | 'animation' | '3d';
    category: 'hero' | 'agents' | 'protocol' | 'tokens' | 'products' | 'future';
    priority: 'high' | 'medium' | 'low';
  };
}

interface ScrollTriggeredCarouselProps {
  items: CarouselItem[];
  title: string;
  subtitle?: string;
  className?: string;
  autoAdvance?: boolean;
  showProgress?: boolean;
}

const ScrollTriggeredCarousel: React.FC<ScrollTriggeredCarouselProps> = ({
  items,
  title,
  subtitle,
  className = '',
  autoAdvance = true,
  showProgress = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const isVisible = useInView(containerRef, { amount: 0.3 });

  // Auto-advance through items when in view
  useEffect(() => {
    if (!autoAdvance || !isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoAdvance, isVisible, items.length]);

  // Update in view state
  useEffect(() => {
    setIsInView(isVisible);
  }, [isVisible]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <motion.section
      ref={containerRef}
      className={`relative py-20 overflow-hidden ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Background with parallax effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-blue-900/10"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -100])
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Carousel Container */}
        <motion.div variants={itemVariants} className="relative">
          {/* Progress Indicators */}
          {showProgress && (
            <div className="flex justify-center mb-8 space-x-2">
              {items.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-purple-500 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          )}

          {/* Carousel Content */}
          <div className="relative h-[600px] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" custom={currentIndex}>
              <motion.div
                key={currentIndex}
                custom={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0 grid md:grid-cols-2 gap-8 items-center p-8"
              >
                {/* Content Side */}
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white">
                    {items[currentIndex].title}
                  </h3>
                  <p className="text-lg text-gray-300">
                    {items[currentIndex].description}
                  </p>
                  <div className="space-y-4">
                    {items[currentIndex].component}
                  </div>
                </div>

                {/* Media Side */}
                <div className="relative">
                  {items[currentIndex].media ? (
                    <CinematicMediaPlaceholder
                      {...items[currentIndex].media!}
                      className="w-full h-full"
                      showControls={true}
                      autoPlay={true}
                      overlay={false}
                    />
                  ) : (
                    <div className="w-full h-96 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        <div className="text-4xl mb-4">🎬</div>
                        <div>Media Placeholder</div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
            <motion.button
              className="p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors pointer-events-auto"
              onClick={() => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <motion.button
              className="p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors pointer-events-auto"
              onClick={() => setCurrentIndex((prev) => (prev + 1) % items.length)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Item Thumbnails */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center mt-8 space-x-4 overflow-x-auto pb-4"
        >
          {items.map((item, index) => (
            <motion.button
              key={item.id}
              className={`flex-shrink-0 p-4 rounded-xl border transition-all duration-300 ${
                index === currentIndex
                  ? 'border-purple-500 bg-purple-500/10'
                  : 'border-gray-700 bg-gray-900/30 hover:border-gray-600'
              }`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-sm font-medium text-white mb-1">{item.title}</div>
              <div className="text-xs text-gray-400 max-w-32 truncate">{item.description}</div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ScrollTriggeredCarousel;
