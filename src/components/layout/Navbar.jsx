import { useState } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';
import HashLink from '../ui/HashLink';

const navLinks = [
  { to: '/features', label: 'Features' },
  { to: '/#how-it-works', label: 'How It Works', hash: true },
  { to: '/pricing', label: 'Pricing' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const linkClasses = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-300 ${
      isActive ? 'text-primary' : 'text-ink-soft hover:text-ink'
    }`;

  const hashActive = (to) =>
    location.pathname === '/' && location.hash === to.slice(to.indexOf('#'));

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-white/80 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) =>
            link.hash ? (
              <HashLink
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors duration-300 ${
                  hashActive(link.to) ? 'text-primary' : 'text-ink-soft hover:text-ink'
                }`}
              >
                {link.label}
              </HashLink>
            ) : (
              <NavLink key={link.to} to={link.to} className={linkClasses}>
                {link.label}
              </NavLink>
            )
          )}

          <div className="ml-1 flex items-center gap-3">
            <NavLink
              to="/login"
              className="rounded-lg border border-primary/25 bg-white/80 px-4 py-2 text-sm font-semibold text-primary transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
            >
              Login
            </NavLink>
            <HashLink
              to="/#demo"
              className="btn-glow rounded-lg bg-gradient-to-r from-primary to-primary-dark px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
            >
              Launch Demo
            </HashLink>
          </div>
        </div>

        <button
          className="p-2 text-ink-soft hover:text-ink md:hidden"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
          type="button"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

    </header>
      {mobileMenuOpen &&
        createPortal(
          (
        <div className="fixed inset-0 z-[200] md:hidden">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-y-0 right-0 z-[201] flex w-64 flex-col border-l border-primary/10 p-6 bg-white shadow-2xl" style={{ backgroundColor: '#ffffff' }}>
            <button
              className="mb-6 self-end p-2 text-ink-soft hover:text-ink"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              type="button"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.hash ? (
                  <HashLink
                    key={link.to}
                    to={link.to}
                    className={`text-sm font-medium transition-colors ${
                      hashActive(link.to) ? 'text-primary' : 'text-ink-soft hover:text-ink'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </HashLink>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={linkClasses}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                )
              )}
              <NavLink
                to="/login"
                className="mt-4 rounded-lg border border-primary/25 px-4 py-2 text-center font-semibold text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </NavLink>
              <HashLink
                to="/#demo"
                className="rounded-lg bg-gradient-to-r from-primary to-primary-dark px-4 py-2 text-center font-semibold text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Launch Demo
              </HashLink>
            </div>
          </div>
        </div>
          ),
          document.body
        )}
    </>
  );
}
