import Overtime from "../models/overtimeModel.js";
import sequelize from "../helpers/connctionEstablish.js";
import { Op } from "sequelize";

 const overtimeController = {
  createOvertimeEmployee: async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
      const overtime = await Overtime.create(req.body, { transaction });
      await transaction.commit();

      res.status(201).json({
        success: true,
        data: overtime,
      });
    } catch (error) {
      console.log(error);
      if (!transaction.finished) {
        await transaction.rollback();
      }
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  gerAllOverlapDetails: async (req, res) => {
    try {
      const overtime = await Overtime.findAll();

      res.status(200).json({ success: true, data: overtime });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching overtime",
      });
    }
  },
};
export default overtimeController;