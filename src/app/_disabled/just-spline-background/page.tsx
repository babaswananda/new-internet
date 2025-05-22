'use client';

import React from 'react';

/**
 * JustSplineBackground
 * 
 * A BRAND NEW PAGE with ONLY the Spline 3D background.
 * Nothing else. Just the background.
 */
export default function JustSplineBackground() {
  return (
    <div className="min-h-screen">
      {/* JUST THE SPLINE BACKGROUND - NOTHING ELSE */}
      <iframe
        src="https://prod.spline.design/EegKcAAn0DX9KgHh/embed"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none'
        }}
        title="Spline 3D Background"
        allow="autoplay; fullscreen"
      />
    </div>
  );
}
