#!/usr/bin/node
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Load routes from imported path.
app.get('/', (req, res) => {
    res.send('Hello world')
});

// start server and Listen on specified port
app.listen(port, (err) => {
    if (err) {
        console.error(`Error starting server: ${err}`);
    }
    console.log(`Server is running at port: ${port}`);
});