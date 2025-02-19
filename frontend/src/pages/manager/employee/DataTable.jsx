import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "EmployeeID", headerName: "ID", width: 70 },
  { field: "DepartmentID", headerName: "Department ID", width: 130 },
  { field: "Designation", headerName: "Designation", width: 150 },
  { field: "ContactInfo", headerName: "Contact Info", width: 150 },
  { field: "EmergencyContact", headerName: "Emergency Contact", width: 150 },
  { field: "Address", headerName: "Address", width: 200 },
  { field: "Email", headerName: "Email", width: 200 },
  { field: "DOB", headerName: "Date of Birth", width: 130 },
  {
    field: "Gender",
    headerName: "Gender",
    width: 100,
  },
  { field: "EmploymentStatus", headerName: "Employment Status", width: 150 },
  { field: "RoleID", headerName: "Role ID", width: 100 },
  { field: "PhoneNumber", headerName: "Phone Number", width: 150 },
  { field: "NIC", headerName: "NIC", width: 150 },
  { field: "DateOfJoining", headerName: "Date of Joining", width: 150 },
  { field: "Documents", headerName: "Documents", width: 200 },
  {
    field: "AnnualLeave",
    headerName: "Annual Leave",
    type: "number",
    width: 130,
  },
  {
    field: "Casualleave",
    headerName: "Casual Leave",
    type: "number",
    width: 130,
  },
  { field: "SickLeave", headerName: "Sick Leave", type: "number", width: 130 },
  {
    field: "OtherLeaves",
    headerName: "Other Leaves",
    type: "number",
    width: 130,
  },
  { field: "OverTime", headerName: "Over Time", type: "boolean", width: 100 },
  { field: "RegularOnTime", headerName: "Regular On Time", width: 130 },
  { field: "RegularOffTime", headerName: "Regular Off Time", width: 130 },
  { field: "DateOfResignation", headerName: "Date of Resignation", width: 160 },
  { field: "Signature", headerName: "Signature", width: 130 },
  { field: "FirstName", headerName: "First Name", width: 130 },
  { field: "LastName", headerName: "Last Name", width: 130 },
  { field: "Othernames", headerName: "Other Names", width: 130 },
  {
    field: "ReasonForResignation",
    headerName: "Reason for Resignation",
    width: 200,
  },
  { field: "createdAt", headerName: "Created At", width: 150 },
  { field: "updatedAt", headerName: "Updated At", width: 150 },

  {
    field: "Age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
];

export default function DataTable({ data }) {
  const rows = data?.data || []; // ✅ Safe access to data

  console.log(rows); // 🛠️ Debug to verify data structure

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      {/* <pre>{JSON.stringify(data.data, null, 2)}</pre>{" "} */}
      {/* Raw data for debugging */}
      <DataGrid
        rows={data?.data}
        columns={columns}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
        getRowId={(row) => row?.EmployeeID} // ✅ Specify a unique ID field
      />
    </Paper>
  );
}
