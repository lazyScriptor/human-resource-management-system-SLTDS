import Bata from "../models/bataModel.js";

const bataController = {
  getAllBataDetails: async (req, res) => {
    try {
      const bata = await Bata.findAll();
      res.status(200).json({ success: true, data: bata });
    } catch (error) {
      console.log("Error fetching Bata details. Extended error :", error);
      res.status(500).json({
        success: false,
        message: "Error fetching Bata details. Extended error :",
        error,
      });
    }
  },
};

export default bataController;