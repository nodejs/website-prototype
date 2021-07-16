* **Start Date:** 2021-06-28
* **PR:** (leave this empty)
* **Keywords:** node fs write file-descriptor
* **Summary:** Use case of file descriptor returned by fs.open() method in fs.write()

# Introduction to fs module write method.

Using `fs.write()` method we can write a file in a more controlled manner in comparision to `fs.writeFile()` or `fs.writeFileSync()`.

## Working with fs.write() method.

Since `fs.writeFile()` and `fs.writeFileSync()` writes the entire content of data in memory before returning, the methods will make sure the entire data is written in a go which in case of huge sized data will have a great performance impact in terms of memory usage and speed of execution of the program.

So, we can manage the above situation by using `fs.write()` method which gives us more control over writing the file. How? We will see it below.

`fs.write()` Asynchronously writes data to the file referenced by the supplied file descriptor returned by `fs.open()`. Since it's asynchronous in nature which will help not to block our call stack.

Syntax of `fs.write()` method is :

  Using buffer ::
  `fs.write( fd, buffer, offset, length, position, callback )`.

  Using string ::
  `fs.write(fd, string, position, encoding, callback)`
Parameters description:

fd :: type - number : It is the file descriptor that is provided by `fs.open()` method.

buffer :: type - NodeJS.ArrayBufferView : It is the a memory allocation to a specific size ( usually in bytes ) which is used to store the bytes write from the file.

offset :: type - number : It is used to specify where the next I/O operation to be executed in the buffer. Whatever is write from a file is first written to the buffer, so using this parameter you can specify where to start writing in the buffer.

length :: type - number : It is used to specify number of bytes to be write from the file.

position :: type - number : It is used to specify from which byte to start writeing in the file content.

string: Writes the string to the file specified by fd.

encoding: The default encoding value is UTF-8.

callback: It is a function that receives err<NodeJS.ErrnoException> and byteswritten<number>.

Example ::

```js

const fs = require("fs");

const buffer = Buffer.alloc(1024);

fs.open("./myFile.txt", "r", (err, fdr) => {
  if (err) {
    return console.log("LOG_ERROR :: ", err.message);
  }
  fs.read(fdr, buffer, 0, 50, 0, (er, bytesRead, buffer) => {
    if (er) {
      return console.log("LOG_ERROR :: ", err.message);
    }
    fs.open("./newFile.txt", "w", (err, fdw) => {
      if (err) {
        return console.log("LOG_ERROR :: ", err.message);
      }
      fs.write(fdw, buffer, 0, bytesRead, (err, writtenBytes) => {
        if (err) {
          return console.log("LOG_ERROR :: ", err.message);
        }
        console.log(" Written bytes :: ", writtenBytes);
      });
    });
  });
});

```
## Conclusion

At times when you have to handle really big files or you want to write a file based on some spefic conditions, you can just write in chunks or specific chunks of data from a file using `fs.write()` method.
