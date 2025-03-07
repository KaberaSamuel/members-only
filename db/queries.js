import pool from "./pool.js";

async function createTableUsers() {
  await pool.query(`
        CREATE TABLE users (
            id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            firstname VARCHAR(255),
            lastname VARCHAR(255),
            email VARCHAR (255),
            password VARCHAR (255),
            profileImage VARCHAR (255)
        );
    `);
}

async function createTablePosts() {
  await pool.query(`
        CREATE TABLE posts (
            postId INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            userID INTEGER(),
            title VARCHAR (255),
            content VARCHAR (255),
            time INTEGER,
        );
    `);
}

async function insertIntoUsers(
  firstname,
  lastname,
  email,
  password,
  profileImage
) {
  await pool.query(
    "INSERT INTO users (firstname, lastname, email,password, profileimage)VALUES ($1, $2, $3, $4, $5)",
    [firstname, lastname, email, password, profileImage]
  );
}

async function getUserByEmail(email) {
  const { rows } = await pool.query(
    `SELECT * FROM users WHERE email='${email}';`
  );

  return rows[0];
}

async function getUserByPassword(password) {
  const { rows } = await pool.query(
    `SELECT * FROM users WHERE password='${password}';`
  );

  return rows[0];
}

async function getUserById(id) {
  const { rows } = await pool.query(`SELECT * FROM users WHERE id='${id}';`);

  return rows[0];
}

export { insertIntoUsers, getUserByPassword, getUserByEmail, getUserById };
