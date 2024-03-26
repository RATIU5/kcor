import { env } from "@/lib/env";

export async function GET() {
  const API = `${env.BIGCOMMERCE_CANONICAL_STORE_DOMAIN}/graphql`
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${env.BIGCOMMERCE_CUSTOMER_IMPERSONATION_TOKEN}`
    },
    body: JSON.stringify({
      query: `query paginateProducts(
        $pageSize: Int = 3
        $cursor: String
      ) {
        site {
          products (first: $pageSize, after:$cursor) {
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
      }`
    })
  })
  const data = await res.json()
 
  return Response.json({ data })
}