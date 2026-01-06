"use client";

import { useEffect } from "react";

export default function DeepLinkRedirect({ seriesId }: { seriesId: string }) {
  useEffect(() => {
    // Attempt to open the custom URL scheme
    const deepLink = `seriestrend://series/${seriesId}`;

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
