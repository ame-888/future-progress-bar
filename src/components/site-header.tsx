"use client";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const current = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);
  return <header className="site-header">
    <div className="site-header__inner">
      <Link href="/" className="site-brand" aria-label="Future Progress Bar home"><span aria-hidden="true">FP</span> Future Progress Bar</Link>
      <nav aria-label="Primary navigation">
        <Link aria-current={current("/") ? "page" : undefined} href="/">Overview</Link><Link aria-current={pathname.startsWith("/progress") ? "page" : undefined} href="/#fields">Progress</Link><Link aria-current={current("/research") ? "page" : undefined} href="/research">Research</Link><Link aria-current={current("/forecasts") ? "page" : undefined} href="/forecasts">Forecasts</Link><Link aria-current={current("/standards") ? "page" : undefined} href="/standards">Standards</Link><Link aria-current={current("/audit") ? "page" : undefined} href="/audit">Audit</Link><Link aria-current={current("/sources") ? "page" : undefined} href="/sources">Sources</Link><Link aria-current={current("/about") ? "page" : undefined} href="/about">About</Link>
      </nav>
      <ModeToggle />
    </div>
  </header>;
}
