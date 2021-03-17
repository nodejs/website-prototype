---
title: 'The Node.js os module'
description: 'The os module of Node.js provides useful functions to interact with underlying system'
authors: flaviocopes, potch, MylesBorins, fhemberger, LaRuaNa, amiller-gh, ahmadawais
section: Getting Started
---

This module provides many functions that you can use to retrieve information from the underlying operating system and the computer the program runs on, and interact with it.

```js
const os = require('os')
```

There are a few useful properties that tell us some key things related to handling files:

`os.EOL` gives the line delimiter sequence. It's `\n` on Linux and macOS, and `\r\n` on Windows.

`os.constants.signals` tells us all the constants related to handling process signals, like SIGHUP, SIGKILL and so on.

`os.constants.errno` sets the constants for error reporting, like EADDRINUSE, EOVERFLOW and more.

You can read them all on <https://nodejs.org/api/os.html#os_signal_constants>.

Let's now see the main methods that `os` provides:

## `os.arch()`

Return the string that identifies the underlying architecture, like `arm`, `x64`, `arm64`.

## `os.cpus()`

Return information on the CPUs available on your system.

Example:

```js
[
  {
    model: 'Intel(R) Core(TM)2 Duo CPU     P8600  @ 2.40GHz',
    speed: 2400,
    times: {
      user: 281685380,
      nice: 0,
      sys: 187986530,
      idle: 685833750,
      irq: 0
    }
  },
  {
    model: 'Intel(R) Core(TM)2 Duo CPU     P8600  @ 2.40GHz',
    speed: 2400,
    times: {
      user: 282348700,
      nice: 0,
      sys: 161800480,
      idle: 703509470,
      irq: 0
    }
  }
]
```

## `os.endianness()`

Return `BE` or `LE` depending if Node.js was compiled with [Big Endian or Little Endian](https://en.wikipedia.org/wiki/Endianness).

## `os.freemem()`

Return the number of bytes that represent the free memory in the system.

## `os.homedir()`

Return the path to the home directory of the current user.

Example:

```js
'/Users/joe'
```

## `os.hostname()`

Return the host name.

## `os.loadavg()`

Return the calculation made by the operating system on the load average.

It only returns a meaningful value on Linux and macOS.

Example:

```js
[3.68798828125, 4.00244140625, 11.1181640625]
```

## `os.networkInterfaces()`

Returns the details of the network interfaces available on your system.

Example:

```js
{ lo0:
   [ { address: '127.0.0.1',
       netmask: '255.0.0.0',
       family: 'IPv4',
       mac: 'fe:82:00:00:00:00',
       internal: true },
     { address: '::1',
       netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
       family: 'IPv6',
       mac: 'fe:82:00:00:00:00',
       scopeid: 0,
       internal: true },
     { address: 'fe80::1',
       netmask: 'ffff:ffff:ffff:ffff::',
       family: 'IPv6',
       mac: 'fe:82:00:00:00:00',
       scopeid: 1,
       internal: true } ],
  en1:
   [ { address: 'fe82::9b:8282:d7e6:496e',
       netmask: 'ffff:ffff:ffff:ffff::',
       family: 'IPv6',
       mac: '06:00:00:02:0e:00',
       scopeid: 5,
       internal: false },
     { address: '192.168.1.38',
       netmask: '255.255.255.0',
       family: 'IPv4',
       mac: '06:00:00:02:0e:00',
       internal: false } ],
  utun0:
   [ { address: 'fe80::2513:72bc:f405:61d0',
       netmask: 'ffff:ffff:ffff:ffff::',
       family: 'IPv6',
       mac: 'fe:80:00:20:00:00',
       scopeid: 8,
       internal: false } ] }
```

## `os.platform()`

Return the platform that Node.js was compiled for:

* `darwin`
* `freebsd`
* `linux`
* `openbsd`
* `win32`
* ...more

## `os.release()`

Returns a string that identifies the operating system release number

## `os.tmpdir()`

Returns the path to the assigned temp folder.

## `os.totalmem()`

Returns the number of bytes that represent the total memory available in the system.

## `os.type()`

Identifies the operating system:

* `Linux`
* `Darwin` on macOS
* `Windows_NT` on Windows

## `os.uptime()`

Returns the number of seconds the computer has been running since it was last rebooted.

## `os.userInfo()`

Returns an object that contains the current `username`, `uid`, `gid`, `shell`, and `homedir`
