---
title: Node.js Buffers
description: 'Learn what Node.js buffers are, what they are used for, how to use them'
authors: flaviocopes, MylesBorins, fhemberger, LaRuaNa, ahmadawais, 19shubham11
section: Getting Started
---

## What is a buffer?

A buffer is an area of memory. JavaScript developers are not familiar with this concept, much less than C, C++ or Go developers (or any programmer that uses a system programming language), which interact with memory every day.

It represents a fixed-size chunk of memory (can't be resized) allocated outside of the V8 JavaScript engine.

You can think of a buffer like an array of integers, which each represent a byte of data.

It is implemented by the Node.js [Buffer class](https://nodejs.org/api/buffer.html).

## Why do we need a buffer?

Buffers were introduced to help developers deal with binary data, in an ecosystem that traditionally only dealt with strings rather than binaries.

Buffers are deeply linked with streams. When a stream processor receives data faster than it can digest, it puts the data in a buffer.

A simple visualization of a buffer is when you are watching a YouTube video and the red line goes beyond your visualization point: you are downloading data faster than you're viewing it, and your browser buffers it.

## How to create a buffer

A buffer is created using the [`Buffer.from()`](https://nodejs.org/api/buffer.html#buffer_buffer_from_buffer_alloc_and_buffer_allocunsafe), [`Buffer.alloc()`](https://nodejs.org/api/buffer.html#buffer_class_method_buffer_alloc_size_fill_encoding), and [`Buffer.allocUnsafe()`](https://nodejs.org/api/buffer.html#buffer_class_method_buffer_allocunsafe_size) methods.

```js
const buf = Buffer.from('Hey!')
```
* [`Buffer.from(array)`](https://nodejs.org/api/buffer.html#buffer_class_method_buffer_from_array)
* [`Buffer.from(arrayBuffer[, byteOffset[, length]])`](https://nodejs.org/api/buffer.html#buffer_class_method_buffer_from_arraybuffer_byteoffset_length)
* [`Buffer.from(buffer)`](https://nodejs.org/api/buffer.html#buffer_class_method_buffer_from_buffer)
* [`Buffer.from(string[, encoding])`](https://nodejs.org/api/buffer.html#buffer_class_method_buffer_from_string_encoding)

You can also just initialize the buffer passing the size. This creates a 1KB buffer:

```js
const buf = Buffer.alloc(1024)
//or
const buf = Buffer.allocUnsafe(1024)
```

While both `alloc` and `allocUnsafe` allocate a `Buffer` of the specified size in bytes, the `Buffer` created by `alloc` will be _initialized_ with zeroes and the one created by `allocUnsafe` will be _uninitialized_. This means that while `allocUnsafe` would be quite fast in comparison to `alloc`, the allocated segment of memory may contain old data which could potentially be sensitive.

Older data, if present in the memory, can be accessed or leaked when the `Buffer` memory is read. This is what really makes `allocUnsafe` unsafe and extra care must be taken while using it.

## Using a buffer

### Access the content of a buffer

A buffer, being an array of bytes, can be accessed like an array:

```js
const buf = Buffer.from('Hey!')
console.log(buf[0]) //72
console.log(buf[1]) //101
console.log(buf[2]) //121
```

Those numbers are the Unicode Code that identifies the character in the buffer position (H => 72, e => 101, y => 121)

You can print the full content of the buffer using the `toString()` method:

```js
console.log(buf.toString())
```

> Notice that if you initialize a buffer with a number that sets its size, you'll get access to pre-initialized memory that will contain random data, not an empty buffer!

### Get the length of a buffer

Use the `length` property:

```js
const buf = Buffer.from('Hey!')
console.log(buf.length)
```

### Iterate over the contents of a buffer

```js
const buf = Buffer.from('Hey!')
for (const item of buf) {
  console.log(item) //72 101 121 33
}
```

### Changing the content of a buffer

You can write to a buffer a whole string of data by using the `write()` method:

```js
const buf = Buffer.alloc(4)
buf.write('Hey!')
```

Just like you can access a buffer with an array syntax, you can also set the contents of the buffer in the same way:

```js
const buf = Buffer.from('Hey!')
buf[1] = 111 //o
console.log(buf.toString()) //Hoy!
```

### Copy a buffer

Copying a buffer is possible using the `copy()` method:

```js
const buf = Buffer.from('Hey!')
let bufcopy = Buffer.alloc(4) //allocate 4 bytes
buf.copy(bufcopy)
```

By default you copy the whole buffer. 3 more parameters let you define the target buffer starting position to copy to, the source buffer starting position to copy from, and the new buffer length:

```js
const buf = Buffer.from('Hey!')
let bufcopy = Buffer.alloc(2) //allocate 2 bytes
buf.copy(bufcopy, 0, 0, 2)
bufcopy.toString() //'He'
```

### Slice a buffer

If you want to create a partial visualization of a buffer, you can create a slice. A slice is not a copy: the original buffer is still the source of truth. If that changes, your slice changes.

Use the `slice()` method to create it. The first parameter is the starting position, and you can specify an optional second parameter with the end position:

```js
const buf = Buffer.from('Hey!')
buf.slice(0).toString() //Hey!
const slice = buf.slice(0, 2)
console.log(slice.toString()) //He
buf[1] = 111 //o
console.log(slice.toString()) //Ho
```
