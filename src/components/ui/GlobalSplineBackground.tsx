'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * GlobalSplineBackground component
 *
 * This component renders a Spline 3D background that appears
 * after scrolling past the hero section and disappears before reaching
 * the "Explore the New Internet" section.
 *
 * It uses a direct iframe embed approach which is the most reliable method
 * for displaying Spline content in Next.js.
 */
const GlobalSplineBackground: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Spline scene URL - convert to embed URL
  const splineUrl = "https://prod.spline.design/EegKcAAn0DX9KgHh/scene.splinecode";
  const embedUrl = splineUrl.replace('scene.splinecode', 'embed');

  // Track scroll position to determine visibility and opacity
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      const comingSoonSection = document.getElementById('coming-soon-section');

      if (!heroSection || !comingSoonSection) return;

      const heroBottom = heroSection.getBoundingClientRect().bottom;
      const comingSoonTop = comingSoonSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Show when scrolled past hero section and before coming soon section
      const shouldBeVisible = heroBottom < 0 && comingSoonTop > windowHeight;
      setIsVisible(shouldBeVisible);

      if (shouldBeVisible) {
        // Calculate opacity based on position between sections
        // Fade in as we scroll past the hero section
        const fadeInDistance = windowHeight; // Distance over which to fade in
        const fadeInProgress = Math.min(1, Math.abs(heroBottom) / fadeInDistance);

        // Fade out as we approach the coming soon section
        const fadeOutDistance = windowHeight; // Distance over which to fade out
        const fadeOutProgress = Math.min(1, (comingSoonTop - windowHeight) / fadeOutDistance);

        // Combine the fade effects
        const calculatedOpacity = Math.min(fadeInProgress, fadeOutProgress);
        setOpacity(calculatedOpacity);
      } else {
        setOpacity(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Log visibility state for debugging
  useEffect(() => {
    console.log(`Spline background visibility: ${isVisible ? 'visible' : 'hidden'}, opacity: ${opacity}`);
  }, [isVisible, opacity]);

  return (
    <>
      {/* Always render the iframe but control visibility with CSS */}
      <motion.div
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{
          zIndex: -1, // Behind content
          opacity: opacity,
          visibility: isVisible ? 'visible' : 'hidden'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: opacity }}
        transition={{ duration: 0.3 }}
      >
        <iframe
          ref={iframeRef}
          src={embedUrl}
          className="w-full h-full"
          style={{
            border: 'none',
            pointerEvents: 'none' // Ensure it doesn't block interactions
          }}
          title="Spline 3D Background"
          allow="autoplay; fullscreen"
          loading="lazy"
        />
      </motion.div>
    </>
  );
};

export default GlobalSplineBackground;
