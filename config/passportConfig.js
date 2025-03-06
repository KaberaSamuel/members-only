import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

import {
  getUserByEmail,
  getUserByPassword,
  getUserById,
} from "../db/queries.js";

async function authenticateUser(email, password, done) {
  const user = await getUserByEmail(email);
  const isEmailCorrect = user ? true : false;
  const isPassworCorrect = (await getUserByPassword(password)) ? true : false;

  if (!isEmailCorrect) {
    return done(null, false, { message: "No user with that email" });
  } else if (!isPassworCorrect) {
    return done(null, false, { message: "Password incorrect" });
  }

  // returning userObject for serialization
  return done(null, user);
}

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/login");
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/dashboard");
  }
  next();
}

passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await getUserById(id);
  done(null, user);
});

export { checkAuthenticated, checkNotAuthenticated };
