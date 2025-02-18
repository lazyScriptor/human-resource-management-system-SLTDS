import { Sequelize } from "sequelize";
import winston from "winston";
const { DataTypes } = Sequelize;

const sequelize = new Sequelize("HRMS new", "root", "", {
  dialect: "mysql",
  logging: (msg) => logger.debug(msg),
});

export default sequelize;
// Connection establish checker
export const connectionEstablish = async () => {
  await sequelize.sync({ alter: true });

  await sequelize.authenticate();
  console.log("Connection succesfull");
};

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(), // Logs to the console
    new winston.transports.File({ filename: "combined.log" }), // Logs to a file
  ],
});
