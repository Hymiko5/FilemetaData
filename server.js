const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
var app = express();

app.use(cors(), bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(process.cwd() + '/public'));


app.post('/api/fileanalyse',  upload.single('upfile'),(req, res) => {
  const upfile = req.file;
  if(upfile)
  {
    return res.json({
        name: upfile.originalname,
        type: upfile.mimetype,
        size: upfile.size
    });
  }
});



app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
