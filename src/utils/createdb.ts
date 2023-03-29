import pool from './database';

// IMPORTANT: This script will drop the users table if it exists and create it again
// So do not run this script if in production/ you have data to preserve
async function createTablesAndData() {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // Drop the users table if it exists
    await client.query(`
        DROP TABLE IF EXISTS USERS;
      `);
    // Create the users table
    await client.query(`
        CREATE TABLE USERS (
          uid SERIAL PRIMARY KEY,
          first_name VARCHAR(256) NOT NULL,
          last_name VARCHAR(256),
          email VARCHAR(50) NOT NULL UNIQUE,
          date_registered TIMESTAMP NOT NULL DEFAULT NOW()
        )
      `);
    await client.query('COMMIT');
    console.log('Tables and data created successfully!');
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Error creating tables and data:', err);
  } finally {
    client.release();
    await pool.end();
  }
}

createTablesAndData();
