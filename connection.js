const config = require('config');
const {Pool} = require('pg');

let connection = module.exports;

const pool = config.pg;
connection.pool = new Pool(pool);

