const express = require('express')

const router = require('./data/router/router.js')

const server= express();

server.use(express.json());

server.use('/api/', router);

module.exports = server

//done