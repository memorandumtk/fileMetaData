const express = require("express");
const multer = require('multer')
const router = express.Router();
// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
// const mongoDB = process.env.MONGODB_URI;
const url = process.env.MONGODB_URI;
const { GridFsStorage } = require('multer-gridfs-storage');
const connection = mongoose.connect('mongodb://kosuke:r19jgG8Pntic3USi@cluster0.h7pof44.mongodb.net/fileMetaData');


// Create a storage object with a given configuration
// const storage = new GridFsStorage({ url });
const storage = new GridFsStorage({ db: connection });

// Set multer storage engine to the newly created object
const upload = multer({ storage });

router.post('/', upload.single('upfile2'), (req, res, next) => {
    console.log("this is req.file");
    console.log(req.file);
    res.json({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size
    })
});


const getData = (req, res) => {
    console.log('this is getData')

}
router.get('/', getData)

module.exports = router;