import { Link } from 'react-router-dom';
import { ArrowRight, PenLine, Palette, LayoutTemplate } from 'lucide-react';
import AnimateOnScroll from '../ui/AnimateOnScroll';
import SectionHeading from '../ui/SectionHeading';

const teaserFeatures = [
  {
    icon: PenLine,
    title: 'AI Quote Writing',
    description: 'Turn any topic and tone into an original, share-worthy line in seconds.',
  },
  {
    icon: Palette,
    title: 'Brand Voice',
    description: 'Keep every quote consistent with your colors, fonts, and tone of voice.',
  },
  {
    icon: LayoutTemplate,
    title: 'Card Templates',
    description: 'Layouts sized for Instagram, LinkedIn, X, and Pinterest, ready to export.',
  },
];

export default function FeaturesTeaser() {
  return (
    <section className="relative overflow-hidden bg-surface-50 py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at 10% 50%, rgba(79,70,229,0.08), transparent 45%), radial-gradient(ellipse at 90% 40%, rgba(217,119,6,0.06), transparent 40%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="Features"
            title="Everything You Need for On-Brand Quotes"
            subtitle="From AI writing to export-ready cards — tools that help you post consistently and look polished."
          />
        </AnimateOnScroll>

        <div className="mt-4 grid gap-6 md:grid-cols-3">
          {teaserFeatures.map((feature, index) => (
            <AnimateOnScroll key={feature.title} delay={index * 100}>
              <div className="glass-card h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10">
                  <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <p className="mb-2 font-mono text-xs font-semibold tracking-widest text-primary">
                  0{index + 1}
                </p>
                <h3 className="mb-2 font-display text-lg font-bold text-ink">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{feature.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={300}>
          <div className="mt-10 text-center">
            <Link
              to="/features"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              Explore all features
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
