import redisClient from './utils/redis';

(async () => {
  console.log(redisClient.isAlive());
  console.log(await RedisClient.get('myKey'));
  await RedisClient.set('myKey', 12, 5);
  console.log(await RedisClient.get('myKey'));

  setTimeout(async () => {
    console.log(await RedisClient.get('myKey'));
  }, 1000*10)
})();