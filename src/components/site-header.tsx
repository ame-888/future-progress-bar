import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export function SiteHeader() {
  return <header className="site-header">
    <div className="site-header__inner">
      <Link href="/" className="site-brand" aria-label="Future Progress Bar home"><span aria-hidden="true">FP</span> Future Progress Bar</Link>
      <nav aria-label="Primary navigation">
        <Link href="/">Progress</Link><Link href="/predictions">Predictions</Link><Link href="/methodology">Methodology</Link><Link href="/sources">Sources</Link><Link href="/about">About</Link>
      </nav>
      <ModeToggle />
    </div>
  </header>;
}
