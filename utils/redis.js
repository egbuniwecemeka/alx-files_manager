import { createClient } from 'redis';

class RedisClient {
  constructor() {
    this.client = createClient();

    this.client.on('error', (err) => {
      console.error(`Connection failed: ${err}`);
    })
  }

  isAlive() {
    return this.client.connected;
  }
}

const redisClient = new RedisClient();
export default redisClient;