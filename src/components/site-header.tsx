"use client";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(()=>{const close=(event:KeyboardEvent)=>{if(event.key==="Escape")setOpen(false)};document.addEventListener("keydown",close);return()=>document.removeEventListener("keydown",close)},[]);
  const current = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);
  return <header className="site-header">
    <div className="site-header__inner">
      <Link href="/" className="site-brand" aria-label="Future Progress Bar home"><span aria-hidden="true">FP</span> Future Progress Bar</Link>
      <button className="menu-button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(v => !v)}><span aria-hidden="true">{open ? "×" : "☰"}</span><span>Menu</span></button>
      <nav id="primary-navigation" data-open={open} aria-label="Primary navigation" onClick={(event) => { if ((event.target as HTMLElement).closest("a")) setOpen(false); }}>
        <Link aria-current={current("/") ? "page" : undefined} href="/">Overview</Link><Link aria-current={pathname.startsWith("/progress") ? "page" : undefined} href="/#fields">Progress</Link><Link aria-current={current("/research") ? "page" : undefined} href="/research">Research</Link><Link aria-current={current("/forecasts") ? "page" : undefined} href="/forecasts">Forecasts</Link><details className="nav-menu"><summary>Data &amp; Methodology</summary><div><Link aria-current={current("/standards") ? "page" : undefined} href="/standards">Standards</Link><Link aria-current={current("/audit") ? "page" : undefined} href="/audit">Audit</Link><Link aria-current={current("/sources") ? "page" : undefined} href="/sources">Sources</Link><Link href="/changelog">Changelog</Link><Link href="/update-guide">Update guide</Link><Link href="/archive">Archive</Link></div></details><Link className="nav-about" aria-current={current("/about") ? "page" : undefined} href="/about">About</Link>
      </nav>
      <ModeToggle />
    </div>
  </header>;
}
