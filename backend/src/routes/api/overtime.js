import { Router } from "express";
import overtimeController from "../../controllers/overtimeController.js";

const overtimeRoute = Router();

overtimeRoute.get("/", overtimeController.gerAllOverlapDetails);
overtimeRoute.post("/create", overtimeController.createOvertimeEmployee);
export default overtimeRoute;
