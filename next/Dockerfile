FROM node:18-slim as nodebase
FROM ubuntu:lunar-20230816 as base

# Install tini for better signal handling and cleanup processes
RUN apt-get update && apt-get install -y --no-install-recommends tini && rm -rf /var/lib/apt/lists/*
ENTRYPOINT ["/usr/bin/tini", "--"]
# Copy Node.js binaries from the nodebase stage to avoid unnecessary dependencies like Python
COPY --from=nodebase /usr/local/include/ /usr/local/include/
COPY --from=nodebase /usr/local/lib/ /usr/local/lib/
COPY --from=nodebase /usr/local/bin/ /usr/local/bin/
# Re-enable corepack to fix symlinks for npx, Yarn, and pnpm
RUN corepack disable && corepack enable
# Create a non-root user 'node' for security best practices
RUN groupadd --gid 1001 node \
    && useradd --uid 1001 --gid node --shell /bin/bash --create-home node

WORKDIR /app

FROM base as prod-deps

COPY --chown=node:node package*.json ./
RUN npm ci --only=production && npm cache clean --force

FROM base as dev-deps

COPY --chown=node:node package*.json ./
RUN npm ci && npm cache clean --force

FROM base as dev-source

WORKDIR /app
USER node
COPY --from=dev-deps --chown=node:node /app/node_modules /app/node_modules
COPY --chown=node:node . .
USER node

FROM base as prod-source

WORKDIR /app
USER node
COPY --from=prod-deps --chown=node:node /app/node_modules /app/node_modules
COPY --chown=node:node . .
USER node

FROM dev-source as dev

ENV NEXT_TELEMETRY_DISABLED 1

CMD [ -d "node_modules" ] && npm run dev ||  npm ci && npm run dev

FROM prod-source as prod-builder

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

USER node
RUN npm run build

FROM prod-deps as prod-runner

USER node

ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=prod-builder /app/public ./public
COPY --from=prod-builder --chown=nextjs:node /app/.next/standalone ./
COPY --from=prod-builder --chown=nextjs:node /app/.next/static ./.next/static

# Set runner arguments and environment variables
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

CMD ["node", "server.js"]
