'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import type { Application } from '@splinetool/runtime';

// Import Spline component with dynamic import to avoid SSR issues
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-pulse text-white/50">Loading 3D scene...</div>
    </div>
  ),
});

interface SplineBackgroundProps {
  splineUrl?: string;
  className?: string;
  onLoad?: (spline: Application) => void;
  children?: React.ReactNode;
  fallbackColor?: string;
}

/**
 * SplineBackground component
 *
 * This component renders a Spline 3D scene as a background layer
 * and allows content to be placed on top of it.
 * If no splineUrl is provided or loading fails, it shows a fallback background.
 */
const SplineBackground: React.FC<SplineBackgroundProps> = ({
  splineUrl,
  className = '',
  onLoad,
  children,
  fallbackColor = 'bg-black'
}) => {
  const [isLoading, setIsLoading] = useState(!!splineUrl);
  const [loadFailed, setLoadFailed] = useState(false);

  const handleSplineLoad = (spline: Application) => {
    setIsLoading(false);
    if (onLoad) {
      onLoad(spline);
    }
  };

  // Handle loading timeout/failure
  useEffect(() => {
    if (isLoading && splineUrl) {
      const timer = setTimeout(() => {
        setLoadFailed(true);
        setIsLoading(false);
      }, 5000); // 5 second timeout

      return () => clearTimeout(timer);
    }
  }, [isLoading, splineUrl]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Spline scene as background or fallback */}
      <div className={`absolute inset-0 w-full h-full z-0 ${fallbackColor} grid-bg`}>
        {splineUrl && !loadFailed ? (
          <Spline
            scene={splineUrl}
            onLoad={handleSplineLoad}
          />
        ) : null}

        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="animate-pulse text-white">Loading 3D scene...</div>
          </div>
        )}
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default SplineBackground;
