import { useId } from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ className = '', showText = true }) {
  const gradientId = useId();

  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <rect x="8" y="8" width="48" height="48" rx="14" fill={`url(#${gradientId})`}/>
        <path d="M22 38V28.5c0-5.2 3.4-8.5 8-8.5v5.2c-2.2 0-3.6 1.5-3.6 3.8V30H32v8H22zm14 0V28.5c0-5.2 3.4-8.5 8-8.5v5.2c-2.2 0-3.6 1.5-3.6 3.8V30H46v8H36z" fill="#fff"/>

        <defs>
          <linearGradient
            id={gradientId}
            x1="8"
            y1="8"
            x2="56"
            y2="56"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4f46e5" />
            <stop offset="1" stopColor="#d97706" />
          </linearGradient>
        </defs>
      </svg>

      {showText && (
        <span className="text-xl font-display font-semibold tracking-tight text-ink">
          QuoteMuse
        </span>
      )}
    </Link>
  );
}
