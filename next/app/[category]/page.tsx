import CategoryHero from '@/components/category/hero';
import CTA from '@/components/shared/cta';
import ProductCards from '@/components/shared/product-cards';
import Section from '@/components/ui/section';
import { makeBCClient } from '@/graphql';
import { graphql } from '@/graphql/graphql-tada';
import { registerUrql } from '@urql/next/rsc';

const { getClient } = registerUrql(makeBCClient);

const AllProductsQuery = graphql(`
  query paginateProducts($pageSize: Int = 6, $cursor: String) {
    site {
      products(first: $pageSize, after: $cursor) {
        pageInfo {
          startCursor
          endCursor
        }
        edges {
          cursor
          node {
            entityId
            name
          }
        }
      }
    }
  }
`);

export default async function Page() {
  const result = await getClient().query(AllProductsQuery, {});
  console.log(result.data?.site.products.edges);

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
