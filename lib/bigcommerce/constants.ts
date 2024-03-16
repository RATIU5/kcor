import {env} from '@/lib/env';

export const BIGCOMMERCE_API_URL =
  env.BIGCOMMERCE_API_URL ?? 'https://api.bigcommerce.com';
export const BIGCOMMERCE_CANONICAL_STORE_DOMAIN =
  env.BIGCOMMERCE_CANONICAL_STORE_DOMAIN ?? 'mybigcommerce.com';
export const BIGCOMMERCE_STORE_HASH = env.BIGCOMMERCE_STORE_HASH ?? 'undefined';
export const BIGCOMMERCE_V3_API_ENDPOINT = `${BIGCOMMERCE_API_URL}/stores/${BIGCOMMERCE_STORE_HASH}/v3`;
export const BIGCOMMERCE_V2_API_ENDPOINT = `${BIGCOMMERCE_API_URL}/stores/${BIGCOMMERCE_STORE_HASH}/v2`;
