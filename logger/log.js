let bunyan = require('bunyan');
let expressBunyan = require('express-bunyan-logger');
const log = module.exports;

log.expressBunyan = expressBunyan({
  name: process.env.LOG_NAME || 'nodeapi',
  streams: [
    {
      type: 'rotating-file',
      path: process.env.LOG_PATH || 'log/nodeapi.log',
      period: process.env.LOG_PERIOD || '1d',   // daily rotation
      count: process.env.LOG_COUNT || 3  // keep 3 back copies
    }]
});

log.logger = bunyan.createLogger({
  name: process.env.LOG_NAME || 'nodeapi',
  streams: [
    {
      type: 'rotating-file',
      path: process.env.LOG_PATH || 'log/nodeapi.log',
      period: process.env.LOG_PERIOD || '1d',   // daily rotation
      count: process.env.LOG_COUNT || 3  // keep 3 back copies
    }]
});