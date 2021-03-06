const express = require('express')
const cors = require('cors');
const helmet = require('helmet');

const router = require('./data/router/router.js')
const authRoutes = require('./data/router/auth-routes.js')
const authenticate = require('./auth/restricted-middleware');
const authRouter = require('./auth/auth-router.js');
//import lol from '../Backend/auth/restricted-middleware'

const server= express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/', router);
server.use('/authapi/', authenticate, authRoutes);

module.exports = server;

//done