# 🚧 TFG 🚧

🚨 Warning: This repository is under heavy development! 

> It is meant to be my thesis, which will be a recolection of [Three.js](https://threejs.org/) projects made with modern JavaScript tools and frameworks.

## What's inside?

This turborepo has been bootstrapped with [TurboRepo](https://turbo.build/), a build system for JavaScript/TypeScript. It uses [Yarn](https://classic.yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- [**Buckle up**](https://tfg-buckle-up-rose.vercel.app/): a [Vite](https://vitejs.dev/) app
- [**Particle showcase**](https://tfg-particle-showcase.vercel.app): another [Vite](https://vitejs.dev/) app
- [**Talking stars**](https://tfg-talking-stars-nine.vercel.app/): another [Vite](https://vitejs.dev/) app
- ...to be continued

 <br>

- **eslint-config-custom**: *eslint* configurations used throughout the monorepo
- **tailwind-config**: *tailwind.config*'s used throughout the monorepo
- **tsconfig**: *tsconfig.json*'s used throughout the monorepo
- **viteconfig**: *vite.config*'s used throughout the Vite apps
- **ui**: a stub *React component library* accesable for all the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Set up a developement environment

To develop all apps and packages, run the following command:

```
git clone https://github.com/randreu28/TFG.git
cd tfg
yarn
yarn run dev 
```

If you want to focus on only one app, run:

```
npx turbo run dev --filter <app name>
```

### Build

To build all apps and packages, run the following command:

```
yarn run build
```


### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd tfg
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Each has it's own README to get started. For more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
