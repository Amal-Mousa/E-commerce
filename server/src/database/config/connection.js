const { Pool } = require('pg');
require('dotenv').config();

const { DEV_DB_URL, NODE_ENV, DB_URL } = process.env;

const dbUrl = NODE_ENV === 'development' ? DEV_DB_URL : DB_URL;

const options = {
  connectionString: dbUrl,
  ssl: NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
};

const connection = new Pool(options);

module.exports = { connection };
