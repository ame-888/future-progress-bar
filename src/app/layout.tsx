import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = { title:{default:"Future Progress Bar",template:"%s // Future Progress Bar"}, description:"Humanity versus Death, Pestilence, Famine, and War." };
const nav=["death","pestilence","famine","war"];
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><header className="nav"><Link href="/" className="brand"><span>FPB</span><b>FUTURE<br/>PROGRESS BAR</b></Link><nav aria-label="Primary navigation"><Link href="/">HOME</Link>{nav.map(x=><Link key={x} href={`/${x}`}>{x.toUpperCase()}</Link>)}<Link href="/battle-log">BATTLE LOG</Link><Link href="/methodology">METHODOLOGY</Link></nav><span className="online">● SYSTEM ONLINE</span></header>{children}<footer><Link href="/" className="brand"><span>FPB</span><b>HUMAN RESISTANCE<br/>INDEX</b></Link><p>DEMO BUILD // NO SCORES ARE SCIENTIFIC CLAIMS</p><p>THE FUTURE IS NOT YET DECIDED.</p></footer></body></html>}
