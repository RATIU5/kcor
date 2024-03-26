import RelatedCards from '@/components/pdp/related-products';
import Section from '@/components/ui/section';

export default function Page() {
  return (
    <div className="flex flex-col">
      <Section className="gap-16 bg-neutral-100 px-4 py-10 text-neutral-100 md:px-10 md:py-14 2xl:px-20 2xl:py-20">
        <RelatedCards />
      </Section>
    </div>
  );
}
