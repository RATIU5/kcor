FROM node:18.8-alpine as base

FROM base as builder

WORKDIR /app
COPY package*.json ./

COPY . .
RUN yarn install
RUN yarn build

FROM base as runtime

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

WORKDIR /app
COPY package*.json  ./
COPY yarn.lock ./

RUN yarn install --production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/build ./build

CMD ["node", "dist/server.js"]
