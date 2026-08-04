import { PenLine, Palette, LayoutTemplate, Hash, Layers, Download } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'AI Quote Writing',
    description:
      'Describe a topic and tone and AI drafts an original, share-worthy line — motivational, reflective, playful, or bold.',
    icon: PenLine,
    image: '/images/features/ai-quote-writing.jpg',
  },
  {
    id: 2,
    title: 'Brand Voice',
    description:
      'Save your preferred tone, color palette, and typography so every quote sounds and looks consistently on-brand.',
    icon: Palette,
    image: '/images/features/brand-voice.jpg',
  },
  {
    id: 3,
    title: 'Card Templates',
    description:
      'Choose layouts pre-sized for Instagram, LinkedIn, X, and Pinterest — every design stays elegant and legible.',
    icon: LayoutTemplate,
    image: '/images/features/card-templates.jpg',
  },
  {
    id: 4,
    title: 'Hashtags',
    description:
      'Get relevant, topic-matched hashtags generated alongside every quote to extend reach without extra research.',
    icon: Hash,
    image: '/images/features/hashtags.jpg',
  },
  {
    id: 5,
    title: 'Batch Packs',
    description:
      'Generate a week or month of quote cards in one pass, organized by topic and ready to schedule.',
    icon: Layers,
    image: '/images/features/batch-packs.jpg',
  },
  {
    id: 6,
    title: 'One-Click Export',
    description:
      'Download high-resolution PNG or PDF quote cards instantly, sized correctly for each platform you post to.',
    icon: Download,
    image: '/images/features/one-click-export.jpg',
  },
];

export default features;
