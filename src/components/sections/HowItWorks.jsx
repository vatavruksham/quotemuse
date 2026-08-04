import { PenLine, Sparkles, Share2 } from 'lucide-react';
import AnimateOnScroll from '../ui/AnimateOnScroll';
import SectionHeading from '../ui/SectionHeading';

const steps = [
  {
    number: '01',
    title: 'Describe Your Topic',
    description:
      'Share a topic and tone, and pick the platform you are posting to — Instagram, LinkedIn, X, or Pinterest.',
    icon: PenLine,
  },
  {
    number: '02',
    title: 'AI Writes the Quote',
    description:
      'AI drafts an original line in your chosen tone, then matches it to a branded card layout sized for your platform.',
    icon: Sparkles,
  },
  {
    number: '03',
    title: 'Export & Post',
    description:
      'Review the card, add your brand colors or logo, then export and post — with hashtags ready to go.',
    icon: Share2,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative scroll-mt-24 overflow-hidden bg-surface-100 py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="How It Works"
            title="From Topic to Posted Quote in 3 Steps"
            subtitle="A simple flow that turns an idea into a polished, on-brand quote card."
          />
        </AnimateOnScroll>

        <div className="relative mt-4 grid gap-8 md:grid-cols-3">
          <div
            className="pointer-events-none absolute left-[16%] right-[16%] top-10 hidden h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 lg:block"
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <AnimateOnScroll key={step.number} delay={index * 120}>
              <div className="relative text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-glow">
                  <step.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <p className="mb-2 font-mono text-xs font-semibold tracking-widest text-primary">
                  {step.number}
                </p>
                <h3 className="mb-3 font-display text-xl font-bold text-ink">{step.title}</h3>
                <p className="mx-auto max-w-sm text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
