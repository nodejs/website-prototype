---
title: An introduction to the npm package manager
description: 'A quick guide to npm, the powerful package manager key to the success of Node.js. In January 2017 over 350000 packages were reported being listed in the npm registry, making it the biggest single language code repository on Earth, and you can be sure there is a package for (almost!) everything.'
authors: flaviocopes, MylesBorins, LaRuaNa, jgb-solutions, amiller-gh, ahmadawais
section: Getting Started
---

## Introduction to npm

`npm` is the standard package manager for Node.js.

In January 2017 over 350000 packages were reported being listed in the npm registry, making it the biggest single language code repository on Earth, and you can be sure there is a package for (almost!) everything.

It started as a way to download and manage dependencies of Node.js packages, but it has since become a tool used also in frontend JavaScript.

There are many things that `npm` does.

> [**Yarn**](https://yarnpkg.com/en/) and [**pnpm**](https://pnpm.js.org/) are alternatives to npm cli. You can check them out as well.

## Downloads

`npm` manages downloads of dependencies of your project.

### Installing all dependencies

If a project has a `package.json` file, by running

```bash
npm install
```

it will install everything the project needs, in the `node_modules` folder, creating it if it's not existing already.

### Installing a single package

You can also install a specific package by running

```bash
npm install <package-name>
```

Often you'll see more flags added to this command:

* `--save` installs and adds the entry to the `package.json` file _dependencies_
* `--save-dev` installs and adds the entry to the `package.json` file _devDependencies_

The difference is mainly that devDependencies are usually development tools, like a testing library, while `dependencies` are bundled with the app in production.

### Updating packages

Updating is also made easy, by running

```console
npm update
```

`npm` will check all packages for a newer version that satisfies your versioning constraints.

You can specify a single package to update as well:

```console
npm update <package-name>
```

## Versioning

In addition to plain downloads, `npm` also manages **versioning**, so you can specify any specific version of a package, or require a version higher or lower than what you need.

Many times you'll find that a library is only compatible with a major release of another library.

Or a bug in the latest release of a lib, still unfixed, is causing an issue.

Specifying an explicit version of a library also helps to keep everyone on the same exact version of a package, so that the whole team runs the same version until the `package.json` file is updated.

In all those cases, versioning helps a lot, and `npm` follows the semantic versioning (semver) standard.

## Running Tasks

The package.json file supports a format for specifying command line tasks that can be run by using

```console
npm run <task-name>
```

For example:

```json
{
  "scripts": {
    "start-dev": "node lib/server-development",
    "start": "node lib/server-production"
  }
}
```

It's very common to use this feature to run Webpack:

```json
{
  "scripts": {
    "watch": "webpack --watch --progress --colors --config webpack.conf.js",
    "dev": "webpack --progress --colors --config webpack.conf.js",
    "prod": "NODE_ENV=production webpack -p --config webpack.conf.js",
  }
}
```

So instead of typing those long commands, which are easy to forget or mistype, you can run

```console
$ npm run watch
$ npm run dev
$ npm run prod
```
