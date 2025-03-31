import { insertIntoPosts, getPosts } from "../db/queries.js";

async function handleHomeReqs(req, res) {
  res.render("index", {
    user: req.user,
    posts: await getPosts(),
  });
}

function newpostGetReqs(req, res) {
  res.render("newPost.ejs", {
    user: req.user,
  });
}

async function newpostPostReqs(req, res) {
  const time = Date.now();
  const { id: userID, profileimage: image } = req.user;
  const { title, content } = req.body;

  await insertIntoPosts(userID, time, title, content, image);
  res.redirect("/");
}

export { handleHomeReqs, newpostGetReqs, newpostPostReqs };
