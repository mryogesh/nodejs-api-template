let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let methodOverride = require('method-override');
let compression = require('compression');
let config = require('./config');
let log = require('./logger/log');
let errorHandler = require('./errors/handler');
var routes = require('./routes');
let app = express();

app.use(compression());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(methodOverride());
app.use(errorHandler.logErrors);
app.use(errorHandler.clientError);
app.use(errorHandler.error);

let fs = require('fs');
let logDirectory = __dirname + '/log';

// Log all requests in a daily log file using morgan
if (fs.existsSync(logDirectory) === false) {
  fs.mkdir(logDirectory);
}
app.use(log.expressBunyan);

app.use('/', routes);

app.listen(config.express.port, function() {
  console.log('Example app listening on port ' + config.express.port);
});

module.exports = app;