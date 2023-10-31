var express = require('express');
var cors = require('cors');
require('dotenv').config()
const bodyParser = require('body-parser')
const app = express();

// multer
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));


app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

const uploadFiles = (req, res) => {
    console.log("this is req.file");
    console.log(req.file);
    res.json({
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size
    })
}
app.post("/multipart/form-data", upload.single('upfile'), uploadFiles);

// Storing data to mongo DB try
const sendToMongo = require('./sendToMongo');
app.use("/multipart/form-data/mongo", sendToMongo);

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
