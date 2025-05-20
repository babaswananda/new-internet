'use client';

import React from 'react';

/**
 * SplineExample component
 *
 * A simple example component that demonstrates how to use an iframe to embed a Spline scene.
 * This is the most reliable way to embed Spline content.
 */
const SplineExample: React.FC = () => {
  // Convert the scene URL to an embed URL
  const splineUrl = "https://prod.spline.design/EegKcAAn0DX9KgHh/scene.splinecode";
  const embedUrl = splineUrl.replace('scene.splinecode', 'embed');

  return (
    <div className="w-full h-screen relative">
      <iframe
        src={embedUrl}
        frameBorder="0"
        width="100%"
        height="100%"
        title="Spline 3D Scene"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none'
        }}
        allow="autoplay; fullscreen; vr"
      />
    </div>
  );
};

export default SplineExample;
