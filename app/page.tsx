import HomeCarousel from '@/components/home/carousel';
import HomeHero from '@/components/home/hero';
import Section from '@/components/ui/section';

export default function Page() {
  return (
    <div className="flex flex-col">
      <Section className="gap-16 bg-neutral-100 px-4 py-10 text-neutral-100">
        <HomeHero />
      </Section>
      <Section className="gap-16 bg-neutral-100 ">
        <HomeCarousel />
      </Section>
    </div>
  );
}
