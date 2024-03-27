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
            images {
              edges {
                node {
                  url(width: 200, height: 200)
                  altText
                }
              }
            }
            description
            prices {
              priceRange {
                max {
                  value
                  currencyCode
                }
                min {
                  value
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`);

export async function getAllProducts(pageSize: number) {
  const result = await getClient()
    .query(AllProductsQuery, { pageSize })
    .toPromise();
  if (result.error) {
    console.log(result.error);
    return { error: result.error, data: undefined };
  }
  return { data: result.data?.site.products.edges, error: undefined };
}
