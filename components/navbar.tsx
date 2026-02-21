import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur-lg dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#home" className="text-sm font-semibold tracking-[0.24em] text-zinc-700 dark:text-zinc-300">
          LUMEN ATELIER
        </Link>
        <div className="flex items-center gap-4">
          <ul className="hidden gap-5 text-sm text-zinc-600 md:flex dark:text-zinc-400">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-zinc-900 dark:hover:text-zinc-100">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
