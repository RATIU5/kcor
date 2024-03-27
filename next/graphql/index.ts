import { env } from '@/lib/env';
import { cacheExchange, createClient, fetchExchange } from '@urql/core';

const getBCEndpoint = () => {
  const storeHash = env.BIGCOMMERCE_STORE_HASH;
  const channelId = env.BIGCOMMERCE_CHANNEL_ID;
  const canonicalUrl = env.BIGCOMMERCE_CANONICAL_STORE_DOMAIN;

  // Not all sites have the channel-specific canonical URL backfilled.
  // Wait till MSF-2643 is resolved before removing and simplifying the endpoint logic.
  if (!channelId || channelId === '1') {
    return `https://store-${storeHash}.${canonicalUrl}/graphql`;
  }

  return `https://store-${storeHash}-${channelId}.${canonicalUrl}/graphql`;
};

// https://commerce.nearform.com/open-source/urql/docs/advanced/server-side-rendering/#nextjs
export const makeBCClient = () => {
  return createClient({
    url: getBCEndpoint(),
    fetchOptions: {
      headers: {
        Authorization: `Bearer ${env.BIGCOMMERCE_CUSTOMER_IMPERSONATION_TOKEN}`,
      },
    },
    exchanges: [cacheExchange, fetchExchange],
  });
};

export const makePLClient = () => {
  return createClient({
    url: `${env.PAYLOAD_API_URL}/api/graphql`,
    fetchOptions: {
      headers: {},
    },
    exchanges: [cacheExchange, fetchExchange],
  });
};
