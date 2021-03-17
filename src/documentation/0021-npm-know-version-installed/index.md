---
title: Find the installed version of an npm package
description: 'How to find out which version of a particular package you have installed in your app'
authors: flaviocopes, MylesBorins, LaRuaNa, ahmadawais
section: Getting Started
---

To see the version of all installed npm packages, including their dependencies:

```bash
npm list
```

For example:

```bash
❯ npm list
/Users/joe/dev/node/cowsay
└─┬ cowsay@1.3.1
  ├── get-stdin@5.0.1
  ├─┬ optimist@0.6.1
  │ ├── minimist@0.0.10
  │ └── wordwrap@0.0.3
  ├─┬ string-width@2.1.1
  │ ├── is-fullwidth-code-point@2.0.0
  │ └─┬ strip-ansi@4.0.0
  │   └── ansi-regex@3.0.0
  └── strip-eof@1.0.0
```

You can also just open the `package-lock.json` file, but this involves some visual scanning.

`npm list -g` is the same, but for globally installed packages.

To get only your top-level packages (basically, the ones you told npm to install and you listed in the `package.json`), run `npm list --depth=0`:

```bash
❯ npm list --depth=0
/Users/joe/dev/node/cowsay
└── cowsay@1.3.1
```

You can get the version of a specific package by specifying its name:

```bash
❯ npm list cowsay
/Users/joe/dev/node/cowsay
└── cowsay@1.3.1
```

This also works for dependencies of packages you installed:

```bash
❯ npm list minimist
/Users/joe/dev/node/cowsay
└─┬ cowsay@1.3.1
  └─┬ optimist@0.6.1
    └── minimist@0.0.10
```

If you want to see what's the latest available version of the package on the npm repository, run `npm view [package_name] version`:

```bash
❯ npm view cowsay version

1.3.1
```
