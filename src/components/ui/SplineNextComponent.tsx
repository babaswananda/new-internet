'use client';

import Spline from '@splinetool/react-spline';
import { useEffect, useRef } from 'react';

interface SplineNextComponentProps {
  className?: string;
  style?: React.CSSProperties;
}

/**
 * SplineNextComponent
 *
 * This component uses the exact code provided to display the Spline 3D background,
 * but with adjustments to ensure it works as a background and doesn't block content.
 */
const SplineNextComponent: React.FC<SplineNextComponentProps> = ({
  className = '',
  style = {}
}) => {
  const splineContainerRef = useRef<HTMLDivElement>(null);

  // Set up pointer-events-none to ensure the Spline background doesn't block interactions
  useEffect(() => {
    if (splineContainerRef.current) {
      const iframes = splineContainerRef.current.querySelectorAll('iframe');
      const canvases = splineContainerRef.current.querySelectorAll('canvas');

      // Make iframes and canvases pointer-events-none
      iframes.forEach(iframe => {
        iframe.style.pointerEvents = 'none';
      });

      canvases.forEach(canvas => {
        canvas.style.pointerEvents = 'none';
      });
    }
  }, []);

  return (
    <div
      ref={splineContainerRef}
      className={`w-full h-full absolute inset-0 ${className}`}
      style={{
        zIndex: -1,
        pointerEvents: 'none',
        ...style
      }}
    >
      <Spline
        scene="https://prod.spline.design/EegKcAAn0DX9KgHh/scene.splinecode"
      />
    </div>
  );
};

export default SplineNextComponent;
