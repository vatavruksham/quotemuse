const pricing = [
  {
    id: 1,
    name: 'Starter',
    price: 9,
    period: '/mo',
    description: 'For individuals posting a quote or two per week.',
    features: [
      '30 AI quotes per month',
      '3 card templates',
      'PNG export',
      'Basic hashtag suggestions',
      'Email support',
    ],
    highlighted: false,
  },
  {
    id: 2,
    name: 'Pro',
    price: 29,
    period: '/mo',
    description: 'For creators and brands posting quote content daily.',
    features: [
      '250 AI quotes per month',
      'All card templates',
      'PNG & PDF export',
      'Custom brand voice presets',
      'Hashtag generation',
      'Batch quote packs',
      'Priority support',
    ],
    highlighted: true,
  },
  {
    id: 3,
    name: 'Business',
    price: 59,
    period: '/mo',
    description: 'For agencies and teams managing multiple brand accounts.',
    features: [
      'Unlimited AI quotes',
      'Team workspaces (up to 10 seats)',
      'Multiple brand voice profiles',
      'Bulk export tools',
      'Custom fonts & colors',
      'Admin controls',
      'Dedicated success manager',
    ],
    highlighted: false,
  },
];

export const comparisonFeatures = [
  { feature: 'AI quotes', starter: '30 / mo', pro: '250 / mo', business: 'Unlimited' },
  { feature: 'Card templates', starter: '3', pro: 'All', business: 'All + custom' },
  { feature: 'Brand voice presets', starter: '—', pro: '1', business: 'Multiple' },
  { feature: 'Batch quote packs', starter: '—', pro: 'Yes', business: 'Yes, bulk' },
  { feature: 'Export formats', starter: 'PNG', pro: 'PNG + PDF', business: 'PNG + PDF' },
  { feature: 'Hashtag generation', starter: 'Basic', pro: 'Full', business: 'Full' },
  { feature: 'Team seats', starter: '1', pro: '1', business: 'Up to 10' },
  { feature: 'Support', starter: 'Email', pro: 'Priority', business: 'Dedicated' },
];

export const faqs = [
  {
    question: 'What platforms are the quote cards sized for?',
    answer:
      'QuoteMuse includes templates sized for Instagram, LinkedIn, X, and Pinterest, so every card fits its destination without manual resizing.',
  },
  {
    question: 'Can I keep quotes consistent with my brand?',
    answer:
      'Yes. Pro and Business plans include brand voice presets that save your preferred tone, colors, and typography for every generated quote.',
  },
  {
    question: 'Do you offer a free trial?',
    answer:
      'We do not offer a free trial. Instead, use the live Launch Demo on the homepage to generate a sample quote card before you subscribe.',
  },
  {
    question: 'What file formats can I export?',
    answer:
      'Starter includes PNG export. Pro and Business add PDF export for print-ready quote cards.',
  },
  {
    question: 'Is there a satisfaction guarantee?',
    answer:
      'Absolutely. If you are not happy within 14 days of purchase, contact support for a full refund — no questions asked.',
  },
  {
    question: 'Can agencies manage multiple client brands?',
    answer:
      'Yes. Business includes team workspaces and multiple brand voice profiles, built for agencies managing several client accounts at once.',
  },
];

export default pricing;
