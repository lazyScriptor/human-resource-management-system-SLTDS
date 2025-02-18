import { Router } from "express";
import leavesController from "../../controllers/leavesController.js";
const leavesRoute = Router();

leavesRoute.get("/", leavesController.getAllLeavesDetails);

export default leavesRoute;
