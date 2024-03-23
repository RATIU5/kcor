# Base image for both environments
FROM node:18-alpine AS base

WORKDIR /app

# Copy package files and install dependencies
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i; \
  else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn install; \
  fi

# Dev stage builds from the base stage
FROM base AS dev

COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

CMD \
  if [ -f yarn.lock ]; then yarn dev; \
  elif [ -f package-lock.json ]; then npm run dev; \
  elif [ -f pnpm-lock.yaml ]; then pnpm dev; \
  else npm run dev; \
  fi

# Builder stage for production
FROM base AS prod-builder

# Copy necessary files for building the app
COPY public ./public
# COPY next.config.mjs tsconfig.json ./
# COPY tailwind.config.ts postcss.config.js ./

# Set build arguments and environment variables
ARG BIGCOMMERCE_CANONICAL_STORE_DOMAIN
ARG BIGCOMMERCE_API_URL
ARG BIGCOMMERCE_CDN_HOSTNAME
ARG COMPANY_NAME
ARG SITE_NAME
ARG BIGCOMMERCE_STORE_HASH
ARG BIGCOMMERCE_CHANNEL_ID
ARG BIGCOMMERCE_ACCESS_TOKEN
ARG BIGCOMMERCE_CUSTOMER_IMPERSONATION_TOKEN
ARG STRAPI_API_URL
ARG STRAPI_API_TOKEN
ARG NEXT_PUBLIC_DEFAULT_REVALIDATE_TARGET
ENV BIGCOMMERCE_CANONICAL_STORE_DOMAIN=${BIGCOMMERCE_CANONICAL_STORE_DOMAIN}
ENV BIGCOMMERCE_API_URL=${BIGCOMMERCE_API_URL}
ENV BIGCOMMERCE_CDN_HOSTNAME=${BIGCOMMERCE_CDN_HOSTNAME}
ENV COMPANY_NAME=${COMPANY_NAME}
ENV SITE_NAME=${SITE_NAME}
ENV BIGCOMMERCE_STORE_HASH=${BIGCOMMERCE_STORE_HASH}
ENV BIGCOMMERCE_CHANNEL_ID=${BIGCOMMERCE_CHANNEL_ID}
ENV BIGCOMMERCE_ACCESS_TOKEN=${BIGCOMMERCE_ACCESS_TOKEN}
ENV BIGCOMMERCE_CUSTOMER_IMPERSONATION_TOKEN=${BIGCOMMERCE_CUSTOMER_IMPERSONATION_TOKEN}
ENV STRAPI_API_URL=${STRAPI_API_URL}
ENV STRAPI_API_TOKEN=${STRAPI_API_TOKEN}
ENV NEXT_PUBLIC_DEFAULT_REVALIDATE_TARGET=${NEXT_PUBLIC_DEFAULT_REVALIDATE_TARGET}

# Build the Next.js app
RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then pnpm build; \
  else npm run build; \
  fi

# Production runner stage
FROM base AS prod-runner

# Set user to non-root for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=prod-builder /app/public ./public
COPY --from=prod-builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=prod-builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Redefine ARG if needed and ENV for runtime
ARG NEXT_PUBLIC_STRAPI_URL
ENV NEXT_PUBLIC_STRAPI_URL=${NEXT_PUBLIC_STRAPI_URL}

CMD ["node", "server.js"]