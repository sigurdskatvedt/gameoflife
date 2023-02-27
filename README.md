# Game of Life, Leaflet

## Access

The rule administration panel is [hosted here](https://gameoflife-webservice.vercel.app/) and the Game of Life itself is [hosted here](https://gameoflife-gameoflife.vercel.app/).

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `gameoflife`: a [Leaflet](https://leafletjs.com/) application providing a simulation of the popular [Game of life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life), with the possibility to use different rulesets.
- `webservice`: an [Apollo Server](https://www.apollographql.com/) GraphQL-server for fetching rule for said application, using a interface for adding new rules provided by [Next.js](https://nextjs.org/)
- `ui`: a stub React component library
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

### Utilities

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Dependencies
Install dependencies with
```
yarn install
```

### Prisma Setup
You need a working Postgres database and to connect it to Prisma. Add a .env and with, for example,
```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/webserver"
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
```
Documentation for the Postgres URI can be [found here](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING)
After setting it up, run
```
yarn prisma db push
yarn prisma db seed
yarn prisma migrate
```
### Developement
While developing, run the developement build with the following command:

```
yarn dev
```

### Build

To build all apps and packages, run the following command:

```
yarn build
```
