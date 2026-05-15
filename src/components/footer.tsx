import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-slate-100 dark:bg-slate-900 py-8 border-t border-slate-200 dark:border-slate-800 mt-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-slate-600 dark:text-slate-400">
        <div>
          &copy; {new Date().getFullYear()} Future Progress Bar. All rights reserved.
        </div>
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
          <Link href="/" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-semibold">
            Home
          </Link>
          <Link href="/about" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
