#!/usr/bin/node

import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config();


class RedisClient {
    constructor() {
        // Initialize the redis client
        this.client = createClient();

        // Listen and log errors
        this.client.on('error', (err) => {
            console.error(`Redis connection error: ${err.message}`);
        });

        // Ready listener to confirm connection stats
        this.client.on('ready', () => {
            console.log('Redis is ready and connected');
        })
    }
    

    isAlive() {
        console.log('Checking if Redis client is alive:', this.client.connected);
      return this.client.connected; 
    }
/*
    // asynchronous function for retrieving values of key
    async get(key) {
        try {
          const res = await this.client.get(key);
          console.log(res);
          return res;
        } catch (error) {
          console.error(`Error while fetching ${key}: ${err}`);
          return null;
    }}

    // asynchronous function for seeting key-value pairs after a certain duration
    async set(key, value, time) {
        try {
          const res = await this.client.set(key, String(value), {'EX': time});
          console.log(res);
          return res;
        } catch (err) {
            console.log(`Error while setting ${key}: ${value} with expiration ${time}`);
        }
    }

    // asynchronous function for deleting specified key-value pairs
    async del(key) {
        try {
          const res = await this.client.del(key);
          return res;
        } catch (err) {
            console.log(`Error while trying to delete ${key} with ${err} error`);
        }
    } */
}

const redisClient = new RedisClient()
export default redisClient;