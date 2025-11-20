'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleToggle = () => setIsMenuOpen((prev) => !prev);
  const handleNavigate = () => setIsMenuOpen(false);

  return (
    <header>
      <nav>
        <div className="nav-brand">
          <Link href="#hero" className="logo" onClick={handleNavigate}>
            Jeremy Marube
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className={`nav-toggle ${isMenuOpen ? 'is-open' : ''}`}
            onClick={handleToggle}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} onClick={handleNavigate}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;