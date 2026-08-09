import useDocumentTitle from '../hooks/useDocumentTitle';
import features from '../data/features';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';

export default function Features() {
  useDocumentTitle('Features',
    'Explore QuoteMuse AI quote features — writing, brand voice, card templates, hashtags, batch packs, and export.'
  );

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="Features"
            title="Powerful AI Quote Tools"
            subtitle="Everything you need to write, design, and publish branded quote content consistently."
          />
        </AnimateOnScroll>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <AnimateOnScroll key={feature.id} delay={100}>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-card group">
                    <img
                      src={feature.image}
                      alt={`${feature.title} — QuoteMuse AI quote feature`}
                      className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/10 to-transparent" />
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-5">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold font-display text-ink mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-ink-soft text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={200}>
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold font-display text-ink mb-4">
              Ready to See It in Action?
            </h3>
            <p className="text-ink-soft mb-6 max-w-xl mx-auto">
              Try the live quote studio right now — no signup required.
            </p>
            <Button href="/#demo" size="lg" variant="primary">
              Launch Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
