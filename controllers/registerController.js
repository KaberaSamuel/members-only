import bcrypt from "bcrypt";
import { insertIntoUsers } from "../db/queries.js";

function getRegisterReqs(req, res) {
  res.render("register");
}

async function postRegisterReqs(req, res, next) {
  try {
    const { firstname, lastname, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await insertIntoUsers(firstname, lastname, email, hashedPassword);
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
}

export { getRegisterReqs, postRegisterReqs };
