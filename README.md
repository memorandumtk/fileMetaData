# File Metadata Microservice

This is the boilerplate for the File Metadata Microservice project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/file-metadata-microservice
  
- **I tried to store file information to mongoDB though, It's not completed.**
- **It was successed to submit file to mongoDB though, this error is appeared and coundn't solve this error, so I gave up in case.**  
```
C:\Users\memor\Documents\SelfStudy\freecodecamp\05.nodeJS\fileMetaData\node_modules\multer-gridfs-storage\lib\gridfs.js:306
                        id: f._id,
                              ^

TypeError: Cannot read properties of undefined (reading '_id')
    at GridFSBucketWriteStream.emitFile (C:\Users\memor\Documents\SelfStudy\freecodecamp\05.nodeJS\fileMetaData\node_modules\multer-gridfs-storage\lib\gridfs.js:306:31)
    at GridFSBucketWriteStream.emit (node:events:526:35)
    at finish (node:internal/streams/writable:748:10)
```