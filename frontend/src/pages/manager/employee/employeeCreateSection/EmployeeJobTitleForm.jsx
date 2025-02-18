import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material';
import axios from 'axios';

const validationSchema = yup.object({
  Department: yup.number().oneOf([1, 2, 3]).required('Department  is required'),
  Role: yup.number().oneOf([1, 2, 3]).required('Role  is required'),
  Designation: yup.string().required('Designation is required'),
});

const EmployeeJobTitleForm = ({ formData, handleNext, setFormData }) => {
  const formik = useFormik({
    initialValues: {
      Department: '',
      Role: '',
      Designation: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const objectAfterAssignmentOfJobFormData = Object.assign(
        formData,
        values
      );
      await setFormData(objectAfterAssignmentOfJobFormData);
      handleNext();
      // try {
      //   const response = await axios.post(
      //     `${import.meta.env.VITE_API_URL}/employee`,
      //     values
      //   );
      //   console.log('Employee added successfully:', response.data);
      // } catch (error) {
      //   console.error('Error adding employee:', error);
      // }
    },
  });

  return (
    <Box className="py-12 ">
      <form
        onSubmit={formik.handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
      >
        <Box mb={2}>
          <FormControl
            fullWidth
            error={formik.touched.Role && Boolean(formik.errors.Role)}
          >
            <InputLabel>Department</InputLabel>
            <Select
              label="Department"
              id="Department"
              name="Department"
              value={formik.values.Department}
              onChange={formik.handleChange}
            >
              <MenuItem value={1}>Department1</MenuItem>
              <MenuItem value={2}>Department2</MenuItem>
              <MenuItem value={3}>Department3</MenuItem>
            </Select>
            <FormHelperText>
              {formik.touched.Department && formik.errors.Department}
            </FormHelperText>
          </FormControl>
        </Box>

        <Box mb={2}>
          <FormControl
            fullWidth
            error={formik.touched.Role && Boolean(formik.errors.Role)}
          >
            <InputLabel>Role</InputLabel>
            <Select
              label="Role"
              id="Role"
              name="Role"
              value={formik.values.Role}
              onChange={formik.handleChange}
            >
              <MenuItem value={1}>role1</MenuItem>
              <MenuItem value={2}>role2</MenuItem>
              <MenuItem value={3}>role3</MenuItem>
            </Select>
            <FormHelperText>
              {formik.touched.Role && formik.errors.Role}
            </FormHelperText>
          </FormControl>
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            id="Designation"
            name="Designation"
            label="Designation"
            value={formik.values.Designation}
            onChange={formik.handleChange}
            error={
              formik.touched.Designation && Boolean(formik.errors.Designation)
            }
            helperText={formik.touched.Designation && formik.errors.Designation}
          />
        </Box>

        <Button color="primary" variant="contained" type="submit" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default EmployeeJobTitleForm;
