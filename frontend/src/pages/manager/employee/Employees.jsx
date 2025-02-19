import React from "react";
import StepperMUI from "./employeeCreateSection/Stepper";
import TiltedCard from "../../../reusableComponents/TiltedCard";
import documentImage from "../../../assets/documents.jpg";
import DataTable from "./DataTable";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Employees() {
  return (
    <div className="custom-container">
      <EmployeeBase />
    </div>
  );
}

export default Employees;

const EmployeeBase = () => {
  return (
    <div>
      <DataTableDataFeed />
    </div>
  );
};
const DataTableDataFeed = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/employee/manager/get-by-department`,
        { accessToken }
      );
      return response.data; // ✅ Return only the data part of the response
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return <DataTable data={data} />;
};
