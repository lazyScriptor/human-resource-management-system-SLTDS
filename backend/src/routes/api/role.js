import { Router } from "express";
import roleController from "../../controllers/roleController.js";

const roleRoute = Router();

roleRoute.get("/", roleController.getAllRoles);
export default roleRoute;
