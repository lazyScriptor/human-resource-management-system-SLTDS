import { Sequelize } from "sequelize";
import sequelize from "../helpers/connctionEstablish.js";
import bcrypt from "bcrypt";

const { DataTypes } = Sequelize;

const Department = sequelize.define(
  "Department",
  {
    DepartmentID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    DepartmentName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    ManagerID: {
      type: DataTypes.INTEGER,
      references: {
        model: "Employee",
        key: "EmployeeID",
      },
      allowNull: true,
    },
  },
  { timestamps: true, freezeTableName: true, tableName: "Department" }
);
export default Department;
