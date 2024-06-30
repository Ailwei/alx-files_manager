const { MongoClient } = require('mongodb');

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';

    const uri = `mongodb://${host}:${port}/${database}`;

    this.client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    this.usersCollection = null;
    this.filesCollection = null;

    this.client.connect((err) => {
      if (err) {
        console.error('Error connecting to MongoDB:', err.message);
      } else {
        console.log('Connected to MongoDB');
        this.usersCollection = this.client.db(database).collection('users');
        this.filesCollection = this.client.db(database).collection('files');
      }
    });
  }

  isAlive() {
    return !!this.client && this.client.isConnected();
  }

  async nbUsers() {
    if (!this.usersCollection) {
      throw new Error('Users collection not initialized');
    }
    const count = await this.usersCollection.countDocuments();
    return count;
  }

  async nbFiles() {
    if (!this.filesCollection) {
      throw new Error('Files collection not initialized');
    }
    const count = await this.filesCollection.countDocuments();
    return count;
  }
}

const dbClient = new DBClient();
module.exports = dbClient;
