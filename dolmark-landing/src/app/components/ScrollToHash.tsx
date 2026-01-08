import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToHash Component
 * Automatically scrolls to elements matching the URL hash
 * Works on initial page load and route navigation
 * 
 * Usage: Mount once in App.tsx above <Routes>
 */
export function ScrollToHash(): null {
  const location = useLocation();

  useEffect(() => {
    // Extract hash from URL (e.g., "#contact" from "/contact#contact")
    const hash = location.hash.slice(1); // Remove the '#' prefix

    if (hash) {
      // Use setTimeout to ensure DOM has been rendered
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(hash);
        
        if (element) {
          // Scroll smoothly to the element
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);

      return () => clearTimeout(timeoutId);
    }
  }, [location]); // Re-run whenever location changes

  // This component doesn't render anything
  return null;
}
