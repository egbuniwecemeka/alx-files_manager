#!/usr/bin/node

import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config();


class RedisClient {
    constructor() {
        // Initialize the redis client
        const host = process.env.REDIS_HOST;
        const port = process.env.REDIS_PORT;
        this.client = createClient({url: `redis://${host}:${port}`});
        console.log(`env vars ${host}:${port}`);

        // Listen and log errors
        this.client.on('error', (err) => {
            console.error(`Redis connection error: ${err.message}`);
        });
    }
    

    isAlive() {
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