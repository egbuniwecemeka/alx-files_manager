#!/usr/bin/node

const express = require('express');
const AppController = require('../controllers/AppController');
const routes = express.Router();

// Define routes and link them to cntroller methods
routes.get('/status', AppController.getStatus);
routes.get('/stats', AppController.getStats);

// Export routes/route
module.exports = routes;

