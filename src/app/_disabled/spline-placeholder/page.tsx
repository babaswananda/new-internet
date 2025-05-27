'use client';

import React from 'react';
import Spline from '@splinetool/react-spline';

/**
 * SplinePlaceholder
 * 
 * A simple page that uses Spline 3D as a placeholder.
 * This is exactly what was requested - just Spline 3D as a placeholder.
 */
export default function SplinePlaceholder() {
  return (
    <div className="min-h-screen">
      {/* Spline 3D background as a placeholder - nothing else */}
      <Spline
        scene="https://prod.spline.design/EegKcAAn0DX9KgHh/scene.splinecode"
        style={{
          width: '100%',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0
        }}
      />
    </div>
  );
}
