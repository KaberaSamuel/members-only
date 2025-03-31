import { Router } from "express";
import {
  handleHomeReqs,
  newpostGetReqs,
  newpostPostReqs,
} from "../controllers/homeController.js";
import { checkAuthenticated } from "../config/passportConfig.js";

const homeRouter = Router();

homeRouter.get("/", checkAuthenticated, handleHomeReqs);
homeRouter.get("/new-post", newpostGetReqs);
homeRouter.post("/new-post", newpostPostReqs);

export default homeRouter;
