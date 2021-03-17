---
title: npm global or local packages
description: 'When is a package best installed globally? Why?'
authors: flaviocopes, MylesBorins, LaRuaNa, ahmadawais
section: Getting Started
---

The main difference between local and global packages is this:

* **local packages** are installed in the directory where you run `npm install <package-name>`, and they are put in the `node_modules` folder under this directory
* **global packages** are all put in a single place in your system (exactly where depends on your setup), regardless of where you run `npm install -g <package-name>`

In your code you can only require local packages:

```js
require('package-name')
```

so when should you install in one way or another?

In general, **all packages should be installed locally**.

This makes sure you can have dozens of applications in your computer, all running a different version of each package if needed.

Updating a global package would make all your projects use the new release, and as you can imagine this might cause nightmares in terms of maintenance, as some packages might break compatibility with further dependencies, and so on.

All projects have their own local version of a package, even if this might appear like a waste of resources, it's minimal compared to the possible negative consequences.

A package **should be installed globally** when it provides an executable command that you run from the shell (CLI), and it's reused across projects.

You can also install executable commands locally and run them using npx, but some packages are just better installed globally.

Great examples of popular global packages which you might know are

* `npm`
* `create-react-app`
* `vue-cli`
* `grunt-cli`
* `mocha`
* `react-native-cli`
* `gatsby-cli`
* `forever`
* `nodemon`

You probably have some packages installed globally already on your system. You can see them by running

```bash
npm list -g --depth 0
```

on your command line.
