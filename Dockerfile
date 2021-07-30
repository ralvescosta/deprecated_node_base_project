FROM node:14.17.4-alpine AS build

WORKDIR /build
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM node:14.17.4-alpine

WORKDIR /app
COPY package.json yarn.lock .env.production .sequelizerc newrelic.js package.json ./
RUN yarn install --production --frozen-lockfile
COPY --from=build /build/dist ./

CMD ["node", "main.js"]