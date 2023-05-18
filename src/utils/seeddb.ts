import fs from 'fs';
import { getClient } from './database';

async function runSQLFile(filePath: fs.PathOrFileDescriptor) {
  const client = await getClient();

  try {
    console.log('Executing SQL file:', filePath);
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

runSQLFile('src//utils//insertdata.sql');
// await runSQLFile('./querydemonstration.sql');
