#!/usr/bin/node

const express = require('express');
const AppController = require('../controllers/AppController');
const routes = express.Router();

<<<<<<< HEAD
// endpoints for /status API
routes.get('/status', AppController.getStatus());

// endpoints for /status API
routes.get('/stats', AppController.getStats());
=======
// Define routes and link them to cntroller methods
routes.get('/status', AppController.getStatus);
routes.get('/stats', AppController.getStats);
>>>>>>> a904d5f5ea6b6a996504acb0caa6f01cfedec1ca

// Export routes/route
module.exports = routes;