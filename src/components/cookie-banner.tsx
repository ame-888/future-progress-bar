"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-slate-100 p-4 shadow-lg z-50 transition-transform transform translate-y-0">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          We use cookies, including from third-party partners like Google AdSense, to serve relevant ads and analyze our traffic. By continuing to use our site, you consent to our use of cookies.
          <Link href="/privacy" className="ml-1 underline hover:text-slate-300">
            Learn more
          </Link>.
        </div>
        <button
          onClick={handleAccept}
          className="whitespace-nowrap px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
