require('dotenv').config()

const knex = require('knex');
const configOptions = require('../knexfile');
module.exports = knex(configOptions[process.env.DB_ENV]);
