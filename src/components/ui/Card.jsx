export default function Card({ children, className = '', hover = false }) {
  const baseClasses =
    'bg-white/80 backdrop-blur-sm border border-primary/10 rounded-xl p-6 shadow-card transition-all duration-300';

  const hoverClasses = hover
    ? 'hover:scale-[1.02] hover:shadow-card-hover hover:border-primary/30'
    : '';

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
