async function handleHomeReqs(req, res) {
  res.render("index", {
    name: req.user.firstname,
  });
}

export { handleHomeReqs };
