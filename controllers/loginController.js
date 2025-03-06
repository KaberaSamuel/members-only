import { getUserByEmail, getUserByPassword } from "../db/queries.js";

function getLoginReqs(req, res) {
  res.render("login");
}

export { getLoginReqs };
