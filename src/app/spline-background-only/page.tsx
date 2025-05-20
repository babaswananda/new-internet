'use client';

import React from 'react';
import Script from 'next/script';

/**
 * SplineBackgroundOnly
 * 
 * A BRAND NEW PAGE with ONLY the Spline 3D background.
 * This version uses the Spline viewer web component which should avoid CORS issues.
 */
export default function SplineBackgroundOnly() {
  return (
    <div className="min-h-screen">
      {/* Load Spline script */}
      <Script
        src="https://unpkg.com/@splinetool/viewer@0.9.506/build/spline-viewer.js"
        strategy="beforeInteractive"
      />
      
      {/* JUST THE SPLINE BACKGROUND - NOTHING ELSE */}
      <div style={{ width: '100%', height: '100vh' }}>
        <spline-viewer
          url="https://prod.spline.design/EegKcAAn0DX9KgHh/scene.splinecode"
          style={{
            width: '100%',
            height: '100%',
            position: 'fixed',
            top: 0,
            left: 0
          }}
        ></spline-viewer>
      </div>
    </div>
  );
}
