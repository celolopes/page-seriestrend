"use client";

import { useEffect } from "react";

export default function DeepLinkRedirect({ seriesId }: { seriesId: string }) {
  useEffect(() => {
    // Attempt to open the custom URL scheme
    const deepLink = `seriestrend://series/${seriesId}`;

    // Simple redirect approach
    window.location.href = deepLink;

    // Optional: We could set a timeout to detect if app didn't open,
    // but usually just letting the user stay on the page is the best fallback
    // without complex iframe/intent hacking which is flaky across OS versions.
  }, [seriesId]);

  return null;
}
