import { Router } from "express";
import { handleHomeReqs } from "../controllers/homeController.js";
import { checkAuthenticated } from "../config/passportConfig.js";

const homeRouter = Router();

homeRouter.get("/", checkAuthenticated, handleHomeReqs);

export default homeRouter;
