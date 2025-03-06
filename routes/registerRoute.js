import { Router } from "express";
import {
  getRegisterReqs,
  postRegisterReqs,
} from "../controllers/registerController.js";
import { checkNotAuthenticated } from "../config/passportConfig.js";

const registerRouter = Router();

registerRouter.get("/", checkNotAuthenticated, getRegisterReqs);
registerRouter.post("/", postRegisterReqs);

export default registerRouter;
