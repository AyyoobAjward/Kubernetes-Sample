FROM node:20.12.2@sha256:844b41cf784f66d7920fd673f7af54ca7b81e289985edc6cd864e7d05e0d133c AS build

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build

# Application Runtime
FROM node:20-alpine@sha256:ec0c413b1d84f3f7f67ec986ba885930c57b5318d2eb3abc6960ee05d4f2eb28 AS prod

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules

RUN chown node:node -R /usr/src/app/dist

USER node

CMD ["node", "dist/main"]