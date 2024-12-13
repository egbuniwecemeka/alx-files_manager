import redisClient from "../utils/redis";
import dbClient from "../utils/db";
const express = require('express');

class AppController {
    // Endpoint: GET /status
    static async getStatus(req, res) {
      const redisStatus = await redisClient.isAlive();
      const dBStatus = await dbClient.isAlive();
      res.status(200).json({ redis: redisStatus, db: dBStatus });
    }

    // Endpoint: GET /stats
    static async getStats(req, res) {
        const nbUsers = await dbClient.nbUsers();
        const nbFiles = await dbClient.nbFiles();
        res.status(200).json({users: nbUsers, files: nbFiles});
    }
}

module.exports = AppController;
