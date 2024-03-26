import Cards from '@/components/home/cards';
import HomeCarousel from '@/components/home/carousel';
import HomeHero from '@/components/home/hero';
import CTA from '@/components/shared/cta';
import Section from '@/components/ui/section';

export default function Page() {
  return (
    <div className="flex flex-col">
      <Section className="gap-16 bg-neutral-100 px-4 py-10 text-neutral-100 md:px-10 md:py-14 2xl:px-20">
        <HomeHero />
      </Section>
      <Section className="gap-16 bg-neutral-100 px-4 py-10 md:px-10 md:py-14 2xl:px-20 2xl:py-20">
        <HomeCarousel />
      </Section>
      <Section className="gap-16 bg-stone-300 px-4 py-10 text-neutral-100 md:px-10 md:py-14 2xl:px-20 2xl:py-20">
        <CTA />
      </Section>
      <Section className="gap-16 bg-neutral-100 px-4 py-10 text-neutral-100 md:px-10 md:py-14 2xl:px-20 2xl:py-20">
        <Cards />
      </Section>
    </div>
  );
}
