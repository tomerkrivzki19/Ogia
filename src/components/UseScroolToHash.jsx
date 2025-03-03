import React, { useEffect } from "react";

function UseScroolToHash() {
  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash;
    if (hash) {
      // Find the element by the hash
      const element = document.querySelector(hash);
      if (element) {
        // Scroll into view with smooth behavior,  behavior: "smooth",
        element.scrollIntoView({ block: "center" });
      }
    }
  }, []); // Empty dependency array ensures it only runs once after initial render
}

export default UseScroolToHash;
