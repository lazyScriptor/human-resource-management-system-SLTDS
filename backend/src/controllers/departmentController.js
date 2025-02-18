import sequelize from "../helpers/connctionEstablish.js";
import { Op } from "sequelize";
import Department from "../models/departmentModel.js";

const departmentController = {
  getAllDepartments: async (req, res) => {
    try {
      const roles = await Department.findAll();
      res.status(200).json({ success: true, data: roles });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: " Error fetching the roles",
      });
    }
  },
};

export default departmentController;
