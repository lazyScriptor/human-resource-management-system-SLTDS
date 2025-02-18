import sequalize from "../helpers/connctionEstablish.js";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;

const Leaves = sequalize.define(
  "Leaves",
  {
    LeaveID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    EmployeeID: {
      type: DataTypes.INTEGER,
      references: {
        model: "Employee",
        key: "EmployeeID",
      },
      allowNull: true,
      defaultValue: null,
    },
    LeaveType: {
      type: DataTypes.ENUM("Casual", "Sick", "Annual", "Other"),
      allowNull: false,
    },
    StartDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    EndDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    Status: {
      type: DataTypes.ENUM("Pending", "Approved", "Rejected"),
      allowNull: true,
      defaultValue: "Pending",
    },
    ApprovedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      references: {
        model: "Employee",
        key: "EmployeeID",
      },
    },
  },
  { tableName: "Leaves", freezeTableName: true, timestamps: true }
);
export default Leaves;
