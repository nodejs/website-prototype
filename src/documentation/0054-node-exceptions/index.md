---
title: Error handling in Node.js
description: 'How to handle errors during the execution of a Node.js application'
authors: flaviocopes, MylesBorins, fhemberger, LaRuaNa, ahmadawais
section: Getting Started
---

Errors in Node.js are handled through exceptions.

## Creating exceptions

An exception is created using the `throw` keyword:

```js
throw value
```

As soon as JavaScript executes this line, the normal program flow is halted and the control is held back to the nearest **exception handler**.

Usually in client-side code `value` can be any JavaScript value including a string, a number or an object.

In Node.js, we don't throw strings, we just throw Error objects.

## Error objects

An error object is an object that is either an instance of the Error object, or extends the Error class, provided in the [Error core module](https://nodejs.org/api/errors.html):

```js
throw new Error('Ran out of coffee')
```

or

```js
class NotEnoughCoffeeError extends Error {
  //...
}
throw new NotEnoughCoffeeError()
```

## Handling exceptions

An exception handler is a `try`/`catch` statement.

Any exception raised in the lines of code included in the `try` block is handled in the corresponding `catch` block:

```js
try {
  //lines of code
} catch (e) {}
```

`e` in this example is the exception value.

You can add multiple handlers, that can catch different kinds of errors.

## Catching uncaught exceptions

If an uncaught exception gets thrown during the execution of your program, your program will crash.

To solve this, you listen for the `uncaughtException` event on the `process` object:

```js
process.on('uncaughtException', err => {
  console.error('There was an uncaught error', err)
  process.exit(1) //mandatory (as per the Node.js docs)
})
```

You don't need to import the `process` core module for this, as it's automatically injected.

## Exceptions with promises

Using promises you can chain different operations, and handle errors at the end:

```js
doSomething1()
  .then(doSomething2)
  .then(doSomething3)
  .catch(err => console.error(err))
```

How do you know where the error occurred? You don't really know, but you can handle errors in each of the functions you call (`doSomethingX`), and inside the error handler throw a new error, that's going to call the outside `catch` handler:

```js
const doSomething1 = () => {
  //...
  try {
    //...
  } catch (err) {
    //... handle it locally
    throw new Error(err.message)
  }
  //...
}
```

To be able to handle errors locally without handling them in the function we call, we can break the chain you can create a function in each `then()` and process the exception:

```js
doSomething1()
  .then(() => {
    return doSomething2().catch(err => {
      //handle error
      throw err //break the chain!
    })
  })
  .then(() => {
    return doSomething3().catch(err => {
      //handle error
      throw err //break the chain!
    })
  })
  .catch(err => console.error(err))
```

## Error handling with async/await

Using async/await, you still need to catch errors, and you do it this way:

```js
async function someFunction() {
  try {
    await someOtherFunction()
  } catch (err) {
    console.error(err.message)
  }
}
```
