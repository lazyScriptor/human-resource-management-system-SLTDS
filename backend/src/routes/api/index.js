import { Router } from "express";

import userRouter from "./user.js";

import employeeRouter from "./employee.js";
import roleRoute from "./role.js";
import departmentRoute from "./department.js";
import overtimeRoute from "./overtime.js";
import bataRoute from "./bata.js";
import attendanceRoute from "./attendace.js";
import leavesRoute from "./leaves.js";
import payrollRouter from "./payroll.js";
import { upload } from "../../controllers/filesController.js";

const route = Router();

// Middleware to check a condition and bail out if needed
// route.use((req, res, next) => {
//     console.log(object)
//   if (true) { // Replace `true` with your actual condition
//     return next(); // Skip to the fallback middleware
//   }
//   next(); // Continue to the next middleware or route handler
// });

// Mount sub-routers

route.use("/user", userRouter);
route.use("/employee", employeeRouter);
route.use("/department", departmentRoute);
route.use("/role", roleRoute);
route.use("/overtime", overtimeRoute);
route.use("/bata", bataRoute);
route.use("/attendace", attendanceRoute);
route.use("/leaves", leavesRoute);
route.use("/payroll", payrollRouter);



export default route;
