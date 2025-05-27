'use client';

import { useEffect } from 'react';

const RemoveNextJSBadge = () => {
  useEffect(() => {
    const removeNextJSBadge = () => {
      // Remove by data attributes
      const badgeSelectors = [
        '[data-next-badge-root]',
        '[data-next-badge]', 
        '[data-next-mark]',
        '[data-nextjs-badge]',
        '[data-nextjs-badge-root]',
        '.__next-badge',
        '.__nextjs-badge',
        '#__next-badge',
        '#__nextjs-badge',
        '.next-badge',
        '.nextjs-badge',
        '[data-dot]',
        '.__next-dot',
        '.next-dot'
      ];

      badgeSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          if (element && element.parentNode) {
            element.parentNode.removeChild(element);
          }
        });
      });

      // Remove any fixed positioned elements in bottom left that might be Next.js badge
      const allDivs = document.querySelectorAll('div');
      allDivs.forEach(div => {
        const style = window.getComputedStyle(div);
        if (
          style.position === 'fixed' &&
          (style.bottom === '16px' || style.bottom === '20px') &&
          (style.left === '16px' || style.left === '20px') &&
          div.innerHTML.includes('N') // Likely the Next.js badge
        ) {
          if (div.parentNode) {
            div.parentNode.removeChild(div);
          }
        }
      });
    };

    // Run immediately
    removeNextJSBadge();

    // Run after a short delay to catch dynamically added badges
    const timeouts = [100, 500, 1000, 2000];
    timeouts.forEach(delay => {
      setTimeout(removeNextJSBadge, delay);
    });

    // Set up a mutation observer to catch any new badges
    const observer = new MutationObserver(() => {
      removeNextJSBadge();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Cleanup
    return () => {
      observer.disconnect();
      timeouts.forEach(delay => clearTimeout(delay));
    };
  }, []);

  return null; // This component doesn't render anything
};

export default RemoveNextJSBadge;
