import pool from "./pool.js";

async function createTableUsers() {
  await pool.query(`
        CREATE TABLE users (
            id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            fullname VARCHAR( 255 ),
            email VARCHAR ( 255 ),
            password VARCHAR ( 255 )
        );
    `);
}

async function insertIntoUsers(fullname, email, password) {
  await pool.query(
    "INSERT INTO users (fullname, email,password)VALUES ($1, $2, $3)",
    [fullname, email, password]
  );
}

// createTableUsers();

export { insertIntoUsers };
