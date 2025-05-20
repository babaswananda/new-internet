'use client';

import React, { useEffect } from 'react';

/**
 * DirectSplineLink
 * 
 * A page that redirects directly to the Spline scene.
 * This bypasses any CORS or embedding issues.
 */
export default function DirectSplineLink() {
  useEffect(() => {
    // Redirect to the Spline scene
    window.location.href = 'https://prod.spline.design/EegKcAAn0DX9KgHh/scene.splinecode';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to Spline Scene...</h1>
        <p className="text-gray-400 mb-6">
          You will be redirected to the Spline scene directly.
        </p>
        <a 
          href="https://prod.spline.design/EegKcAAn0DX9KgHh/scene.splinecode" 
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Click here if you are not redirected automatically
        </a>
      </div>
    </div>
  );
}
