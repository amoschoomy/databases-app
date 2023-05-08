import { Pool, PoolClient } from 'pg';
import config from '../dbconfig';

const db = new Pool({
  host: config.database.host,
  port: config.database.port,
  user: config.database.user,
  password: config.database.password,
  database: config.database.database
});

export function getClient(): Promise<PoolClient> {
  return new Promise((resolve, reject) => {
    db.connect((err, client) => {
      if (err) {
        reject(err);
      } else {
        resolve(client);
      }
    });
  });
}