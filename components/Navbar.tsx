import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar() {
  return (
    <header className="navbar-wrap">
      <div className="container navbar">
        <Link href="/" className="brand">
          Anbu Creation
        </Link>
        <nav className="nav-links" aria-label="Main Navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
