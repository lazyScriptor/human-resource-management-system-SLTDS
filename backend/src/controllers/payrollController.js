import Payroll from "../models/payrollModel.js";

const payrollController = {
  getAllPayrollDetails: async (req, res) => {
    try {
      const bata = await Payroll.findAll();
      res.status(200).json({ success: true, data: bata });
    } catch (error) {
      console.log("Error fetching Payroll details. Extended error :", error);
      res.status(500).json({
        success: false,
        message: "Error fetching Payroll details. Extended error :",
        error,
      });
    }
  },
};

export default payrollController;
