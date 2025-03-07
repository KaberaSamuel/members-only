import { Router } from "express";
import {
  handleHomeReqs,
  newPostGetReqs,
} from "../controllers/homeController.js";
import { checkAuthenticated } from "../config/passportConfig.js";

const homeRouter = Router();

homeRouter.get("/", checkAuthenticated, handleHomeReqs);
homeRouter.get("/new-post", newPostGetReqs);

export default homeRouter;
