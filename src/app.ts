import express from 'express';
import userRouter from './routes/user.routes';
import summaryRouter from './routes/summary.routes';
const fileUpload = require('express-fileupload');
import { getClient } from './utils/database';
import { PoolClient } from 'pg';
import cors from 'cors';

export let client: PoolClient;

// Configure CORS
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
};
async function startServer() {
  client = await getClient();
  const app = express();
  app.use(cors(corsOptions));
  app.use(fileUpload());

  const port = process.env.PORT || 3000;

  app.use(express.json());
  app.use(userRouter);
  app.use(summaryRouter);

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

startServer();
