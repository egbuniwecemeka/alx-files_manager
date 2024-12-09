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

    /* s */
}

export default new RedisClient();