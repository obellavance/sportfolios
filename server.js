const express = require('express');
const app = express();
const path = require('path'),
    rootPath = path.normalize(__dirname),
    publicPath = path.normalize(__dirname + '/public');

const port = process.env.PORT || 8080;

app.use(express.static(publicPath));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port);