"use client";

import { useEffect } from "react";

export default function DeepLinkRedirect({ seriesId }: { seriesId: string }) {
  useEffect(() => {
    // Attempt to open the custom URL scheme
    const deepLink = `seriestrend://series/${seriesId}`;

    // Intentional delay to avoid "TLS Error" or "Connection Failed" on some mobile browsers (like Arc Search)
    // that might abort the page load if a custom protocol redirect happens instantly.
    const timer = setTimeout(() => {
      window.location.href = deepLink;
    }, 2000);

    return () => clearTimeout(timer); // Cleanup
  }, [seriesId]);

  return null;
}
