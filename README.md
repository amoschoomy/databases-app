# databases-app

This is a mock application that uses a database to store data. It is used to demonstrate how to use a database in a Node.js application.

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)


## Getting Started

`npm install`

## Create DB

Before you run the script, you need to create a database in PostgreSQL. The local db config used is shown below. You can change the config in `src/config.ts` to match your database config.

```ts
export default {
  database: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'root',
    database: 'edulearn',
  },
};
```

`npm run create_db`

The sql dump file for it is at `src/createdb.sql` while the actual script is at `src/createdb.ts`

## Seed DB

Next we need to seed the DB with some data to demonstrate the SQL query. The seed script will insert mock data into the application database. The SQL file used to seed the DB is `src/insertdata.sql`.

`npm run seed_db`

## Run the app

Finally run the app.

`npm run start`

# NOTE:

The file `querydemonstration.sql` is just a SQL dump of the queries that will be demonstrated in the program. You can use this file to run the queries in your database client, but it is advised to replicate it at the frontend.

The function to retrieve academic articles from an external academic database is not deployed therefore you cannot search for academic articles. Therefore please seed the DB like mentioned above before proceeding with the query demonstration. 
