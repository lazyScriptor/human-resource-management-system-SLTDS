import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button, Paper, Box, FormLabel } from "@mui/material";
import axios from "axios";
import decodeToken from "../helpers/decodeToken";
import { useNavigate } from "react-router-dom";
const validationSchema = yup.object({
  Username: yup.string("Enter your Username").required("Username is required"),
  Password: yup
    .string("Enter your Password")
    .min(2, "Password should be of minimum 2 characters length")
    .required("Password is required"),
});

const Login = () => {
  const navigate =useNavigate();
  const formik = useFormik({
    initialValues: {
      Username: "",
      Password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/user/authenticate`,
          {
            Username: values.Username,
            Password: values.Password,
          },
          { withCredentials: true }
        );

        const accessToken = response.data.accessToken;
        const userDetails = decodeToken(accessToken);

        navigate(`/dashboard`)
        console.log(userDetails);
        localStorage.setItem("accessToken", accessToken);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleReAuth = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/user/validate`,

      { withCredentials: true } // Make sure this is included
    );

    console.log(response);
  };
  return (
    <div className="w-screen h-screen grid grid-col-1 md:grid-cols-2 bg-pink-100">
      <div className="hidden md:flex md:h-screen"></div>
      <div className="flex justify-center items-center">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-4">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                padding: 2,
                borderRadius: 2,
              }}
              component={Paper}
            >
              <TextField
                id="Username"
                name="Username"
                label="Username"
                value={formik.values.Username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.Username && Boolean(formik.errors.Username)
                }
                helperText={formik.touched.Username && formik.errors.Username}
              />
              <TextField
                id="Password"
                name="Password"
                label="Password"
                type="Password"
                value={formik.values.Password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.Password && Boolean(formik.errors.Password)
                }
                helperText={formik.touched.Password && formik.errors.Password}
              />
              <Button color="primary" variant="contained" type="submit">
                Submit
              </Button>
            </Box>
          </div>
        </form>
        {/* <Button onClick={handleReAuth}>hey</Button> */}
      </div>
    </div>
  );
};

export default Login;
