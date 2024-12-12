#!/usr/bin/node

const express = require('express');
const AppController = require('../controllers/AppController');
const routes = express.Router();

// endpoints for /status API
routes.get('/status', AppController.getStatus());

// endpoints for /status API
routes.get('/stats', AppController.getStats());

// Export routes/route
module.exports = routes;