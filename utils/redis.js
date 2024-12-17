import { createClient } from 'redis';

class RedisClient {
  constructor(host = '127.0.0.1', port = 6379) {
    this.client = createClient({host, port});

    this.client.on('error', (err) => {
      console.error(`Connection failed: ${err}`);
    })
  }

  isAlive() {
    return this.client.connection_id;
  }
}

const redisClient = new RedisClient();
export default redisClient;