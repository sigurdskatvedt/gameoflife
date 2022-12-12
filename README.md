# Game of Life, Leaflet

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
