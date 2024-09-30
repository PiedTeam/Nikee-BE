import { MongoClient, Db } from 'mongodb';
import { config } from 'dotenv';
import { envConfig } from '../constants/config';

config(); // là để đọc file .env

const uri = envConfig.DB_URI;
class DatabaseService {
  private client: MongoClient;
  private db: Db;
  constructor() {
    this.client = new MongoClient(uri);
    this.db = this.client.db(envConfig.DB_NAME);
  }
  async connect() {
    try {
      await this.db.command({ ping: 1 }); //nếu thành công thì sẽ trả về 1
      console.log('Pinged your deployment. You successfully connected to MongoDB!');
    } catch (error) {
      console.log(error); //thông báo lỗi
      throw error; //throw error để quăng lỗi vê 1 chỗ xử lý lỗi cuối cùng
    }
  }
}

const databaseService = new DatabaseService();
export default databaseService;
