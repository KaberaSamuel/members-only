import path from "node:path";
import express from "express";
import session from "express-session";

import homeRouter from "./routes/homeRoute.js";
import loginRouter from "./routes/loginRoute.js";
import logoutRouter from "./routes/logoutRoute.js";
import registerRouter from "./routes/registerRoute.js";

import passport from "passport";
import "./config/passportConfig.js";

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join("./", "views"));

app.use("/public", express.static("./" + "public"));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/(dashboard)?", homeRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);

app.listen(3000, () => {
  console.log("Server Open");
});
