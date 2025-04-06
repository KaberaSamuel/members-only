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
            userid VARCHAR(255),
            username VARCHAR(255),
            time VARCHAR(255),
            title VARCHAR (255),
            content VARCHAR (255),
            image VARCHAR(255)
        );
    `);
}

async function createTableMembers() {
  await pool.query(`
    CREATE TABLE members (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        firstname VARCHAR(255),
        lastname VARCHAR(255),
        email VARCHAR (255)
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

async function insertIntoPosts(userid, username, time, title, content, image) {
  await pool.query(
    "INSERT INTO posts (userID, username, time, title,content, image)VALUES ($1, $2, $3, $4, $5, $6)",
    [userid, username, time, title, content, image]
  );
}

async function insertIntoMembers(firstname, lastname, email) {
  await pool.query(
    "INSERT INTO members (firstname, lastname, email) VALUES ($1, $2, $3)",
    [firstname, lastname, email]
  );
}

async function isMember(userEmail) {
  const { rows } = await pool.query(
    `SELECT * FROM members WHERE email='${userEmail}';`
  );

  if (rows.length > 0) {
    return true;
  }

  return false;
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

async function getPosts() {
  const { rows } = await pool.query(`SELECT * FROM posts;`);
  return rows;
}

async function getPostById(id) {
  const { rows } = await pool.query(`SELECT * FROM posts WHERE id='${id}';`);

  return rows[0];
}

export {
  insertIntoUsers,
  insertIntoPosts,
  insertIntoMembers,
  isMember,
  getUserByPassword,
  getUserByEmail,
  getUserById,
  getPosts,
  getPostById,
};
