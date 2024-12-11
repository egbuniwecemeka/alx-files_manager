#!/usr/bin/node
import dotenv from 'dotenv';
dotenv.config();

const express = require('express');
const indexRoutes = require('./routes/index')
const app = express();
const port = process.env.EXP_PORT || 5000;

// Load routes from imported path.
app.use('/routes', indexRoutes);

// start server and Listen on port
app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})