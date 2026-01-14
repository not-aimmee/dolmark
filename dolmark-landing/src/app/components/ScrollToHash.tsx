import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToHash
 * - On page refresh/load: Always scroll to top (start of website)
 * - On hash-based navigation: Scroll to that hash element
 */
export function ScrollToHash(): null {
  const location = useLocation();
  const hasMounted = useRef(false);

  useEffect(() => {
    // On initial page load/mount, always scroll to top
    if (!hasMounted.current) {
      hasMounted.current = true;
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    // After initial load, handle hash-based navigation
    const hash = location.hash.slice(1);

    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Scroll to hash element if it exists
    const timeoutId = setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [location.hash]);

  return null;
}
