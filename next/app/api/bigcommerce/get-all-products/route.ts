import { query } from '@/graphql';
import { graphql } from '@/graphql/graphql-tada';

export async function GET() {
  const qry = graphql(`
    query paginateProducts($pageSize: Int = 3, $cursor: String) {
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
  const data = await query(qry);

  return Response.json({ data });
}
