---
title: Make an HTTP POST request using Node.js
description: 'Find out how to make an HTTP POST request using Node.js'
authors: flaviocopes, OnyekaIjeh, MylesBorins, fhemberger, LaRuaNa, ahmadawais
section: Getting Started
---

There are many ways to perform an HTTP POST request in Node.js, depending on the abstraction level you want to use.

The simplest way to perform an HTTP request using Node.js is to use the [Axios library](https://github.com/axios/axios):

```js
const axios = require('axios')

axios
  .post('https://whatever.com/todos', {
    todo: 'Buy the milk'
  })
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
```

Axios requires the use of a 3rd party library.

A POST request is possible just using the Node.js standard modules, although it's more verbose than the two preceding options:

```js
const https = require('https')

const data = JSON.stringify({
  todo: 'Buy the milk'
})

const options = {
  hostname: 'whatever.com',
  port: 443,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()
```
