import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from '../ui/AnimateOnScroll';
import Button from '../ui/Button';

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-surface-100 to-secondary/10 py-20">
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Ready to Inspire?
          </p>
          <h2 className="mb-4 font-display text-3xl font-bold text-ink sm:text-4xl">
            Write Your Next Quote{' '}
            <span className="gradient-text">with AI</span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-ink-soft">
            Generate an original line in seconds, drop it into a branded
            card, and post to every platform the same day.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/#demo" size="lg" variant="primary">
              <span className="inline-flex items-center gap-2">
                Launch Demo
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Button>
            <Button href="/pricing" size="lg" variant="secondary">
              View Pricing
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
