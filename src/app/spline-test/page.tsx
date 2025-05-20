'use client';

import React from 'react';
import SplineExample from '@/components/examples/SplineExample';

/**
 * SplineTestPage
 * 
 * A test page to verify that the Spline 3D background works correctly.
 */
export default function SplineTestPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 z-0">
        <SplineExample />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Spline 3D Background Test</h1>
        <p className="text-xl mb-4">
          This page tests the Spline 3D background integration using the @splinetool/react-spline/next package.
        </p>
        <p className="text-lg mb-8">
          You should see a 3D background behind this text. If not, check the browser console for errors.
        </p>
        
        <div className="flex space-x-4">
          <a 
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
