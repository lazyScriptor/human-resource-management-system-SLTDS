import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
import axios from "axios";
import decodeToken from "../helpers/decodeToken";
import Unauthorized from "../pages/Unauthorized";
import Login from "../pages/Login";
import AdminDashboard from "../pages/manager/employee/Employees";
import Leaves from "../pages/manager/leaves/Leaves";
import NavigationBar from "../reusableComponents/NavigationBar";
import Employees from "../pages/manager/employee/Employees";
import Dashboard from "../pages/manager/dashboard/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const PrivateRoute = ({ allowedRoles }) => {
  const token = localStorage.getItem("accessToken");
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserRole = async () => {
      if (!token) {
        const results = await axios.get(
          `${import.meta.env.VITE_API_URL}/user/authenticate`,
          {
            withCredentials: true,
          }
        );
        console.log("results", results);
        setValidateStatus(JSON.stringify(results.data));

        setLoading(false);
        return;
      }

      try {
        const decodedToken = await decodeToken(token);
        setUserRole(decodedToken.accessLevel);
        console.log(decodedToken);
      } catch (error) {
        console.error("Invalid token:", error);
        setUserRole(null);
      } finally {
        setLoading(false);
      }
    };

    getUserRole();
  }, [token]);

  if (loading) {
    return <div>Loading...</div>; // Optional: Show loading state while fetching role
  }

  if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

const AppRoutes = () => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Login />
              </div>
            }
          />
          <Route
            path="dashboard"
            element={
              <>
                <NavigationBar />
                <Dashboard />
              </>
            }
          />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route
            path="/manager"
            element={<PrivateRoute allowedRoles={["HR"]} />}
          >
            <Route
              path="employee"
              element={
                <>
                  <NavigationBar />
                  <Employees />
                </>
              }
            />
            <Route
              path="leaves"
              element={
                <>
                  <NavigationBar />
                  <Leaves />
                </>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

const AdminLayout = () => (
  <div>
    <h1>Admin Dashboard</h1>
    <Outlet />
  </div>
);

export default AppRoutes;
