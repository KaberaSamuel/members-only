function handleHomeReqs(req, res) {
  res.render("index", {
    user: req.user,
  });
}

function newPostGetReqs(req, res) {
  res.render("newPost.ejs", {
    user: req.user,
  });
}

export { handleHomeReqs, newPostGetReqs };
