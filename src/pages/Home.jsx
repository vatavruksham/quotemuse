import useDocumentTitle from '../hooks/useDocumentTitle';
import Hero from '../components/sections/Hero';
import AIDemo from '../components/sections/AIDemo';
import FeaturesTeaser from '../components/sections/FeaturesTeaser';
import HowItWorks from '../components/sections/HowItWorks';
import Testimonials from '../components/sections/Testimonials';
import CTABanner from '../components/sections/CTABanner';

export default function Home() {
  useDocumentTitle(
    null,
    'QuoteMuse — AI Quote Generator. Create inspirational quotes and branded quote cards ready for social media in seconds.'
  );

  return (
    <>
      <Hero />
      <AIDemo />
      <FeaturesTeaser />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
    </>
  );
}
