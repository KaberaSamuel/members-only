import { Router } from "express";
import passport from "passport";
import { getLoginReqs } from "../controllers/loginController.js";
import { checkNotAuthenticated } from "../config/passportConfig.js";

const loginRouter = Router();

loginRouter.get("/", checkNotAuthenticated, getLoginReqs);
loginRouter.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  })
);

export default loginRouter;
