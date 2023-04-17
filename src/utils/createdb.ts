import pool from './database';

// IMPORTANT: This script will drop the users table if it exists and create it again
// So do not run this script if in production/ you have data to preserve
async function createTablesAndData() {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // Drop the users table if it exists
    await client.query(`
    DROP TABLE IF EXISTS DOCUMENT_SEARCH CASCADE;
    DROP TABLE IF EXISTS DOCUMENT CASCADE;
    DROP TABLE IF EXISTS AUTHOR CASCADE;
    DROP TABLE IF EXISTS VIDEO CASCADE;
    DROP TYPE IF EXISTS CONTENT_TYPE CASCADE;
    DROP TABLE IF EXISTS CONTENT CASCADE;
    DROP TABLE IF EXISTS USERS CASCADE;
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

    await client.query(`CREATE TYPE CONTENT_TYPE AS ENUM('document', 'video')`);

    await client.query(`
      CREATE TABLE CONTENT (
        content_id SERIAL PRIMARY KEY,
        content_type CONTENT_TYPE NOT NULL
        )
        `);

    await client.query(`
    CREATE TABLE VIDEO (
      video_id SERIAL PRIMARY KEY,
      title VARCHAR(256) NOT NULL,
      description VARCHAR(256),
      FOREIGN KEY (video_id) REFERENCES CONTENT (content_id)
    )
    `);

    // Create tables
    await client.query(`
        CREATE TABLE AUTHOR (
          author_id SERIAL PRIMARY KEY,
          name VARCHAR(256) NOT NULL
        )`);

    await client.query(`
        CREATE TABLE DOCUMENT (
          document_id SERIAL PRIMARY KEY,
          title VARCHAR(256) NOT NULL,
          year INTEGER NOT NULL,
        )`);

    await client.query(`
        CREATE TABLE DOCUMENT_AUTHOR (
          document_id INTEGER NOT NULL,
          author_id INTEGER NOT NULL,
          PRIMARY KEY (document_id, author_id),
          FOREIGN KEY (document_id) REFERENCES DOCUMENT (document_id),
          FOREIGN KEY (author_id) REFERENCES AUTHOR (author_id)
        )`);

    await client.query(
      `CREATE TABLE DOCUMENT_SEARCH (
        uid INTEGER NOT NULL, 
        document_id INTEGER NOT NULL, 
        FOREIGN KEY (uid) REFERENCES USERS (uid), 
        FOREIGN KEY (document_id) REFERENCES DOCUMENT (document_id))`,
    );

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
