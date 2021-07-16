* **Start Date:** 2021-06-28
* **PR:** (leave this empty)
* **Keywords:** node fs read file-descriptor
* **Summary:** Use case of file descriptor returned by fs.open() method in fs.read()

# Introduction to fs module read method.

Using `fs.read()` method we can read a file in a more controlled manner in comparision to `fs.readFile()` or `fs.readFileSync()`.

## Working with fs.read() method.

Since `fs.readFile()` and `fs.readFileSync()` reads the full content of the file in memory before returning the data or in other words before you access and start operating on the data that is read, the methods will make sure the entire file is read which in case of huge sized file will have a great performance impact in terms of memory usage and speed of execution of the program.

So, we can manage the above situation by using `fs.read()` method which gives us more control over reading the file. How? We will see it below.

`fs.read()` Asynchronously reads data from the file referenced by the supplied file descriptor returned by `fs.open()`. Since it's asynchronous in nature which will help not to block our call stack.

Syntax of `fs.read()` method is : `fs.read( fd, buffer, offset, length, position, callback )`.

Parameters description:

fd :: type - number : It is the file descriptor that is provided by `fs.open()` method.

buffer :: type - NodeJS.ArrayBufferView : It is the a memory allocation to a specific size ( usually in bytes ) which is used to store the bytes read from the file.

offset :: type - number : It is used to specify where the next I/O operation to be executed in the buffer. Whatever is read from a file is first written to the buffer, so using this parameter you can specify where to start writing in the buffer.

length :: type - number : It is used to specify number of bytes to be read from the file.

position :: type - number : It is used to specify from which byte to start reading in the file content.

callback: It is a function that receives err<NodeJS.ErrnoException>, bytesRead<number> and buffer<NodeJS.ArrayBufferView> to which the read bytes where written and stored.

Example ::

```js

const fs = require("fs");

const buffer = Buffer.alloc(1024);

fs.open("./myFile.txt", "r", (err, fd) => {

  if (err) {
    return console.log("LOG_ERROR :: ", err.message);
  }
  fs.read(fd, buffer, 0, 53, 0, (er, bytesRead, buffer) => {
    if (er) {
      return console.log("LOG_ERROR :: ", err.message);
    }
    console.log(" Bytes read :: ", bytesRead, " :: content :: ", buffer.toString());
  });
});

```
## Conclusion

At times when you have to handle really big files or you want to read a file based on some spefic conditions, you can just read in chunks or specific chunks of data from a file using `fs.read()` method.
