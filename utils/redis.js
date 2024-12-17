import { createClient } from 'redis';

class RedisClient {
  constructor() {
    this.client = createClient();

    this.client.on('error', (err) => {
      console.error(`Connection failed: ${err}`);
    })
  }
}

const redisClient = new RedisClient();
export default redisClient;