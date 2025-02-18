import sequalize from "../helpers/connctionEstablish.js";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;

const Payroll = sequalize.define(
  "Payroll",
  {
    PayrollID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    EmployeeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      references: {
        model: "Employee",
        key: "EmployeeID",
      },
    },
    Month: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    BasicSalary: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    OvertimePayment: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    BATA: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0.0,
    },
    TotalSalary: {
      type: DataTypes.VIRTUAL(DataTypes.DECIMAL(10, 2)),
      get() {
        const basic = parseFloat(this.BasicSalary) || 0;
        const overtime = parseFloat(this.OvertimePayment) || 0;
        const bata = parseFloat(this.BATA) || 0;
        return (basic + overtime + bata).toFixed(2);
      },
    },
  },
  { tableName: "Payroll", freezeTableName: true, timestamps: true }
);
export default Payroll;
