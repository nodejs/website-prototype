---
title: 'Working with folders in Node.js'
description: 'How to interact with folders using Node.js'
authors: flaviocopes, MylesBorins, fhemberger, liangpeili, LaRuaNa, ahmadawais
section: Getting Started
---

The Node.js `fs` core module provides many handy methods you can use to work with folders.

## Check if a folder exists

Use `fs.access()` to check if the folder exists and Node.js can access it with its permissions.

## Create a new folder

Use `fs.mkdir()` or `fs.mkdirSync()` to create a new folder.

```js
const fs = require('fs')

const folderName = '/Users/joe/test'

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
  }
} catch (err) {
  console.error(err)
}
```

## Read the content of a directory

Use `fs.readdir()` or `fs.readdirSync()` to read the contents of a directory.

This piece of code reads the content of a folder, both files and subfolders, and returns their relative path:

```js
const fs = require('fs')
const path = require('path')

const folderPath = '/Users/joe'

fs.readdirSync(folderPath)
```

You can get the full path:

```js
fs.readdirSync(folderPath).map(fileName => {
  return path.join(folderPath, fileName)
})
```

You can also filter the results to only return the files, and exclude the folders:

```js
const isFile = fileName => {
  return fs.lstatSync(fileName).isFile()
}

fs.readdirSync(folderPath).map(fileName => {
  return path.join(folderPath, fileName)
})
.filter(isFile)
```

## Rename a folder

Use `fs.rename()` or `fs.renameSync()` to rename folder. The first parameter is the current path, the second the new path:

```js
const fs = require('fs')

fs.rename('/Users/joe', '/Users/roger', err => {
  if (err) {
    console.error(err)
    return
  }
  //done
})
```

`fs.renameSync()` is the synchronous version:

```js
const fs = require('fs')

try {
  fs.renameSync('/Users/joe', '/Users/roger')
} catch (err) {
  console.error(err)
}
```

## Remove a folder

Use `fs.rmdir()` or `fs.rmdirSync()` to remove a folder.

Removing a folder that has content can be more complicated than you need.

In this case it's best to install the [`fs-extra`](https://www.npmjs.com/package/fs-extra) module, which is very popular and well maintained. It's a drop-in replacement of the `fs` module, which provides more features on top of it.

In this case the `remove()` method is what you want.

Install it using

```bash
npm install fs-extra
```

and use it like this:

```js
const fs = require('fs-extra')

const folder = '/Users/joe'

fs.remove(folder, err => {
  console.error(err)
})
```

It can also be used with promises:

```js
fs.remove(folder)
  .then(() => {
    //done
  })
  .catch(err => {
    console.error(err)
  })
```

or with async/await:

```js
async function removeFolder(folder) {
  try {
    await fs.remove(folder)
    //done
  } catch (err) {
    console.error(err)
  }
}

const folder = '/Users/joe'
removeFolder(folder)
```
