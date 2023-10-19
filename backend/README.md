## Description

This is a backend for repo [blog-social]("https://github.com/sonht113/blog-social")

### Features

- ⚡ [Nest.js](https://nestjs.com/) is A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
- ⚡ [GraphQL](https://graphql.org/) is a query language for APIs and a runtime for fulfilling those queries with your existing data
- 💎 [Mikro ORM](https://mikro-orm.io/)
- 🗃️ [Mikro ORM - Postgresql](https://mikro-orm.io/docs/installation)
- 📷 [Cloudinary](https://cloudinary.com/)
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 📏 Linter with [ESLint](https://eslint.org) (default NestJS)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for ESLint, Prettier, TypeScript, Jest

## Installation

```bash
$ pnpm install
```

## Change ENV
```
USER=[username when set up run postgresql server]
PASSWORD=[password when set up run postgresql server]
DB_NAME=[Database name]
CLD_CLOUD_NAME=[cloud name in your console cloudinary]
CLD_API_KEY=[cloud key in your console cloudinary]
CLD_API_SECRET=[cloud api secret in your console cloudinary]
```

## Create table in database
```
$ npx mikro-orm migration:create

$ npx mikro-orm migration:up
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev
```

## Stay in touch

- Author - [Trong Son](https://nuicoder.com)
