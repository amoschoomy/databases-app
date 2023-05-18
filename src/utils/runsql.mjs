import fs from 'fs';
import { getClient } from './database';

async function runSQLFile(filePath) {
  const client = await getClient();

  try {
    const sql = fs.readFileSync(filePath, 'utf8');

    // Run the SQL commands
    await client.query(sql);

    console.log('SQL file executed successfully!');
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error executing the SQL file:', error);
  } finally {
    client.release();
  }
}

await runSQLFile('./insertdata.sql');
await runSQLFile('./querydemonstration.sql');
