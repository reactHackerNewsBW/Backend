const knex = require('knex');

const configOptions = require('../knexfile');

module.exports = knex(configOptions);

//done