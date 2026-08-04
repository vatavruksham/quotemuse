import { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';
import AnimateOnScroll from '../ui/AnimateOnScroll';
import SectionHeading from '../ui/SectionHeading';

const tones = [
  { id: 'motivational', label: 'Motivational' },
  { id: 'reflective', label: 'Reflective' },
  { id: 'playful', label: 'Playful' },
  { id: 'bold', label: 'Bold' },
];

const platforms = [
  { id: 'instagram', label: 'Instagram' },
  { id: 'linkedin', label: 'LinkedIn' },
  { id: 'x', label: 'X' },
  { id: 'pinterest', label: 'Pinterest' },
];

const sampleTopics = [
  'Starting over after a setback',
  'Staying focused as a founder',
  'Gratitude in busy seasons',
  'Creative discipline',
  'Growth through discomfort',
];

const cardLayouts = {
  instagram: {
    shell: 'border-primary/20 bg-gradient-to-br from-indigo-50 to-white',
    accent: 'bg-primary',
    label: 'Square card',
  },
  linkedin: {
    shell: 'border-ink/15 bg-gradient-to-br from-stone-50 to-white',
    accent: 'bg-ink',
    label: 'Landscape card',
  },
  x: {
    shell: 'border-surface-300 bg-white',
    accent: 'bg-ink-soft',
    label: 'Banner card',
  },
  pinterest: {
    shell: 'border-secondary/25 bg-gradient-to-br from-amber-50 to-white',
    accent: 'bg-secondary',
    label: 'Portrait card',
  },
};

const quoteLines = {
  motivational: (topic) => `The version of you who masters ${topic.toLowerCase()} is built one small decision at a time.`,
  reflective: (topic) => `Somewhere between doubt and progress, ${topic.toLowerCase()} taught me to slow down and notice the work.`,
  playful: (topic) => `Plot twist: ${topic.toLowerCase()} was never about perfect — it was about showing up anyway.`,
  bold: (topic) => `Stop waiting for permission. ${topic} starts the moment you decide it does.`,
};

function shorten(text, max = 52) {
  const cleaned = text.trim().replace(/\s+/g, ' ');
  if (cleaned.length <= max) return cleaned;
  return `${cleaned.slice(0, max - 1).trim()}…`;
}

function buildQuote(topic, tone, platform) {
  const topicLabel = shorten(topic, 48);
  const toneLabel = tones.find((t) => t.id === tone)?.label || 'Motivational';
  const platformLabel = platforms.find((p) => p.id === platform)?.label || 'Instagram';
  const generator = quoteLines[tone] || quoteLines.motivational;

  return {
    topic: topicLabel,
    tone: toneLabel,
    platform: platformLabel,
    engagement: platform === 'pinterest' ? 89 : platform === 'linkedin' ? 84 : 92,
    quote: generator(topicLabel),
    hashtags: [`#${topicLabel.split(' ')[0].replace(/[^a-zA-Z0-9]/g, '')}`, '#DailyQuotes', `#${toneLabel}`],
  };
}

export default function AIDemo() {
  const [platform, setPlatform] = useState('instagram');
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('motivational');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState(null);

  const layout = cardLayouts[platform] || cardLayouts.instagram;

  const handleGenerate = () => {
    if (!topic.trim()) return;
    setIsGenerating(true);
    setResult(null);

    const nextTopic = topic.trim();
    const nextTone = tone;
    const nextPlatform = platform;

    setTimeout(() => {
      setResult(buildQuote(nextTopic, nextTone, nextPlatform));
      setIsGenerating(false);
    }, 1800);
  };

  return (
    <section id="demo" className="relative scroll-mt-24 overflow-hidden bg-surface-50 py-20">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="Launch Demo"
            title="Write a Branded Quote Right Now"
            subtitle="Pick a topic, tone, and platform — watch AI write the line and preview a matching card layout."
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-xl border border-primary/10 bg-white/80 shadow-card backdrop-blur-sm">
              <div className="flex items-center gap-2 border-b border-primary/10 bg-surface-100 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-secondary/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink-muted/30" />
                <span className="ml-3 font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                  quotemuse — quote studio
                </span>
              </div>

              <div className="p-6 lg:p-8">
                <div className="mb-6">
                  <label className="mb-3 block text-xs font-semibold uppercase tracking-widest text-ink-muted">
                    Topic
                  </label>
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="What should the quote be about?"
                    className="w-full rounded-md border border-surface-300 bg-white px-4 py-3 text-ink placeholder-ink-muted transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                  <div className="mt-2 flex flex-wrap gap-2">
                    {sampleTopics.map((sample) => (
                      <button
                        key={sample}
                        type="button"
                        onClick={() => setTopic(sample)}
                        className="rounded-md border border-transparent bg-surface-100 px-3 py-1 text-xs text-ink-soft transition-colors hover:border-primary/20 hover:bg-primary/10 hover:text-primary"
                      >
                        {sample}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-3 block text-xs font-semibold uppercase tracking-widest text-ink-muted">
                    Tone
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {tones.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTone(t.id)}
                        className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                          tone === t.id
                            ? 'bg-primary text-white shadow-glow'
                            : 'border border-primary/10 bg-surface-100 text-ink-soft hover:border-primary/30'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-3 block text-xs font-semibold uppercase tracking-widest text-ink-muted">
                    Platform
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {platforms.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setPlatform(p.id)}
                        className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                          platform === p.id
                            ? 'bg-secondary text-white shadow-md'
                            : 'border border-primary/10 bg-surface-100 text-ink-soft hover:border-secondary/30'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleGenerate}
                  disabled={!topic.trim() || isGenerating}
                  className="btn-glow flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-dark py-3.5 font-semibold text-white transition-all duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Writing Quote...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-5 w-5" />
                      Generate Quote
                    </>
                  )}
                </button>

                {isGenerating && (
                  <div className="mt-6 overflow-hidden text-sm text-primary/80">
                    <p className="animate-pulse">▸ Studying "{shorten(topic, 40)}"...</p>
                    <p className="animate-pulse opacity-70">▸ Drafting a {tone} line...</p>
                    <p className="animate-pulse opacity-50">▸ Building {platforms.find((p) => p.id === platform)?.label} card...</p>
                  </div>
                )}

                {result && (
                  <div className="mt-8 animate-fade-in">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                          Generated Quote Card
                        </p>
                        <p className="mt-1 text-sm text-ink-soft">
                          For <span className="font-medium text-ink">"{result.topic}"</span>
                          {' · '}
                          {result.tone}
                          {' · '}
                          {result.platform}
                        </p>
                      </div>
                      <div className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                        Est. engagement {result.engagement}/100
                      </div>
                    </div>

                    <div className={`rounded-xl border p-6 sm:p-8 text-center ${layout.shell}`}>
                      <div className={`mx-auto mb-4 h-1 w-16 rounded ${layout.accent}`} />
                      <p className="font-display text-xl italic leading-relaxed text-ink sm:text-2xl">
                        "{result.quote}"
                      </p>
                      <p className="mt-4 text-xs uppercase tracking-widest text-ink-muted">
                        {layout.label} · {result.platform}
                      </p>
                      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                        {result.hashtags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="mt-4 text-center text-xs text-ink-muted">
                      Simulated preview personalized to your topic. Sign up to export full quote packs.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
