// utils/redis.js

const redis = require('redis');

class RedisClient {
  constructor() {
    this.client = redis.createClient();

    // Handling error event
    this.client.on('error', (err) => {
      console.error('Redis client error:', err);
    });
  }

  // Method to check if the connection to Redis is alive
  isAlive() {
    return this.client.connected;
  }

  // Method to get a value from Redis by key
  async get(key) {
    return new Promise((resolve, reject) => {
      this.client.get(key, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  // Method to set a value in Redis with expiration time
  async set(key, value, duration) {
    return new Promise((resolve, reject) => {
      this.client.setex(key, duration, value, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  // Method to delete a key-value pair from Redis
  async del(key) {
    return new Promise((resolve, reject) => {
      this.client.del(key, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}

// Exporting an instance of RedisClient
const redisClient = new RedisClient();
module.exports = redisClient;
