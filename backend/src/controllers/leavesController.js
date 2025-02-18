import Leaves from "../models/leavesModel.js";

const leavesController = {
  getAllLeavesDetails: async (req, res) => {
    try {
      const leaves = await Leaves.findAll();
      res.status(200).json({ success: true, data: leaves });
    } catch (error) {
      console.log("Error fetching leaves details. Extended error :", error);
      res.status(500).json({
        success: false,
        message: "Error fetching leaves details. Extended error :",
        error,
      });
    }
  },
};

export default leavesController;
