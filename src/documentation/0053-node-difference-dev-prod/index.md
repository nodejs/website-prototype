---
title: Node.js, the difference between development and production
description: 'Learn how to set up different configurations for production and development environments'
authors: flaviocopes, MylesBorins, fhemberger, LaRuaNa, ahmadawais
section: Getting Started
---

You can have different configurations for production and development environments.

Node.js assumes it's always running in a development environment.
You can signal Node.js that you are running in production by setting the `NODE_ENV=production` environment variable.

This is usually done by executing the command

```bash
export NODE_ENV=production
```

in the shell, but it's better to put it in your shell configuration file (e.g. `.bash_profile` with the Bash shell) because otherwise the setting does not persist in case of a system restart.

You can also apply the environment variable by prepending it to your application initialization command:

```bash
NODE_ENV=production node app.js
```

This environment variable is a convention that is widely used in external libraries as well.

Setting the environment to `production` generally ensures that

* logging is kept to a minimum, essential level
* more caching levels take place to optimize performance

For example Pug, the templating library used by Express, compiles in debug mode if `NODE_ENV` is not set to `production`. Express views are compiled in every request in development mode, while in production they are cached. There are many more examples.

You can use conditional statements to execute code in different environments:

```js
if (process.env.NODE_ENV === "development") {
  //...
}
if (process.env.NODE_ENV === "production") {
  //...
}
if(['production', 'staging'].indexOf(process.env.NODE_ENV) >= 0) {
  //...
})
```

For example, in an Express app, you can use this to set different error handlers per environment:

```js
if (process.env.NODE_ENV === "development") {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }))
})

if (process.env.NODE_ENV === "production") {
  app.use(express.errorHandler())
})
```
