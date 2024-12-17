#!/usr/bin/node

import { createClient } from 'redis';

class RedisClient {
  constructor() {
    // Initialize the redis client
    this.client = createClient();

    // Listen and log errors
    this.client.on('error', (err) => {
      console.error(`Redis connection error: ${err.message}`);
    });
  }

  isAlive() {
    return this.client.connected();
  }

  // asynchronous function for retrieving values of key
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

  // asynchronous function for setting key-value pairs after a certain duration
  async set(key, value, time) {
    return new Promise((resolve, reject) => {
      this.client.setex(key, time, value, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  // asynchronous function for deleting specified key-value pairs
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

const redisClient = new RedisClient();
export default redisClient;
