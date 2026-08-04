import { useEffect, useState } from 'react';
import { Sparkles, ArrowRight, Quote } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const enter = () =>
    `transition-all duration-700 ease-out motion-reduce:transition-none ${
      mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`;
  const stagger = (ms) => ({ transitionDelay: mounted ? `${ms}ms` : '0ms' });

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-surface-100 via-surface-50 to-surface-100">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(79,70,229,0.12),transparent_50%),radial-gradient(ellipse_at_85%_60%,rgba(217,119,6,0.08),transparent_45%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span
              className={`inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm backdrop-blur ${enter()}`}
              style={stagger(0)}
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              AI Quote Generator
            </span>

            <h1
              className={`mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl ${enter()}`}
              style={stagger(80)}
            >
              Create Inspirational Quotes{' '}
              <span className="gradient-text">with AI</span>
            </h1>

            <p
              className={`mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg lg:mx-0 ${enter()}`}
              style={stagger(160)}
            >
              Branded quote cards ready for social media. Describe a topic
              and tone, and AI writes the line, picks a card layout, and adds
              on-brand hashtags — ready to post in seconds.
            </p>

            <div
              className={`mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start ${enter()}`}
              style={stagger(240)}
            >
              <Button href="/#demo" size="lg" variant="primary">
                <span className="inline-flex items-center gap-2">
                  <Quote className="h-4 w-4" aria-hidden="true" />
                  Launch Demo
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Button>
              <Button href="/pricing" size="lg" variant="secondary">
                View Pricing
              </Button>
            </div>

            <p
              className={`mt-4 text-sm text-ink-muted ${enter()}`}
              style={stagger(300)}
            >
              No signup needed — test the live quote studio below.
            </p>
          </div>

          <div className={`relative ${enter()}`} style={stagger(320)}>
            <div className="overflow-hidden rounded-3xl border border-primary/15 bg-white/65 p-3 shadow-card backdrop-blur-xl">
              <img
                src="/images/hero/quotemuse-quote-studio.jpg"
                alt="AI quote generator studio showing an elegant branded quote card layout"
                loading="eager"
                className="aspect-video w-full rounded-2xl object-cover object-center"
              />
              <div className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2.5 text-center text-sm font-medium text-ink-soft">
                <Quote className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>Topic → AI quote → branded card</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
