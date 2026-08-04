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
        <rect x="6" y="6" width="52" height="52" rx="16" fill={`url(#${gradientId})`} fillOpacity="0.12" />
        <path
          d="M20 24c-4 0-7 3.2-7 7.4 0 4 2.8 7 6.4 7 .6 0 1.1-.1 1.6-.2-.7 3-2.9 5.3-6 6.3l1.6 3.3c5.6-1.7 9.4-6.4 9.4-13V31c0-4-2.7-7-6-7z"
          fill={`url(#${gradientId})`}
        />
        <path
          d="M40 24c-4 0-7 3.2-7 7.4 0 4 2.8 7 6.4 7 .6 0 1.1-.1 1.6-.2-.7 3-2.9 5.3-6 6.3l1.6 3.3c5.6-1.7 9.4-6.4 9.4-13V31c0-4-2.7-7-6-7z"
          fill={`url(#${gradientId})`}
        />
        <path
          d="M50 10 L51.5 6 L53 10 L57 11.5 L53 13 L51.5 17 L50 13 L46 11.5 Z"
          fill="#d97706"
        />
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
        <span className="text-xl font-display font-bold gradient-text tracking-tight">
          QuoteMuse
        </span>
      )}
    </Link>
  );
}
