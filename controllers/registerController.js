import { insertIntoUsers } from "../db/queries.js";

function getRegisterReqs(req, res) {
  res.render("register");
}

async function postRegisterReqs(req, res, next) {
  try {
    const { firstname, lastname, email, password } = req.body;
    await insertIntoUsers(firstname, lastname, email, password);
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
}

export { getRegisterReqs, postRegisterReqs };
