const express = require('express')
const cors = require('cors');
const helmet = require('helmet');

const router = require('./data/router/router.js')
const authenticate = require('../Backend/auth/restricted-middleware');
const authRouter = require('./auth/auth-router.js');
//import lol from '../Backend/auth/restricted-middleware'

const server= express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/', router);
server.use('/authapi/', authenticate, router);

module.exports = server;

//done