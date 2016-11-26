const express = require('express');
const app = express();
const path = require('path'),
    rootPath = path.normalize(__dirname);

const port = process.env.PORT || 8080;

app.use(express.static(rootPath));

// Map from the ES2015 file to the compiled ES5 file
app.get('/app/js/:file', (req, res) => {
   res.sendFile(path.join(__dirname + '/server/dist/js/' + req.params.file)); 
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port);