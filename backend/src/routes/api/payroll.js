import { Router } from "express";
import payrollController from "../../controllers/payrollController.js";
const payrollRouter = Router();

payrollRouter.get("/", payrollController.getAllPayrollDetails);

export default payrollRouter;
