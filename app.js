let express = require('express');
let bodyParser = require('body-parser');
let compression = require('compression');
let config = require('./config');
let app = express();

app.use(compression());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let fs = require('fs');
let logDirectory = __dirname + '/log';

// Log all requests in a daily log file using morgan
if (fs.existsSync(logDirectory) === false) {
  fs.mkdirSync(logDirectory);
}
app.use(require('./logger/log').expressBunyan);
app.use('/', require('./routes'));

app.use((req, res, next) => {
  res.send({
    status: 404,
    message: 'Not Found'
  });
});

app.use((err, req, res, next) => {
  res.status(500).send({'error': err.stack});
});

app.listen(config.express.port, function() {
  console.log('Example app listening on port ' + config.express.port);
});

module.exports = app;