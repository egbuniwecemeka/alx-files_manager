#!/usr/bin/node

import { createClient } from 'redis';


class RedisClient {
    constructor() {
        // Initialize the redis client
        this.client = createClient();

        // Connect to redis server
        // this.client.connect()
        this.client.on('connect', () => {
            console.log('Connection successful');
        })
        // Listen and log errors
        this.client.on('error', (err) => {
            console.error(`Connection error: ${err}`);
        });


        
    }

    isAlive() {
        console.log(this.client.isOpen ? true : false);
        return this.client.isOpen ? true : false;
    }

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
          const res = await this.client.set(key, String(value), {EX: time});
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
    }
}

export default new RedisClient();