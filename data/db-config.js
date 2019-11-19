const knex = require('knex');

const configOptions = require('../knexfile');

//const configOptions = require('../knexfile').development;

// const configOptions = process.env.NODE_ENV === "production" ? require('../knexfile').production : require('../knexfile').development;

// const configOptions = process.env.NODE_ENV === "" || "development" ? require('../knexfile').development : require('../knexfile').production;

module.exports = knex(configOptions);

//done