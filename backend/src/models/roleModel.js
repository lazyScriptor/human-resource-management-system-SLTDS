import { Sequelize } from "sequelize";
import sequelize from "../helpers/connctionEstablish.js";
import bcrypt from "bcrypt";

const { DataTypes } = Sequelize;

const Role = sequelize.define(
  "Role",
  {
    RoleID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    RoleName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    AccessLevel: {
      type: DataTypes.ENUM("Admin", "HR", "Employee"),
      allowNull: true,
      defaultValue: null,
    },
  },
  { timestamps: true, freezeTableName: true, tableName: "Role" }
);



export default Role;
