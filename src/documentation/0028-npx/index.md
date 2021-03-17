---
title: The npx Node.js Package Runner
description: 'npx is a very cool way to run Node.js code, and provides many useful features'
authors: flaviocopes, MylesBorins, fhemberger, LaRuaNa, jgb-solutions, ahmadawais
section: Getting Started
---

`npx` is a very powerful command that's been available in **npm** starting version 5.2, released in July 2017.

> If you don't want to install npm, you can [install npx as a standalone package](https://www.npmjs.com/package/npx)

`npx` lets you run code built with Node.js and published through the npm registry.

## Easily run local commands

Node.js developers used to publish most of the executable commands as global packages, in order for them to be in the path and executable immediately.

This was a pain because you could not really install different versions of the same command.

Running `npx commandname` automatically finds the correct reference of the command inside the `node_modules` folder of a project, without needing to know the exact path, and without requiring the package to be installed globally and in the user's path.

## Installation-less command execution

There is another great feature of `npx`, which is allowing to run commands without first installing them.

This is pretty useful, mostly because:

1. you don't need to install anything
2. you can run different versions of the same command, using the syntax @version

A typical demonstration of using `npx` is through the `cowsay` command. `cowsay` will print a cow saying what you wrote in the command. For example:

`cowsay "Hello"` will print

```console
 _______
< Hello >
 -------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

This only works if you have the `cowsay` command globally installed from npm previously. Otherwise you'll get an error when you try to run the command.

`npx` allows you to run that npm command without having it installed locally:

```bash
npx cowsay "Hello"
```

will do the job.

Now, this is a funny useless command.
Other scenarios include:

* running the `vue` CLI tool to create new applications and run them: `npx @vue/cli create my-vue-app`
* creating a new React app using `create-react-app`: `npx create-react-app my-react-app`

and many more.

Once executed, the downloaded code will be wiped.

## Run some code using a different Node.js version

Use the `@` to specify the version, and combine that with the [`node` npm package](https://www.npmjs.com/package/node):

```bash
npx node@10 -v #v10.18.1
npx node@12 -v #v12.14.1
```

This helps to avoid tools like `nvm` or the other Node.js version management tools.

## Run arbitrary code snippets directly from a URL

`npx` does not limit you to the packages published on the npm registry.

You can run code that sits in a GitHub gist, for example:

```bash
npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32
```

Of course, you need to be careful when running code that you do not control, as with great power comes great responsibility.
