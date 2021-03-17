---
title: Node.js Streams
description: 'Learn what streams are for, why are they so important, and how to use them.'
authors: flaviocopes, MylesBorins, fhemberger, LaRuaNa, amiller-gh, r0mflip, ahmadawais, 19shubham11
section: Getting Started
---

## What are streams

Streams are one of the fundamental concepts that power Node.js applications.

They are a way to handle reading/writing files, network communications, or any kind of end-to-end information exchange in an efficient way.

Streams are not a concept unique to Node.js. They were introduced in the Unix operating system decades ago, and programs can interact with each other passing streams through the pipe operator (`|`).

For example, in the traditional way, when you tell the program to read a file, the file is read into memory, from start to finish, and then you process it.

Using streams you read it piece by piece, processing its content without keeping it all in memory.

The Node.js [`stream` module](https://nodejs.org/api/stream.html) provides the foundation upon which all streaming APIs are built.
All streams are instances of [EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter)

## Why streams

Streams basically provide two major advantages over using other data handling methods:

* **Memory efficiency**: you don't need to load large amounts of data in memory before you are able to process it
* **Time efficiency**: it takes way less time to start processing data, since you can start processing as soon as you have it, rather than waiting till the whole data payload is available

## An example of a stream

A typical example is reading files from a disk.

Using the Node.js `fs` module, you can read a file, and serve it over HTTP when a new connection is established to your HTTP server:

```js
const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res) {
  fs.readFile(__dirname + '/data.txt', (err, data) => {
    res.end(data)
  })
})
server.listen(3000)
```

`readFile()` reads the full contents of the file, and invokes the callback function when it's done.

`res.end(data)` in the callback will return the file contents to the HTTP client.

If the file is big, the operation will take quite a bit of time. Here is the same thing written using streams:

```js
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(__dirname + '/data.txt')
  stream.pipe(res)
})
server.listen(3000)
```

Instead of waiting until the file is fully read, we start streaming it to the HTTP client as soon as we have a chunk of data ready to be sent.

## pipe()

The above example uses the line `stream.pipe(res)`: the `pipe()` method is called on the file stream.

What does this code do? It takes the source, and pipes it into a destination.

You call it on the source stream, so in this case, the file stream is piped to the HTTP response.

The return value of the `pipe()` method is the destination stream, which is a very convenient thing that lets us chain multiple `pipe()` calls, like this:

```js
src.pipe(dest1).pipe(dest2)
```

This construct is the same as doing

```js
src.pipe(dest1)
dest1.pipe(dest2)
```

## Streams-powered Node.js APIs

Due to their advantages, many Node.js core modules provide native stream handling capabilities, most notably:

* `process.stdin` returns a stream connected to stdin
* `process.stdout` returns a stream connected to stdout
* `process.stderr` returns a stream connected to stderr
* `fs.createReadStream()` creates a readable stream to a file
* `fs.createWriteStream()` creates a writable stream to a file
* `net.connect()` initiates a stream-based connection
* `http.request()` returns an instance of the http.ClientRequest class, which is a writable stream
* `zlib.createGzip()` compress data using gzip (a compression algorithm) into a stream
* `zlib.createGunzip()` decompress a gzip stream.
* `zlib.createDeflate()` compress data using deflate (a compression algorithm) into a stream
* `zlib.createInflate()` decompress a deflate stream

## Different types of streams

There are four classes of streams:

* `Readable`: a stream you can pipe from, but not pipe into (you can receive data, but not send data to it). When you push data into a readable stream, it is buffered, until a consumer starts to read the data.
* `Writable`: a stream you can pipe into, but not pipe from (you can send data, but not receive from it)
* `Duplex`: a stream you can both pipe into and pipe from, basically a combination of a Readable and Writable stream
* `Transform`: a Transform stream is similar to a Duplex, but the output is a transform of its input

## How to create a readable stream

We get the Readable stream from the [`stream` module](https://nodejs.org/api/stream.html), and we initialize it and implement the `readable._read()` method.

First create a stream object:

```js
const Stream = require('stream')
const readableStream = new Stream.Readable()
```

then implement `_read`:

```js
readableStream._read = () => {}
```

You can also implement `_read` using the `read` option:

```js
const readableStream = new Stream.Readable({
  read() {}
})
```

Now that the stream is initialized, we can send data to it:

```js
readableStream.push('hi!')
readableStream.push('ho!')
```

## How to create a writable stream

To create a writable stream we extend the base `Writable` object, and we implement its \_write() method.

First create a stream object:

```js
const Stream = require('stream')
const writableStream = new Stream.Writable()
```

then implement `_write`:

```js
writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString())
  next()
}
```

You can now pipe a
readable stream in:

```js
process.stdin.pipe(writableStream)
```

## How to get data from a readable stream

How do we read data from a readable stream? Using a writable stream:

```js
const Stream = require('stream')

const readableStream = new Stream.Readable({
  read() {}
})
const writableStream = new Stream.Writable()

writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString())
  next()
}

readableStream.pipe(writableStream)

readableStream.push('hi!')
readableStream.push('ho!')
```

You can also consume a readable stream directly, using the `readable` event:

```js
readableStream.on('readable', () => {
  console.log(readableStream.read())
})
```

## How to send data to a writable stream

Using the stream `write()` method:

```js
writableStream.write('hey!\n')
```

## Signaling a writable stream that you ended writing

Use the `end()` method:

```js
const Stream = require('stream')

const readableStream = new Stream.Readable({
  read() {}
})
const writableStream = new Stream.Writable()

writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString())
  next()
}

readableStream.pipe(writableStream)

readableStream.push('hi!')
readableStream.push('ho!')

writableStream.end()
```

## How to create a transform stream

We get the Transform stream from the [`stream` module](https://nodejs.org/api/stream.html), and we initialize it and implement the `transform._transform()` method.

First create a transform stream object:

```js
const { Transform } = require('stream')
const TransformStream = new Transform;
```

then implement `_transform`:

```js
TransformStream._transform = (chunk, encoding, callback) => {
  console.log(chunk.toString().toUpperCase());
  callback();
}
```

Pipe readable stream:

```js
process.stdin.pipe(TransformStream);
```
