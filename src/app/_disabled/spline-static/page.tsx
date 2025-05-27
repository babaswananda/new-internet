'use client';

import { useEffect } from 'react';

/**
 * SplineStatic
 * 
 * This page redirects to a static HTML file that contains the Spline 3D background.
 * This approach completely bypasses Next.js and React, which should avoid any build errors.
 */
export default function SplineStatic() {
  useEffect(() => {
    // Redirect to the static HTML file
    window.location.href = '/spline-static.html';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to Static HTML Page...</h1>
        <p className="text-gray-400 mb-6">
          This approach completely bypasses Next.js and React to avoid build errors.
        </p>
        <a 
          href="/spline-static.html" 
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Click here if you are not redirected automatically
        </a>
      </div>
    </div>
  );
}
