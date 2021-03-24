---
title: 'The Node.js path module'
description: 'The path module of Node.js provides useful functions to interact with file paths'
authors: flaviocopes, MylesBorins, fhemberger, LaRuaNa, amiller-gh, ahmadawais, 19shubham11
section: Getting Started
---

The `path` module provides a lot of very useful functionality to access and interact with the file system.

There is no need to install it. Being part of the Node.js core, it can be used by simply requiring it:

```js
const path = require('path')
```

This module provides `path.sep` which provides the path segment separator (`\` on Windows, and `/` on Linux / macOS), and `path.delimiter` which provides the path delimiter (`;` on Windows, and `:` on Linux / macOS).

These are the `path` methods:

### `path.basename()`

Return the last portion of a path. A second parameter can filter out the file extension:

```js
require('path').basename('/test/something') //something
require('path').basename('/test/something.txt') //something.txt
require('path').basename('/test/something.txt', '.txt') //something
```

### `path.dirname()`

Return the directory part of a path:

```js
require('path').dirname('/test/something') // /test
require('path').dirname('/test/something/file.txt') // /test/something
```

### `path.extname()`

Return the extension part of a path

```js
require('path').extname('/test/something') // ''
require('path').extname('/test/something/file.txt') // '.txt'
```

### `path.format()`

Returns a path string from an object, This is the opposite of `path.parse`<br>
`path.format` accepts an object as argument with the follwing keys:
* `root`: the root
* `dir`: the folder path starting from the root
* `base`: the file name + extension
* `name`: the file name
* `ext`: the file extension

`root` is ignored if `dir` is provided<br>
`ext` and `name` are ignored if `base` exists

```js
// POSIX
require('path').format({ dir: '/Users/joe', base: 'test.txt' }) //  '/Users/joe/test.txt'

require('path').format({ root: '/Users/joe', name: 'test', ext: 'txt' }) //  '/Users/joe/test.txt'

//WINODWS
require('path').format({ dir: 'C:\\Users\\joe', base: 'test.txt' }) //  'C:\\Users\\joe\\test.txt'
```

### `path.isAbsolute()`

Returns true if it's an absolute path

```js
require('path').isAbsolute('/test/something') // true
require('path').isAbsolute('./test/something') // false
```

### `path.join()`

Joins two or more parts of a path:

```js
const name = 'joe'
require('path').join('/', 'users', name, 'notes.txt') //'/users/joe/notes.txt'
```

### `path.normalize()`

Tries to calculate the actual path when it contains relative specifiers like `.` or `..`, or double slashes:

```js
require('path').normalize('/users/joe/..//test.txt') //'/users/test.txt'
```

### `path.parse()`

Parses a path to an object with the segments that compose it:

* `root`: the root
* `dir`: the folder path starting from the root
* `base`: the file name + extension
* `name`: the file name
* `ext`: the file extension

Example:

```js
require('path').parse('/users/test.txt')
```

results in

```js
{
  root: '/',
  dir: '/users',
  base: 'test.txt',
  ext: '.txt',
  name: 'test'
}
```

### `path.relative()`

Accepts 2 paths as arguments. Returns the relative path from the first path to the second, based on the current working directory.

Example:

```js
require('path').relative('/Users/joe', '/Users/joe/test.txt') //'test.txt'
require('path').relative('/Users/joe', '/Users/joe/something/test.txt') //'something/test.txt'
```

### `path.resolve()`

You can get the absolute path calculation of a relative path using `path.resolve()`:

```js
path.resolve('joe.txt') //'/Users/joe/joe.txt' if run from my home folder
```

By specifying a second parameter, `resolve` will use the first as a base for the second:

```js
path.resolve('tmp', 'joe.txt') //'/Users/joe/tmp/joe.txt' if run from my home folder
```

If the first parameter starts with a slash, that means it's an absolute path:

```js
path.resolve('/etc', 'joe.txt') //'/etc/joe.txt'
```
