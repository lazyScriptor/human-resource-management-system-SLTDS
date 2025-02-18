import sequalize from "../helpers/connctionEstablish.js";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;

const Bata = sequalize.define(
  "BATA",
  {
    BATAID: {
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
    Month: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    EligibilityStatus: {
      type: DataTypes.ENUM("Eligible", "Not Eligible"),
      allowNull: false,
    },
  },
  { tableName: "BATA", freezeTableName: true, timestamps: true }
);
export default Bata;
