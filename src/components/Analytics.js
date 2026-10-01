"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

/**
 * Analytics: fires GA4 page_view events on initial load and when the route changes.
 * Expects GA4 gtag bootstrap in the root layout and receives measurementId as a prop.
 */
export default function Analytics({ measurementId }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const sendPageView = () => {
      if (typeof window === "undefined") return false;
      if (typeof window.gtag !== "function") return false;

      const search = searchParams?.toString();
      const pathWithQuery = search ? `${pathname}?${search}` : pathname;
      const url = window.location.href;

      // GA4 recommended: send explicit page_view event for SPA navigations
      window.gtag("event", "page_view", {
        page_title: document.title,
        page_location: url,
        page_path: pathWithQuery,
        send_to: measurementId,
      });
      return true;
    };

    // Try immediately; only if gtag isn't ready yet, try once more after a short delay.
    // Retrying unconditionally sent every page view twice.
    if (sendPageView()) return;
    const timer = setTimeout(sendPageView, 300);
    return () => clearTimeout(timer);
  }, [pathname, searchParams, measurementId]);

  return null;
}

