import Employee from "../models/employeeModel.js";
import sequelize from "../helpers/connctionEstablish.js";
import { Op } from "sequelize";
import { filesUploadFunction } from "./filesController.js";
import decodeToken from "../helpers/decodeToken.js";
import { Department } from "../models/relationsModel.js";
export const employeeController = {
  createEmployee: async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
      // const results = await filesUploadFunction(req,res);
      // console.log(results);
      const employee = await Employee.create(req.body, { transaction });
      await transaction.commit();

      res.status(201).json({
        success: true,
        data: employee,
      });
    } catch (error) {
      console.log(error);
      if (!transaction.finished) {
        await transaction.rollback();
      }
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  uploadDocuments: async (req, res) => {
    try {
      const results = await filesUploadFunction(req, res); // Call properly
      console.log(results);
      res.json(results); // Return response
    } catch (error) {
      res.status(500).json({ message: "File upload failed", error });
    }
  },

  getAllEmployees: async (req, res) => {
    try {
      const Employees = await Employee.findAll();

      res.status(200).json({ success: true, data: Employees });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching Employees",
      });
    }
  },

  updateEmployeesByAge: async (req, res) => {
    try {
      const [affectedCount] = await Employee.update(req.body, {
        where: { age: { [Op.gt]: req.body.minAge } },
      });

      if (affectedCount === 0) {
        return res.status(404).json({
          success: false,
          message: "No Employees found matching criteria",
        });
      }

      res.json({
        success: true,
        message: `${affectedCount} Employees updated`,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  getEmployeeById: async (req, res) => {
    try {
      const employee = await Employee.findByPk(req.params.id);

      if (!employee) {
        return res.status(404).json({
          success: false,
          message: "Employee not found",
        });
      }

      res.json({ success: true, data: employee });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  getEmployeeByEmployeename: async (req, res) => {
    try {
      const Employee = await Employee.findOne({
        where: { Employeename: req.params.Employeename },
        limit: 1,
      });

      if (!Employee) {
        return res.status(404).json({
          success: false,
          message: "Employee not found",
        });
      }

      res.json({ success: true, data: Employee });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  bulkCreateEmployees: async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
      const Employees = await Employee.bulkCreate(req.body, {
        validate: true,
        transaction,
      });

      await transaction.commit();
      res.status(201).json({
        success: true,
        data: Employees.map((Employee) => Employee.sanitizeEmployee()),
      });
    } catch (error) {
      await transaction.rollback();
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  // Delete Employee
  deleteEmployee: async (req, res) => {
    try {
      const deleted = await Employee.destroy({
        where: { EmployeeID: req.params.id },
      });

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Employee not found",
        });
      }

      res.json({ success: true, message: "Employee deleted" });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
};
export const employeeControllerManagerSpecific = {
  getEmployeesWithinDepartment: async (req, res) => {
    try {
      const rawToken = req.body.accessToken;
      const tokenData = decodeToken(rawToken);
      const userID = tokenData.userId;
      console.log(userID);

      // Fetch the employee along with the department name
      const employee = await Employee.findOne({
        where: { EmployeeID: userID },
        attributes: ["DepartmentID"],
        include: [
          {
            model: Department, // Use the Department model, not a string
            as: "Department", // Ensure this matches the association alias
            attributes: ["DepartmentName"], // Attributes should be in an array
          },
        ],
      });

      if (!employee) {
        return res.status(404).json({
          success: false,
          message: "Employee not found",
        });
      }

      // Fetch all employees within the same department
      const employeesInDepartment = await Employee.findAll({
        where: { DepartmentID: employee.DepartmentID },
        include: [
          {
            model: Department, // Use the Department model, not a string
            as: "Department", // Ensure this matches the association alias
            attributes: ["DepartmentName"], // Attributes should be in an array
          },
        ],
      });

      res.json({ success: true, data: employeesInDepartment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: error.message });
    }
  },
};
