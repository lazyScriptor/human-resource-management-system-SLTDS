import { Router } from "express";
import departmentController from "../../controllers/departmentController.js";

const departmentRoute = Router();

departmentRoute.get("/", departmentController.getAllDepartments);
export default departmentRoute;
