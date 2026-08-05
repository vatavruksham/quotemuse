import useDocumentTitle from '../hooks/useDocumentTitle';
import team from '../data/team';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import SectionHeading from '../components/ui/SectionHeading';

export default function About() {
  useDocumentTitle(
    'About',
    "Learn about QuoteMuse's mission to help creators and brands write inspirational quotes with AI."
  );

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="About QuoteMuse"
            title="Giving Every Brand a Consistent, Inspiring Voice"
            subtitle="We believe great quote content shouldn't require a copywriter on retainer — just the right words at the right moment."
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="max-w-3xl mx-auto mb-20">
            <div className="glass-card rounded-2xl p-8 lg:p-10">
              <h3 className="text-xl font-bold font-display text-ink mb-4">Our Story</h3>
              <p className="text-ink-soft leading-relaxed mb-4">
                QuoteMuse was founded in Edinburgh in 2024 by writers and AI
                engineers who noticed the same pattern across social accounts:
                the best-performing posts were often a single inspiring line,
                yet writing a fresh one every day was exhausting.
              </p>
              <p className="text-ink-soft leading-relaxed mb-4">
                We watched creators and social media managers reach for
                overused, generic quotes just to keep a feed active, trading
                authenticity for convenience. Meanwhile, audiences could tell
                the difference instantly.
              </p>
              <p className="text-ink-soft leading-relaxed">
                So we built an AI quote studio that understands tone, brand
                voice, and platform format. Our mission is simple: help
                anyone write an original, on-brand quote in seconds — and
                turn it into a card worth sharing.
              </p>
            </div>
          </div>
        </AnimateOnScroll>


        <AnimateOnScroll delay={150}>
          <div className="max-w-3xl mx-auto mb-20">
            <div className="glass-card rounded-2xl p-8 lg:p-10">
              <h3 className="text-xl font-bold font-display text-ink mb-4">Our AI</h3>
              <p className="text-ink-soft leading-relaxed">
                QuoteMuse pairs generative language models with layout-aware card rendering. Copy generation and visual composition use accelerated inference so marketers get on-brand quote creatives from a product tool — not a creative agency engagement.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <SectionHeading
            eyebrow="Our Team"
            title="The People Behind QuoteMuse"
            subtitle="An Edinburgh-based team of writers, designers, and engineers who care about words that land."
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <AnimateOnScroll key={member.id} delay={index * 100}>
              <div className="glass-card rounded-xl p-6 text-center h-full hover:scale-[1.02] hover:shadow-card-hover transition-all duration-300">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-primary/20"
                  loading="lazy"
                />
                <h4 className="font-semibold font-display text-ink text-lg">{member.name}</h4>
                <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-ink-soft leading-relaxed">{member.bio}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
