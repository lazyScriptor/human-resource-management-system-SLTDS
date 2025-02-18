import { Sequelize } from "sequelize";
import sequelize from "../helpers/connctionEstablish.js";
import bcrypt from "bcrypt";
import Role from "./roleModel.js";

const { DataTypes } = Sequelize;

const User = sequelize.define(
  "User",
  {
    UserID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    EmployeeID: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      references: {
        model: "Employee",
        key: "EmployeeID",
      },
    },
    Username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      set(value) {
        // Capitalize the first letter of the username before saving
        const formattedValue =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        this.setDataValue("Username", formattedValue);
      },
      get() {
        // Always return the username in uppercase when fetched
        const rawValue = this.getDataValue("Username");
        return rawValue ? rawValue.toUpperCase() : null;
      },
    },
    PasswordHash: {
      type: DataTypes.STRING,
      set(value) {
        if (value) {
          const salt = bcrypt.genSaltSync(12);
          const hash = bcrypt.hashSync(value, salt);
          this.setDataValue("PasswordHash", hash);
        }
      },
    },
    Age: {
      type: DataTypes.INTEGER,
      defaultValue: 21,
      set(value) {
        // Ensure age is at least 18 before saving
        const validatedAge = value < 18 ? 18 : value;
        this.setDataValue("Age", validatedAge);
      },
      get() {
        // Add a custom message when age is retrieved
        const age = this.getDataValue("Age");
        return `User age: ${age} years`;
      },
    },
    FullName: {
      type: DataTypes.VIRTUAL, // Virtual field, not stored in the database
      get() {
        return `${this.Username} (EmployeeID: ${this.EmployeeID})`;
      },
    },
  },
  {
    freezeTableName: true,
    tableName: "User",
    timestamps: true,
  }
);

User.belongsTo(Role, {
  foreignKey: "RoleID", // Assuming you have RoleID in the User table
  as: "Role", // Alias for the association
});

export default User;
