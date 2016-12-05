/* Node modules */
const express = require('express');
const app = express();
const path = require('path'),
  rootPath = path.normalize(__dirname);

/* Project imports */
const conf = require('./conf.js');

const port = process.env.PORT || conf.port;

app.use(express.static(rootPath));

// Map from the ES2015 file to the compiled ES5 file
app.get('/app/js/:file', (req, res) => {
  console.log(req.params.file);
  res.sendFile(path.join(__dirname + '/server/dist/js/' + req.params.file)); 
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port);