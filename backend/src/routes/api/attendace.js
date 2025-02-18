import { Router } from "express";
import attendanceController from "../../controllers/attendanceController.js";

const attendanceRoute = Router();

attendanceRoute.get("/", attendanceController.getAllAttendanceDetails);

export default attendanceRoute;
