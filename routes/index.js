#!/usr/bin/node

const express = require('express');
const routes = express.Router();

// endpoints for /status API
routes.get('/status', (req, res) => {
    res.status(200).send('Route endpoint for /status')
});

// endpoints for /status API
routes.get('/stats', (req, res) => {
    res.status(200).json({stats: 'Route endpoint for /stats'});
});

module.exports = routes;