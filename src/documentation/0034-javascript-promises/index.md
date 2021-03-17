---
title: Understanding JavaScript Promises
description: 'Promises are one way to deal with asynchronous code in JavaScript, without writing too many callbacks in your code.'
authors: flaviocopes, potch, MylesBorins, LaRuaNa, bdharrington7, amiller-gh, ahmadawais
section: Getting Started
---

## Introduction to promises

<iframe
  title="Introduction to promises"
  src="https://glitch.com/embed/#!/embed/nodejs-dev-0034-01?path=server.js&previewSize=35&attributionHidden=true&sidebarCollapsed=true"
  alt="nodejs-dev-0034-01 on Glitch"
  style="height: 400px; width: 100%; border: 0;">
</iframe>

A promise is commonly defined as **a proxy for a value that will eventually become available**.

Promises are one way to deal with asynchronous code, without getting stuck in [callback hell](http://callbackhell.com/).

Promises have been part of the language for years (standardized and introduced in ES2015), and have recently become more integrated, with **async** and **await** in ES2017.

**Async functions** use promises behind the scenes, so understanding how promises work is fundamental to understanding how `async` and `await` work.

### How promises work, in brief

Once a promise has been called, it will start in a **pending state**. This means that the calling function continues executing, while the promise is pending until it resolves, giving the calling function whatever data was being requested.

The created promise will eventually end in a **resolved state**, or in a **rejected state**, calling the respective callback functions (passed to `then` and `catch`) upon finishing.

### Which JS APIs use promises?

In addition to your own code and libraries code, promises are used by standard modern Web APIs such as:

* the Battery API
* the Fetch API
* Service Workers

It's unlikely that in modern JavaScript you'll find yourself _not_ using promises, so let's start diving right into them.

---

## Creating a promise

The Promise API exposes a Promise constructor, which you initialize using `new Promise()`:

```js
let done = true

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built'
    resolve(workDone)
  } else {
    const why = 'Still working on something else'
    reject(why)
  }
})
```

As you can see, the promise checks the `done` global constant, and if that's true, the promise goes to a **resolved** state (since the `resolve` callback was called); otherwise, the `reject` callback is executed, putting the promise in a rejected state. (If none of these functions is called in the execution path, the promise will remain in a pending state)

Using `resolve` and `reject`, we can communicate back to the caller what the resulting promise state was, and what to do with it. In the above case we just returned a string, but it could be an object, or `null` as well. Because we've created the promise in the above snippet, it has **already started executing**. This is important to understand what's going on in the section [Consuming a promise](#consuming-a-promise) below.

A more common example you may come across is a technique called **Promisifying**. This technique is a way to be able to use a classic JavaScript function that takes a callback, and have it return a promise:

```js
const fs = require('fs')

const getFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err)  // calling `reject` will cause the promise to fail with or without the error passed as an argument
        return        // and we don't want to go any further
      }
      resolve(data)
    })
  })
}

getFile('/etc/passwd')
.then(data => console.log(data))
.catch(err => console.error(err))
```

> In recent versions of Node.js, you won't have to do this manual conversion for a lot of the API. There is a promisifying function available in the [util module](https://nodejs.org/docs/latest-v11.x/api/util.html#util_util_promisify_original) that will do this for you, given that the function you're promisifying has the correct signature.

---

## Consuming a promise

In the last section, we introduced how a promise is created.

Now let's see how the promise can be _consumed_ or used.

```js
const isItDoneYet = new Promise(/* ... as above ... */)
//...

const checkIfItsDone = () => {
  isItDoneYet
    .then(ok => {
      console.log(ok)
    })
    .catch(err => {
      console.error(err)
    })
}
```

Running `checkIfItsDone()` will specify functions to execute when the `isItDoneYet` promise resolves (in the `then` call) or rejects (in the `catch` call).

---

## Chaining promises

A promise can be returned to another promise, creating a chain of promises.

A great example of chaining promises is the Fetch API, which we can use to get a resource and queue a chain of promises to execute when the resource is fetched.

The Fetch API is a promise-based mechanism, and calling `fetch()` is equivalent to defining our own promise using `new Promise()`.

### Example of chaining promises

```js
const status = response => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  }
  return Promise.reject(new Error(response.statusText))
}

const json = response => response.json()

fetch('/todos.json')
  .then(status)    // note that the `status` function is actually **called** here, and that it **returns a promise***
  .then(json)      // likewise, the only difference here is that the `json` function here returns a promise that resolves with `data`
  .then(data => {  // ... which is why `data` shows up here as the first parameter to the anonymous function
    console.log('Request succeeded with JSON response', data)
  })
  .catch(error => {
    console.log('Request failed', error)
  })
```

In this example, we call `fetch()` to get a list of TODO items from the `todos.json` file found in the domain root, and we create a chain of promises.

Running `fetch()` returns a [response](https://fetch.spec.whatwg.org/#concept-response), which has many properties, and within those we reference:

* `status`, a numeric value representing the HTTP status code
* `statusText`, a status message, which is `OK` if the request succeeded

`response` also has a `json()` method, which returns a promise that will resolve with the content of the body processed and transformed into JSON.

So given those premises, this is what happens: the first promise in the chain is a function that we defined, called `status()`, that checks the response status and if it's not a success response (between 200 and 299), it rejects the promise.

This operation will cause the promise chain to skip all the chained promises listed and will skip directly to the `catch()` statement at the bottom, logging the `Request failed` text along with the error message.

If that succeeds instead, it calls the `json()` function we defined. Since the previous promise, when successful, returned the `response` object, we get it as an input to the second promise.

In this case, we return the data JSON processed, so the third promise receives the JSON directly:

```js
.then((data) => {
  console.log('Request succeeded with JSON response', data)
})
```

and we simply log it to the console.

---

## Handling errors

In the example, in the previous section, we had a `catch` that was appended to the chain of promises.

When anything in the chain of promises fails and raises an error or rejects the promise, the control goes to the nearest `catch()` statement down the chain.

```js
new Promise((resolve, reject) => {
  throw new Error('Error')
}).catch(err => {
  console.error(err)
})

// or

new Promise((resolve, reject) => {
  reject('Error')
}).catch(err => {
  console.error(err)
})
```

### Cascading errors

If inside the `catch()` you raise an error, you can append a second `catch()` to handle it, and so on.

```js
new Promise((resolve, reject) => {
  throw new Error('Error')
})
  .catch(err => {
    throw new Error('Error')
  })
  .catch(err => {
    console.error(err)
  })
```

---

## Orchestrating promises

### `Promise.all()`

If you need to synchronize different promises, `Promise.all()` helps you define a list of promises, and execute something when they are all resolved.

Example:

```js
const f1 = fetch('/something.json')
const f2 = fetch('/something2.json')

Promise.all([f1, f2])
  .then(res => {
    console.log('Array of results', res)
  })
  .catch(err => {
    console.error(err)
  })
```

The ES2015 destructuring assignment syntax allows you to also do

```js
Promise.all([f1, f2]).then(([res1, res2]) => {
  console.log('Results', res1, res2)
})
```

You are not limited to using `fetch` of course, **any promise can be used in this fashion**.

### `Promise.race()`

`Promise.race()` runs when the first of the promises you pass to it resolves, and it runs the attached callback just once, with the result of the first promise resolved.

Example:

```js
const first = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'first')
})
const second = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'second')
})

Promise.race([first, second]).then(result => {
  console.log(result) // second
})
```

## Common errors

### Uncaught TypeError: undefined is not a promise

If you get the `Uncaught TypeError: undefined is not a promise` error in the console, make sure you use `new Promise()` instead of just `Promise()`

### UnhandledPromiseRejectionWarning

This means that a promise you called rejected, but there was no `catch` used to handle the error. Add a `catch` after the offending `then` to handle this properly.
