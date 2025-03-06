import { Router } from "express";

const logoutRouter = Router();

logoutRouter.get("/", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/login");
  });
});

export default logoutRouter;
