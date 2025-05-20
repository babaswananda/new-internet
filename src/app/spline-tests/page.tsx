'use client';

import React from 'react';
import Link from 'next/link';

/**
 * SplineTests
 *
 * A navigation page that links to all our Spline test pages.
 */
export default function SplineTests() {
  const testPages = [
    {
      name: "Static HTML Test",
      path: "/spline-static",
      description: "Uses a completely static HTML file with no React or Next.js. This should avoid any build errors."
    },
    {
      name: "Iframe Embed Test",
      path: "/spline-iframe-test",
      description: "Uses a direct iframe embed with the embed URL. The background is always visible."
    },
    {
      name: "Scene URL Test",
      path: "/spline-scene-test",
      description: "Uses a direct iframe embed with the scene.splinecode URL. The background is always visible."
    },
    {
      name: "HTML Embed Test",
      path: "/spline-html-test",
      description: "Uses a direct HTML embed with the Spline viewer script. The background is always visible."
    },
    {
      name: "Pure HTML Test",
      path: "/spline-pure-html",
      description: "Uses a pure HTML approach with no dependencies. Creates an iframe element directly in JavaScript."
    },
    {
      name: "Next.js Component Test",
      path: "/spline-nextjs",
      description: "Uses the @splinetool/react-spline/next component. This is the approach used in the liquid_gradient_abstract_background project."
    },
    {
      name: "Self-Hosted Test",
      path: "/spline-self-hosted",
      description: "Shows how to use a self-hosted Spline scene file. Useful if you're experiencing CORS issues."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
          Spline 3D Background Tests
        </h1>

        <p className="text-xl mb-12">
          These are completely new test pages that use different approaches to embed the Spline 3D background.
          Each page is a standalone implementation that doesn't use any of the existing components.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testPages.map((page, index) => (
            <Link
              href={page.path}
              key={index}
              className="block bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 transition-colors"
            >
              <h2 className="text-2xl font-semibold mb-2">{page.name}</h2>
              <p className="text-gray-400 mb-4">{page.description}</p>
              <div className="inline-block bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg">
                Visit Page
              </div>
            </Link>
          ))}

          <Link
            href="/"
            className="block bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">Main Site</h2>
            <p className="text-gray-400 mb-4">Return to the main site with the current implementation.</p>
            <div className="inline-block bg-purple-500/20 text-purple-400 px-4 py-2 rounded-lg">
              Back to Home
            </div>
          </Link>
        </div>

        <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Debugging Information</h2>
          <p className="mb-2">Spline URL: https://prod.spline.design/EegKcAAn0DX9KgHh/scene.splinecode</p>
          <p className="mb-2">Embed URL: https://prod.spline.design/EegKcAAn0DX9KgHh/embed</p>
          <p className="mb-4">If you're not seeing the background on any of the test pages, check the browser console for errors.</p>

          <h3 className="text-xl font-semibold mb-2">Possible Issues:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>CORS issues - The Spline server might be blocking embedding from your local development server</li>
            <li>Access restrictions - The Spline scene might be private or require authentication</li>
            <li>Script loading issues - The Spline viewer script might not be loading correctly</li>
            <li>Z-index issues - The background might be hidden behind other elements</li>
          </ul>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Solution:</h3>
            <p>If none of the test pages work, you can download the .splinecode file and self-host it. To download, go to Spline's code export panel and click on the download icon visible in the prod.spline textarea.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
