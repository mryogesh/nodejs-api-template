let config = module.exports;

config.md5 = require('md5');

config.express = {
  port: process.env.EXPRESS_PORT || 8080,
  ip: process.env.IP
};

config.pg = {
  host: process.env.PG_HOST || '127.0.0.1',
  database: process.env.PG_DATABASE || 'local',
  username: process.env.PG_USER || 'user',
  port: process.env.PG_PORT || 5432,
  password: process.env.PG_PASSWORD || null,
  max: process.env.PG_CONNECTION_LIMIT || 5
};


config.SENDGRID_APIKEY = process.env.SENDGRID_APIKEY;