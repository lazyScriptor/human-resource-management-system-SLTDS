import Employee from "./employeeModel.js";
import Department from "./departmentModel.js";
import Role from "./roleModel.js";

// Define Department-Employee Relationship
Department.hasMany(Employee, { foreignKey: "DepartmentID" });
Employee.belongsTo(Department, { foreignKey: "DepartmentID" });


// Define Employee-Role Relationship
Role.hasMany(Employee, { foreignKey: "RoleID" });
Employee.belongsTo(Role, { foreignKey: "RoleID" });

export { Employee, Department, Role };
