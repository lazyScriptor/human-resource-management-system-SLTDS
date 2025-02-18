import { Sequelize } from "sequelize";
import sequelize from "../helpers/connctionEstablish.js";

const { DataTypes } = Sequelize;

const Overtime = sequelize.define(
  "Overtime",
  {
    OvertimeID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    EmployeeID: {
      type: DataTypes.INTEGER,
      defaultValue: null,
      allowNull: true,
      references: {
        model: "Employee",
        key: "EmployeeID",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    HoursWorked: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    OvertimeRate: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    TotalPayment: {
      type: DataTypes.VIRTUAL(DataTypes.DECIMAL(10, 2)),
      get() {
        const hours = this.HoursWorked || 0;
        const rate = this.OvertimeRate || 0;
        return (hours * rate).toFixed(2);
      },
    },
    Status: {
      type: DataTypes.ENUM("Pending", "Approved", "Rejected"),
      allowNull: true,
      defaultValue: "Pending",
    },
  },
  {
    freezeTableName: true,
    tableName: "Overtime",
    timestamps: true,
  }
);

export default Overtime;
