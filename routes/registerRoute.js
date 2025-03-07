import { Router } from "express";
import {
  getRegisterReqs,
  postRegisterReqs,
} from "../controllers/registerController.js";

import uploadHandler from "../config/multerConfig.js";
import { checkNotAuthenticated } from "../config/passportConfig.js";

const registerRouter = Router();

registerRouter.get("/", checkNotAuthenticated, getRegisterReqs);
registerRouter.post(
  "/",
  uploadHandler.single("profileImage"),
  postRegisterReqs
);

export default registerRouter;
