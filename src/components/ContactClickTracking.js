"use client";

import { useEffect } from "react";

/**
 * Contact tracking: sends a GA4 event when someone taps the phone number or the directions link.
 * Reservations are taken by phone only, so a tap on the number is the website's booking.
 *
 * One listener on the document rather than an onClick per link, so a phone link added later is
 * tracked without having to remember to wire it. Each link's data-cta says where it sits on the page.
 */
export default function ContactClickTracking({ measurementId }) {
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest?.("a[href]");
      if (!link || typeof window.gtag !== "function") return;

      const href = link.getAttribute("href") || "";
      const name = href.startsWith("tel:") ? "click_to_call"
        : /google\.[^/]+\/maps\/dir/.test(href) ? "get_directions"
        : null;
      if (!name) return;

      window.gtag("event", name, {
        link_location: link.dataset.cta || "other",
        page_path: window.location.pathname,
        send_to: measurementId,
      });
    };

    // Capture phase, so the event is sent before the browser hands off to the dialer or Maps.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [measurementId]);

  return null;
}
