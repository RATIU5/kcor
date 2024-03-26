import CategoryHero from '@/components/category/hero';
import CTA from '@/components/shared/cta';
import ProductCards from '@/components/shared/product-cards';
import Section from '@/components/ui/section';

export default function Page() {
  return (
    <div className="flex flex-col">
      <Section className="gap-16 bg-stone-300 px-4 py-10 text-neutral-800 md:px-10 md:py-14 2xl:px-20 2xl:py-20">
        <CategoryHero />
      </Section>
      <Section className="gap-16 bg-stone-100 px-4 py-10 text-neutral-800 md:px-10 md:py-14 2xl:px-20 2xl:py-20">
        <ProductCards />
      </Section>
      <Section className="gap-16 bg-stone-300 px-4 py-10 md:px-14">
        <CTA />
      </Section>
    </div>
  );
}
