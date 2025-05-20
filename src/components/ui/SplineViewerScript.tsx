'use client';

import React, { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

interface SplineViewerScriptProps {
  url: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * SplineViewerScript component
 * 
 * This component loads the Spline viewer using a script tag and creates
 * a spline-viewer web component to display the 3D scene.
 * This approach is more reliable with Next.js than using the React component.
 */
const SplineViewerScript: React.FC<SplineViewerScriptProps> = ({ 
  url, 
  className = '',
  style = {}
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  
  // Create the spline-viewer element after the script is loaded
  useEffect(() => {
    if (!isScriptLoaded || !containerRef.current) return;
    
    // Clear previous content
    containerRef.current.innerHTML = '';
    
    // Create the spline-viewer element
    const viewer = document.createElement('spline-viewer');
    viewer.setAttribute('url', url);
    
    // Apply styles
    Object.assign(viewer.style, {
      width: '100%',
      height: '100%',
      ...style
    });
    
    // Append to container
    containerRef.current.appendChild(viewer);
    
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [isScriptLoaded, url, style]);
  
  return (
    <>
      {/* Load Spline viewer script */}
      <Script 
        src="https://unpkg.com/@splinetool/viewer@0.9.506/build/spline-viewer.js" 
        onLoad={() => setIsScriptLoaded(true)}
        strategy="afterInteractive"
      />
      
      {/* Container for the spline-viewer */}
      <div 
        ref={containerRef} 
        className={`spline-container ${className}`}
        style={{ width: '100%', height: '100%' }}
      />
    </>
  );
};

export default SplineViewerScript;
