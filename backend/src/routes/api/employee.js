import { Router } from "express";
import { employeeController } from "../../controllers/employeeController.js";
import { upFunc } from "../../helpers/createUploadDirectory.js";
import { filesUploadFunctionMiddleware } from "../../controllers/filesController.js";

const employeeRouter = Router();
employeeRouter.get("/", employeeController.getAllEmployees);
employeeRouter.post(
  "/create",
  filesUploadFunctionMiddleware,
  employeeController.createEmployee
);
employeeRouter.get("/:id", employeeController.getEmployeeById);
employeeRouter.put("/bulk", employeeController.bulkCreateEmployees);
employeeRouter.patch("/age", employeeController.updateEmployeesByAge);
employeeRouter.delete("/:id", employeeController.deleteEmployee);
const upload = upFunc(); // Get multer instance
// employeeRouter.post(
//   "/upload",
//   upload.fields([{ name: "avatars" }, { name: "documents" }]),
//   employeeController.uploadDocuments
// );

employeeRouter.get(
  "/name/:employeename",
  employeeController.getEmployeeByEmployeename
);


employeeRouter.post(
  "/upload",
  upload.fields([{ name: "avatars" }, { name: "documents" }]),
  (req, res) => {
    if (!req.files || !req.files["avatars"] || !req.files["documents"]) {
      return res.status(400).json({ message: "Both files are required!" });
    }
    
    const avatarPath = `/uploads/avatars/${req.files["avatars"][0].filename}`;
    const documentPath = `/uploads/documents/${req.files["documents"][0].filename}`;
    
    res.json({
      message: "Files uploaded successfully",
      avatarPath,
      documentPath,
    });
  }
);

export default employeeRouter;