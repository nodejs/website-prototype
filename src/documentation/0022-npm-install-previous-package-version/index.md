---
title: Install an older version of an npm package
description: 'Learn how to install an older version of an npm package, something that might be useful to solve a compatibility problem'
authors: flaviocopes, MylesBorins, LaRuaNa, ahmadawais
section: Getting Started
---

You can install an old version of an npm package using the `@` syntax:

```bash
npm install <package>@<version>
```

Example:

```bash
npm install cowsay
```

installs version 1.3.1 (at the time of writing).

Install version 1.2.0 with:

```bash
npm install cowsay@1.2.0
```

The same can be done with global packages:

```bash
npm install -g webpack@4.16.4
```

You might also be interested in listing all the previous versions of a package. You can do it with `npm view <package> versions`:

```bash
❯ npm view cowsay versions

[ '1.0.0',
  '1.0.1',
  '1.0.2',
  '1.0.3',
  '1.1.0',
  '1.1.1',
  '1.1.2',
  '1.1.3',
  '1.1.4',
  '1.1.5',
  '1.1.6',
  '1.1.7',
  '1.1.8',
  '1.1.9',
  '1.2.0',
  '1.2.1',
  '1.3.0',
  '1.3.1' ]
```
