import { envConfig } from './constants/config';
import express, { Request, Response } from 'express';
import databaseService from './database/service';

const app = express();
databaseService.connect();
app.get('/', (_request: Request, response: Response) => {
  response.status(200).send('Hello World');
});

const PORT = envConfig.PORT;

app
  .listen(PORT, () => {
    console.log('Server running at PORT: ', PORT);
  })
  .on('error', (error) => {
    // gracefully handle error
    throw new Error(error.message);
  });
