import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import Logo from '../ui/Logo';

function XIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const productLinks = [
  { to: '/features', label: 'Features' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/login', label: 'Login' },
];

const companyLinks = [
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Service' },
];

const socialLinks = [
  { label: 'X', href: 'https://x.com/quotemuse', Icon: XIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/quotemuse', Icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-primary/10 bg-surface-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="mb-4 text-sm leading-relaxed text-ink-soft">
              AI Quote Generator — inspirational quotes and branded quote
              cards ready for social media in seconds.
            </p>
            <p className="text-sm text-ink-soft">
              <a
                href="mailto:support@quotemuse.art"
                className="transition-colors duration-300 hover:text-primary"
              >
                support@quotemuse.art
              </a>
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-ink">
              Product
            </h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ink-soft transition-colors duration-300 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-ink">
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ink-soft transition-colors duration-300 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-ink">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-ink-soft transition-colors duration-300 hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary/10 pt-8 text-center">
          <p className="text-sm text-ink-muted">
            © 2026 QuoteMuse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
