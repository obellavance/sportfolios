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
app.get('/app/js/*', (req, res) => {
  res.sendFile(`${__dirname}/server/dist/${conf.version}/js/${req.params[0]}`); 
});

app.get('/app/views/*', (req, res) => {
  console.log('looking for', req.params[0]);
  res.sendFile(`${__dirname}/server/dist/${conf.version}/views/${req.params[0]}`);
});

app.get('/app/stylesheets/*', (req, res) => {
  res.sendFile(`${__dirname}/server/dist/${conf.version}/stylesheets/${req.params[0]}`);
});

app.get('/app/*', (req, res) => {
  console.warn('Please define route');
  res.sendFile(`${__dirname}/server/dist/${conf.version}/${req.params[0]}`);
});

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/server/dist/${conf.version}/views/index.html`);
});

app.get('*', (req, res) => {
  throw Error(`Undefined route: ${req.params[0]}`);
});

app.listen(port);