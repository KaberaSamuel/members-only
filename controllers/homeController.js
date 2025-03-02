async function handleHomeReqs(req, res) {
  res.render("index", {
    name: "Kabera Samuel",
  });
}

export { handleHomeReqs };
