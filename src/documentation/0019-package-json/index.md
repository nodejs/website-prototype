---
title: The package.json guide
description: 'The package.json file is a key element in lots of app codebases based on the Node.js ecosystem.'
authors: flaviocopes, MylesBorins, fhemberger, LaRuaNa, jgb-solutions, amiller-gh, ahmadawais
section: Getting Started
---

If you work with JavaScript, or you've ever interacted with a JavaScript project, Node.js or a frontend project, you surely met the `package.json` file.

What's that for? What should you know about it, and what are some of the cool things you can do with it?

The `package.json` file is kind of a manifest for your project. It can do a lot of things, completely unrelated. It's a central repository of configuration for tools, for example. It's also where `npm` and `yarn` store the names and versions for all the installed packages.

## The file structure

Here's an example package.json file:

```json
{}
```

It's empty! There are no fixed requirements of what should be in a `package.json` file, for an application. The only requirement is that it respects the JSON format, otherwise it cannot be read by programs that try to access its properties programmatically.

If you're building a Node.js package that you want to distribute over `npm` things change radically, and you must have a set of properties that will help other people use it. We'll see more about this later on.

This is another package.json:

```json
{
  "name": "test-project"
}
```

It defines a `name` property, which tells the name of the app, or package, that's contained in the same folder where this file lives.

Here's a much more complex example, which was extracted from a sample Vue.js application:

```json
{
  "name": "test-project",
  "version": "1.0.0",
  "description": "A Vue.js project",
  "main": "src/main.js",
  "private": true,
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "unit": "jest --config test/unit/jest.conf.js --coverage",
    "test": "npm run unit",
    "lint": "eslint --ext .js,.vue src test/unit",
    "build": "node build/build.js"
  },
  "dependencies": {
    "vue": "^2.5.2"
  },
  "devDependencies": {
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.22.1",
    "babel-eslint": "^8.2.1",
    "babel-helper-vue-jsx-merge-props": "^2.0.3",
    "babel-jest": "^21.0.2",
    "babel-loader": "^7.1.1",
    "babel-plugin-dynamic-import-node": "^1.2.0",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-es2015-modules-commonjs": "^6.26.0",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-plugin-transform-vue-jsx": "^3.5.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    "chalk": "^2.0.1",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.28.0",
    "eslint": "^4.15.0",
    "eslint-config-airbnb-base": "^11.3.0",
    "eslint-friendly-formatter": "^3.0.0",
    "eslint-import-resolver-webpack": "^0.8.3",
    "eslint-loader": "^1.7.1",
    "eslint-plugin-import": "^2.7.0",
    "eslint-plugin-vue": "^4.0.0",
    "extract-text-webpack-plugin": "^3.0.0",
    "file-loader": "^1.1.4",
    "friendly-errors-webpack-plugin": "^1.6.1",
    "html-webpack-plugin": "^2.30.1",
    "jest": "^22.0.4",
    "jest-serializer-vue": "^0.3.0",
    "node-notifier": "^5.1.2",
    "optimize-css-assets-webpack-plugin": "^3.2.0",
    "ora": "^1.2.0",
    "portfinder": "^1.0.13",
    "postcss-import": "^11.0.0",
    "postcss-loader": "^2.0.8",
    "postcss-url": "^7.2.1",
    "rimraf": "^2.6.0",
    "semver": "^5.3.0",
    "shelljs": "^0.7.6",
    "uglifyjs-webpack-plugin": "^1.1.1",
    "url-loader": "^0.5.8",
    "vue-jest": "^1.0.2",
    "vue-loader": "^13.3.0",
    "vue-style-loader": "^3.0.1",
    "vue-template-compiler": "^2.5.2",
    "webpack": "^3.6.0",
    "webpack-bundle-analyzer": "^2.9.0",
    "webpack-dev-server": "^2.9.1",
    "webpack-merge": "^4.1.0"
  },
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": ["> 1%", "last 2 versions", "not ie <= 8"]
}
```

there are _lots_ of things going on here:

* `version` indicates the current version
* `name` sets the application/package name
* `description` is a brief description of the app/package
* `main` set the entry point for the application
* `private` if set to `true` prevents the app/package to be accidentally published on `npm`
* `scripts` defines a set of node scripts you can run
* `dependencies` sets a list of `npm` packages installed as dependencies
* `devDependencies` sets a list of `npm` packages installed as development dependencies
* `engines` sets which versions of Node.js this package/app works on
* `browserslist` is used to tell which browsers (and their versions) you want to support

All those properties are used by either `npm` or other tools that we can use.

## Properties breakdown

This section describes the properties you can use in detail. We refer to "package" but the same thing applies to local applications which you do not use as packages.

Most of those properties are only used on <https://www.npmjs.com/>, others by scripts that interact with your code, like `npm` or others.

### name

Sets the package name.

Example:

```json
"name": "test-project"
```

The name must be less than 214 characters, must not have spaces, it can only contain lowercase letters, hyphens (`-`) or underscores (`_`).

This is because when a package is published on `npm`, it gets its own URL based on this property.

If you published this package publicly on GitHub, a good value for this property is the GitHub repository name.

### author

Lists the package author name

Example:

```json
{
  "author": "Joe <joe@whatever.com> (https://whatever.com)"
}
```

Can also be used with this format:

```json
{
  "author": {
    "name": "Joe",
    "email": "joe@whatever.com",
    "url": "https://whatever.com"
  }
}
```

### contributors

As well as the author, the project can have one or more contributors. This property is an array that lists them.

Example:

```json
{
  "contributors": ["Joe <joe@whatever.com> (https://whatever.com)"]
}
```

Can also be used with this format:

```json
{
  "contributors": [
    {
      "name": "Joe",
      "email": "joe@whatever.com",
      "url": "https://whatever.com"
    }
  ]
}
```

### bugs

Links to the package issue tracker, most likely a GitHub issues page

Example:

```json
{
  "bugs": "https://github.com/whatever/package/issues"
}
```

### homepage

Sets the package homepage

Example:

```json
{
  "homepage": "https://whatever.com/package"
}
```

### version

Indicates the current version of the package.

Example:

```json
"version": "1.0.0"
```

This property follows the semantic versioning (semver) notation for versions, which means the version is always expressed with 3 numbers: `x.x.x`.

The first number is the major version, the second the minor version and the third is the patch version.

There is a meaning in these numbers: a release that only fixes bugs is a patch release, a release that introduces backward-compatible changes is a minor release, a major release can have breaking changes.

### license

Indicates the license of the package.

Example:

```json
"license": "MIT"
```

### keywords

This property contains an array of keywords that associate with what your package does.

Example:

```json
"keywords": [
  "email",
  "machine learning",
  "ai"
]
```

This helps people find your package when navigating similar packages, or when browsing the <https://www.npmjs.com/> website.

### description

This property contains a brief description of the package

Example:

```json
"description": "A package to work with strings"
```

This is especially useful if you decide to publish your package to `npm` so that people can find out what the package is about.

### repository

This property specifies where this package repository is located.

Example:

```json
"repository": "github:whatever/testing",
```

Notice the `github` prefix. There are other popular services baked in:

```json
"repository": "gitlab:whatever/testing",
```

```json
"repository": "bitbucket:whatever/testing",
```

You can explicitly set the version control system:

```json
"repository": {
  "type": "git",
  "url": "https://github.com/whatever/testing.git"
}
```

You can use different version control systems:

```json
"repository": {
  "type": "svn",
  "url": "..."
}
```

### main

Sets the entry point for the package.

When you import this package in an application, that's where the application will search for the module exports.

Example:

```json
"main": "src/main.js"
```

### private

if set to `true` prevents the app/package to be accidentally published on `npm`

Example:

```json
"private": true
```

### scripts

Defines a set of node scripts you can run

Example:

```json
"scripts": {
  "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
  "start": "npm run dev",
  "unit": "jest --config test/unit/jest.conf.js --coverage",
  "test": "npm run unit",
  "lint": "eslint --ext .js,.vue src test/unit",
  "build": "node build/build.js"
}
```

These scripts are command line applications. You can run them by calling `npm run XXXX` or `yarn XXXX`, where `XXXX` is the command name. Example: `npm run dev`.

You can use any name you want for a command, and scripts can do literally anything you want.

### dependencies

Sets a list of `npm` packages installed as dependencies.

When you install a package using npm or yarn:

```bash
npm install <PACKAGENAME>
yarn add <PACKAGENAME>
```

that package is automatically inserted in this list.

Example:

```json
"dependencies": {
  "vue": "^2.5.2"
}
```

### devDependencies

Sets a list of `npm` packages installed as development dependencies.

They differ from `dependencies` because they are meant to be installed only on a development machine, not needed to run the code in production.

When you install a package using npm or yarn:

```bash
npm install --save-dev <PACKAGENAME>
yarn add --dev <PACKAGENAME>
```

that package is automatically inserted in this list.

Example:

```json
"devDependencies": {
  "autoprefixer": "^7.1.2",
  "babel-core": "^6.22.1"
}
```

### engines

Sets which versions of Node.js and other commands this package/app work on

Example:

```json
"engines": {
  "node": ">= 6.0.0",
  "npm": ">= 3.0.0",
  "yarn": "^0.13.0"
}
```

### browserslist

Is used to tell which browsers (and their versions) you want to support. It's referenced by Babel, Autoprefixer, and other tools, to only add the polyfills and fallbacks needed to the browsers you target.

Example:

```json
"browserslist": [
  "> 1%",
  "last 2 versions",
  "not ie <= 8"
]
```

This configuration means you want to support the last 2 major versions of all browsers with at least 1% of usage (from the [CanIUse.com](https://caniuse.com) stats), except IE8 and lower.

([see more](https://www.npmjs.com/package/browserslist))

### Command-specific properties

The `package.json` file can also host command-specific configuration, for example for Babel, ESLint, and more.

Each has a specific property, like `eslintConfig`, `babel` and others. Those are command-specific, and you can find how to use those in the respective command/project documentation.

## Package versions

You have seen in the description above version numbers like these: `~3.0.0` or `^0.13.0`. What do they mean, and which other version specifiers can you use?

That symbol specifies which updates your package accepts, from that dependency.

Given that using semver (semantic versioning) all versions have 3 digits, the first being the major release, the second the minor release and the third is the patch release, you have these "[Rules](https://nodejs.dev/learn/semantic-versioning-using-npm/)".

You can combine most of the versions in ranges, like this: `1.0.0 || >=1.1.0 <1.2.0`, to either use 1.0.0 or one release from 1.1.0 up, but lower than 1.2.0.
