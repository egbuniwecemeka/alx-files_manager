#!/usr/bin/node

const express = require('express');
const routes = express.Route()

// Contains all endpoints of API
routes.get('/', (req, res) => {
    res.send('Routes from /routes/index.js');
})

module.exports = routes;