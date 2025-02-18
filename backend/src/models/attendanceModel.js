import sequalize from "../helpers/connctionEstablish.js";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;

const Attendace = sequalize.define(
  "Attendance",
  {
    AttendanceID: {
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
    },
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    TimeIn: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    TimeIOut: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    Status: {
      type: DataTypes.ENUM("Present", "Absent", "Early Departure"),
      allowNull: false,
    },
  },
  { tableName: "Attendance", freezeTableName: true, timestamps: true }
);
export default Attendace;
