import { Link, useLocation } from 'react-router-dom';
import { handleHashLinkClick } from '../../hooks/useScrollToHash';

const variants = {
  primary:
    'btn-glow bg-gradient-to-r from-primary to-primary-dark text-white hover:brightness-110',
  secondary:
    'border border-primary/20 text-ink bg-white/80 hover:border-primary/50 hover:bg-surface-100',
  ghost: 'text-ink-soft bg-transparent hover:bg-surface-200',
};

const sizes = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3.5 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  type = 'button',
  className = '',
  ...props
}) {
  const location = useLocation();
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-50';

  const classes = `${baseClasses} ${variants[variant] || variants.primary} ${
    sizes[size] || sizes.md
  } ${className}`;

  if (href) {
    const isHash = href.includes('#');
    return (
      <Link
        to={href}
        className={classes}
        onClick={(e) => {
          if (isHash) handleHashLinkClick(e, href, location);
          onClick?.(e);
        }}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
