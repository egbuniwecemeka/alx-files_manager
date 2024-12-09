import RedisClient from './utils/redis';

(async () => {
  console.log(RedisClient.isAlive());
/*   console.log(await RedisClient.get('myKey'));
  await RedisClient.set('myKey', 12, 5);
  console.log(await RedisClient.get('myKey'));

  setTimeout(async () => {
    console.log(await RedisClient.get('myKey'));
  }, 1000*10) */
})();