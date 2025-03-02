import { Router } from "express";
import {
  getRegisterReqs,
  postRegisterReqs,
} from "../controllers/registerController.js";

const registerRouter = Router();

registerRouter.get("/", getRegisterReqs);
registerRouter.post("/", postRegisterReqs);

export default registerRouter;
