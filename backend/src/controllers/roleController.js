import sequelize from "../helpers/connctionEstablish.js";
import { Op } from "sequelize";
import Role from "../models/roleModel.js";

const roleController = {
  getAllRoles: async (req, res) => {
    try {
      const roles = await Role.findAll();
      res.status(200).json({ success: true, data: roles });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: " Error fetching the roles",
      });
    }
  },
};

export default roleController;
