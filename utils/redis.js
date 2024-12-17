import { createClient } from 'redis';
import { promisify } from 'util';

class RedisClient {
  constructor(host = '127.0.0.1', port = 6379) {
    this.client = createClient({url: `redis://${host}:${port}`});
    this.isClientConnected = false;

    this.client.on('error', (err) => {
      console.error(`Connection failed: ${err}`);
    });

    this.client.on('ready', () => {
      this.isClientConnected = true;
    })
  
    this.asyncGet = promisify(this.client.get).bind(this.client);
    this.asyncSet = promisify(this.client.setex).bind(this.client);
    this.asyncDel = promisify(this.client.del).bind(this.client);

    this.client.connect().catch((err) => {
      console.error(`Connection to redis failed: ${err.message}`);
    })
  }

  isAlive() {
    return this.client.isOpen;
  }

  async get(key) {
    try{
      return await this.asyncGet(key);
    } catch (err) {
      console.error('Failed to get key ${key}:', err.message);
      return null;
    }
  }

  async set(key, value, duration) {
    try {
      await this.asyncSet(key, duration, value);
    } catch (err) {
      console.error('Failed to set key ${key}:', err.message);
    }
  }
}

const redisClient = new RedisClient();
export default redisClient;
