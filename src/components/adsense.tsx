"use client";

import Script from "next/script";
import { useEffect } from "react";
import { adsenseClient, adsenseServingEnabled } from "@/lib/site";

export function AdSenseScript() {
  if (!adsenseServingEnabled || !adsenseClient) return null;
  return <Script id="adsense-script" strategy="afterInteractive" async crossOrigin="anonymous" src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`} />;
}

/** A reserved, clearly labelled manual placement. It renders nothing until both real IDs and global activation exist. */
export function AdSlot({ slot, label = "Advertisement" }: { slot?: string; label?: string }) {
  useEffect(() => {
    if (!adsenseServingEnabled || !adsenseClient || !slot || !/^\d+$/.test(slot)) return;
    try {
      const ads = window as typeof window & { adsbygoogle?: Record<string, never>[] };
      (ads.adsbygoogle = ads.adsbygoogle || []).push({});
    } catch (error) {
      console.error("AdSense slot initialization failed", error);
    }
  }, [slot]);
  if (!adsenseServingEnabled || !adsenseClient || !slot || !/^\d+$/.test(slot)) return null;
  return <aside className="ad-placement" aria-label={label}><span>{label}</span><ins className="adsbygoogle" style={{ display: "block" }} data-ad-client={adsenseClient} data-ad-slot={slot} data-ad-format="auto" data-full-width-responsive="true" /></aside>;
}
