const dbClient = require('../utils/db').dbClient;
const redisClient = require('../utils/redis');

const AppController = {
  getStatus: (req, res) => {
    const redisAlive = redisClient.isAlive();
    const dbAlive = dbClient.isAlive();

    if (redisAlive && dbAlive) {
      res.status(200).json({ redis: true, db: true });
    } else {
      res.status(500).json({ redis: redisAlive, db: dbAlive });
    }
  },

  getStats: async (req, res) => {
    try {
      const numUsers = await dbClient.nbUsers();
      const numFiles = await dbClient.nbFiles();
      res.status(200).json({ users: numUsers, files: numFiles });
    } catch (error) {
      console.error('Error fetching stats:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = AppController;
