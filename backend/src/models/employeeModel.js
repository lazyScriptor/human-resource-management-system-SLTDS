import { Sequelize } from "sequelize";
import sequelize from "../helpers/connctionEstablish.js";
import Department from "./departmentModel.js";
import Role from "./roleModel.js";

const { DataTypes } = Sequelize;

// Employee Model
const Employee = sequelize.define(
  "Employee",
  {
    EmployeeID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // Name: {
    //   type: DataTypes.STRING(100),
    //   allowNull: false,
    //   validate: {
    //     len: [3, 100], // Name must be between 3 and 100 characters
    //   },
    // },
    DepartmentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Designation: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
    },
    ContactInfo: {
      type: DataTypes.STRING(20),
      allowNull: false,
      // unique: true, // Unique constraint creates a single index for the field
    },
    EmergencyContact: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    Address: {
      type: DataTypes.STRING(100),
    },
    Email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    DOB: {
      type: DataTypes.DATE,
    },
    Gender: {
      type: DataTypes.ENUM("MALE", "Female"),
      defaultValue: null,
    },
    EmploymentStatus: {
      type: DataTypes.ENUM("Active", "On Leave", "Resigned"),
      defaultValue: "Active",
      allowNull: true,
    },
    RoleID: {
      type: DataTypes.INTEGER,
      allowNull: true,

    },
    PhoneNumber: {
      type: DataTypes.STRING(15),
    },
    NIC: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    DateOfJoining: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Documents: {
      type: DataTypes.JSON,
      defaultValue: null,
      allowNull: true,
    },
    AnnualLeave: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    Casualleave: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    SickLeave: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    OtherLeaves: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    OverTime: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    RegularOnTime: {
      type: DataTypes.TIME,
      defaultValue: "08:30:00",
    },
    RegularOffTime: {
      type: DataTypes.TIME,
      defaultValue: "17:00:00",
    },
    HasResigned: {
      type: DataTypes.VIRTUAL(DataTypes.BOOLEAN),
      defaultValue: false,
      get() {
        return this.DateOfJoining ? true : false;
      },
    },
    CallingName: {
      type: DataTypes.VIRTUAL(DataTypes.STRING(20)),
      get() {
        return this.FirstName;
      },
    },
    EPF: {
      type: DataTypes.VIRTUAL(DataTypes.INTEGER),
      get() {
        return `${this.DepartmentID} ${this.EmployeeID}`;
      },
    },
    DateOfResignation: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
    ReasonForResignation: {
      type: DataTypes.STRING(100),
    },
    Signature: {
      type: DataTypes.STRING(50),
      defaultValue: null,
    },
    FirstName: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    LastName: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    Othernames: {
      type: DataTypes.STRING(20),
      defaultValue: null,
    },
    FullName: {
      type: DataTypes.VIRTUAL(DataTypes.STRING(100)),

      get() {
        return `${this.FirstName} ${this.Othernames || ""} ${
          this.LastName
        }`.trim();
      },
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
    tableName: "Employee",
    indexes: [
      // You can define additional indexes here, if needed
    ],
  }
);

export default Employee;
