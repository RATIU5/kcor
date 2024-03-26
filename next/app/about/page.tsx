import AboutEnough from '@/components/about/enough';
import AboutGrid from '@/components/about/grid';
import AboutHero from '@/components/about/hero';
import Logos from '@/components/about/logos';
import CTA from '@/components/shared/cta';
import Section from '@/components/ui/section';

export default function Page() {
  return (
    <div className="flex flex-col">
      <Section className="gap-16 bg-neutral-100 px-4 py-10 text-neutral-100 md:px-10 md:py-14 2xl:px-20">
        <AboutHero />
      </Section>
      <Section className="gap-16 bg-stone-300 md:px-14 2xl:px-40">
        <Logos />
      </Section>
      <Section className="gap-16 bg-neutral-100 px-4 py-10 text-neutral-900 md:px-10 md:py-14 2xl:px-20 2xl:py-20">
        <AboutGrid />
      </Section>
      <Section className="gap-16 bg-stone-300 px-4 py-10 md:px-14">
        <CTA />
      </Section>
      <Section className="gap-16 bg-neutral-100 px-4 py-10 text-neutral-900 md:px-10 md:py-14 2xl:px-20 2xl:py-20">
        <AboutEnough />
      </Section>
    </div>
  );
}
