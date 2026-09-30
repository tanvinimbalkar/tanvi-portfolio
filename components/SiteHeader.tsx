'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
];

function NavLinks({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={
              active
                ? `rounded-full bg-neutral-950 font-medium text-white ${compact ? 'px-3 py-1.5 text-xs' : 'px-4 py-1.5 text-sm'}`
                : `rounded-full text-neutral-800 hover:bg-white/60 ${compact ? 'px-3 py-1.5 text-xs' : 'px-4 py-1.5 text-sm'}`
            }
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}

export default function SiteHeader() {
  return (
    <>
      <header className="flex items-center justify-between py-5">
        <Link href="/" className="text-base font-semibold tracking-tight text-neutral-900 sm:text-lg">
          Tanvi Nimbalkar
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          <NavLinks />
        </nav>

        <div
          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white/70 text-neutral-700"
          aria-hidden="true"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path strokeLinecap="round" d="M20 20l-3.5-3.5" />
          </svg>
        </div>
      </header>

      <nav className="mb-6 flex justify-center gap-1 md:hidden">
        <NavLinks compact />
      </nav>
    </>
  );
}
