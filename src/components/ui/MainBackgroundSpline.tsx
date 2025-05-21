'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Import Spline component with dynamic import to avoid SSR issues
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-pulse text-white/50">Loading 3D scene...</div>
    </div>
  ),
});

interface MainBackgroundSplineProps {
  splineUrl: string;
  startSection?: string;
  endSection?: string;
}

/**
 * MainBackgroundSpline component
 *
 * This component renders a Spline 3D scene as a fixed background that appears
 * after scrolling past the hero section and disappears before reaching the
 * "Explore the New Internet" section.
 */
const MainBackgroundSpline: React.FC<MainBackgroundSplineProps> = ({
  splineUrl,
  startSection = 'hero-section',
  endSection = 'coming-soon-section'
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Track scroll position to determine visibility
  useEffect(() => {
    const handleScroll = () => {
      const startElement = document.getElementById(startSection);
      const endElement = document.getElementById(endSection);

      if (!startElement || !endElement) return;

      const startPosition = startElement.getBoundingClientRect().bottom;
      const endPosition = endElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Show when we've scrolled past the hero section
      // Hide when we're approaching the "Explore the New Internet" section
      setIsVisible(startPosition < 0 && endPosition > windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [startSection, endSection]);

  return (
    <>
      {isVisible && (
        <motion.div
          className="fixed inset-0 w-full h-full z-30 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div style={{ width: '100%', height: '100%' }}>
            <Spline scene={splineUrl} />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default MainBackgroundSpline;
