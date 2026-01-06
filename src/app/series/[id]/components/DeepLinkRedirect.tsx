"use client";

import { useEffect } from "react";

export default function DeepLinkRedirect({ seriesId }: { seriesId: string }) {
  useEffect(() => {
    // Attempt to open the custom URL scheme
    const deepLink = `seriestrend://series/${seriesId}`;

    // Check if the browser is Arc Search (which often fails with TLS errors on auto-redirect)
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isArc = userAgent.includes("arc") || userAgent.includes("arcsearch");

    if (isArc) {
      console.log("Arc Search detected: Skipping auto-redirect to prevent TLS error.");
      return;
    }

    const handleRedirect = () => {
      // Intentional short delay even after load to allow UI to settle
      setTimeout(() => {
        window.location.href = deepLink;
      }, 1000);
    };

    if (document.readyState === "complete") {
      handleRedirect();
    } else {
      window.addEventListener("load", handleRedirect);
      return () => window.removeEventListener("load", handleRedirect);
    }
  }, [seriesId]);

  return null;
}
