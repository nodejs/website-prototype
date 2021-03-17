---
title: How to exit from a Node.js program
description: 'Learn how to terminate a Node.js app in the best possible way'
authors: flaviocopes, MylesBorins, fhemberger, LaRuaNa, jgb-solutions, ahmadawais
section: Getting Started
---

There are various ways to terminate a Node.js application.

When running a program in the console you can close it with `ctrl-C`, but what we want to discuss here is programmatically exiting.

Let's start with the most drastic one, and see why you're better off _not_ using it.

The `process` core module provides a handy method that allows you to programmatically exit from a Node.js program: `process.exit()`.

When Node.js runs this line, the process is immediately forced to terminate.

This means that any callback that's pending, any network request still being sent, any filesystem access, or processes writing to `stdout` or `stderr` - all is going to be ungracefully terminated right away.

If this is fine for you, you can pass an integer that signals the operating system the exit code:

```js
process.exit(1)
```

By default the exit code is `0`, which means success. Different exit codes have different meaning, which you might want to use in your own system to have the program communicate to other programs.

You can read more on exit codes at <https://nodejs.org/api/process.html#process_exit_codes>

You can also set the `process.exitCode` property:

```js
process.exitCode = 1
```

and when the program will later end, Node.js will return that exit code.

A program will gracefully exit when all the processing is done.

Many times with Node.js we start servers, like this HTTP server:

```js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hi!')
})

app.listen(3000, () => console.log('Server ready'))
```
> Express is a framework that uses the http module under the hood, app.listen() returns an instance of http. You would use https.createServer if you needed to serve your app using HTTPS, as app.listen only uses the http module.

This program is never going to end. If you call `process.exit()`, any currently pending or running request is going to be aborted. This is _not nice_.

In this case you need to send the command a SIGTERM signal, and handle that with the process signal handler:

> Note: `process` does not require a "require", it's automatically available.

```js
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hi!')
})

const server = app.listen(3000, () => console.log('Server ready'))

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})
```

> What are signals? Signals are a POSIX intercommunication system: a notification sent to a process in order to notify it of an event that occurred.

`SIGKILL` is the signal that tells a process to immediately terminate, and would ideally act like `process.exit()`.

`SIGTERM` is the signal that tells a process to gracefully terminate. It is the signal that's sent from process managers like `upstart` or `supervisord` and many others.

You can send this signal from inside the program, in another function:

```js
process.kill(process.pid, 'SIGTERM')
```

Or from another Node.js running program, or any other app running in your system that knows the PID of the process you want to terminate.
