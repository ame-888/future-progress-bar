import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div><h2>Future Progress Bar</h2><Link href="/about">About</Link><Link href="/methodology">Methodology</Link><Link href="/sources">Sources & data</Link><Link href="/contact">Contact</Link></div>
        <div><h2>Explore</h2><Link href="/">Overview</Link><Link href="/research">Research specification</Link><Link href="/forecasts">Forecasts</Link><Link href="/archive">Retired archive</Link><a href="https://ultimate-bench.vercel.app/" target="_blank" rel="noopener noreferrer">Ultimate Bench <span aria-hidden="true">↗</span></a></div>
        <div><h2>Legal</h2><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
      </div>
      <p className="site-footer__copyright">© {new Date().getFullYear()} Future Progress Bar. An independent data project.</p>
    </footer>
  );
}
