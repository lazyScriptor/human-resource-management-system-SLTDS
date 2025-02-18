import Attendance from "../models/attendanceModel.js";

const attendanceController = {
  getAllAttendanceDetails: async (req, res) => {
    try {
      const bata = await Attendance.findAll();
      res.status(200).json({ success: true, data: bata });
    } catch (error) {
      console.log("Error fetching Attendance details. Extended error :", error);
      res.status(500).json({
        success: false,
        message: "Error fetching Attendance details. Extended error :",
        error,
      });
    }
  },
};

export default attendanceController;
