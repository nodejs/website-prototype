---
title: Node.js, accept arguments from the command line
description: 'How to accept arguments in a Node.js program passed from the command line'
authors: flaviocopes, ZYSzys, MylesBorins, fhemberger, LaRuaNa, ahmadawais
section: Getting Started
category: learn
---

You can pass any number of arguments when invoking a Node.js application using

```bash
node app.js
```

Arguments can be standalone or have a key and a value.

For example:

```bash
node app.js joe
```

or

```bash
node app.js name=joe
```

This changes how you will retrieve this value in the Node.js code.

The way you retrieve it is using the `process` object built into Node.js.

It exposes an `argv` property, which is an array that contains all the command line invocation arguments.

The first element is the full path of the `node` command.

The second element is the full path of the file being executed.

All the additional arguments are present from the third position going forward.

You can iterate over all the arguments (including the node path and the file path) using a loop:

```js
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`)
})
```

You can get only the additional arguments by creating a new array that excludes the first 2 params:

```js
const args = process.argv.slice(2)
```

If you have one argument without an index name, like this:

```bash
node app.js joe
```

you can access it using

```js
const args = process.argv.slice(2)
args[0]
```

In this case:

```bash
node app.js name=joe
```

`args[0]` is `name=joe`, and you need to
parse it. The best way to do so is by using the [`minimist`](https://www.npmjs.com/package/minimist) library, which helps dealing with arguments:

```js
const args = require('minimist')(process.argv.slice(2))
args['name'] //joe
```

Install the required `minimist` package using `npm` (lesson about the package manager comes [later on](https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager)).

```js
npm install minimist
```

This time you need to use double dashes before each argument name:

```bash
node app.js --name=joe
```
