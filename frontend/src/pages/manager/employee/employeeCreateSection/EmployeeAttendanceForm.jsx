import React from 'react';
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
  FormLabel,
} from '@mui/material';
import axios from 'axios';

const validationSchema = yup.object({
  AnnualLeave: yup.number('Enter a number').required('Enter something please'),
  CasualLeave: yup.number('Enter a number').required('Enter something please'),
  SickLeave: yup.number('Enter a number').required('Enter something please'),
  OtherLeave: yup.number('Enter a number').required('Enter something please'),
  OverTime: yup.boolean().required('Please enter a value'),
  RegularOnTime: yup
    .date()
    .transform((value, originalValue) => {
      return originalValue ? convertTimeToDate(originalValue) : null;
    })
    .required('Regular On Time is required')
    .typeError('Invalid time format'),
  RegularOffTime: yup
    .date()
    .transform((value, originalValue) => {
      return originalValue ? convertTimeToDate(originalValue) : null;
    })
    .required('Regular Off Time is required')
    .min(
      yup.ref('RegularOnTime'),
      'Regular Off Time must be after Regular On Time'
    )
    .typeError('Invalid time format'),
});

const convertTimeToDate = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
};

const EmployeeAttendanceForm = ({ formData, handleNext, setFormData }) => {
  const formik = useFormik({
    initialValues: {
      AnnualLeave: '',
      CasualLeave: '',
      SickLeave: '',
      OtherLeave: '',
      OverTime: '',
      RegularOnTime: '08:30',
      RegularOffTime: '17:00',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const objectAfterAssignAttendanceFormData = Object.assign(
        formData,
        values
      );
      await setFormData(objectAfterAssignAttendanceFormData);
      handleNext()
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
    <Box>
      <form
        onSubmit={formik.handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
      >
        <Box mb={2}>
          <TextField
            fullWidth
            id="AnnualLeave"
            name="AnnualLeave"
            label="Annual Leave"
            value={formik.values.AnnualLeave}
            onChange={formik.handleChange}
            error={
              formik.touched.AnnualLeave && Boolean(formik.errors.AnnualLeave)
            }
            helperText={formik.touched.AnnualLeave && formik.errors.AnnualLeave}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            id="CasualLeave"
            name="CasualLeave"
            label="Casual Leave"
            value={formik.values.CasualLeave}
            onChange={formik.handleChange}
            error={
              formik.touched.CasualLeave && Boolean(formik.errors.CasualLeave)
            }
            helperText={formik.touched.CasualLeave && formik.errors.CasualLeave}
          />
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            id="SickLeave"
            name="SickLeave"
            label="Sick Leave"
            value={formik.values.SickLeave}
            onChange={formik.handleChange}
            error={formik.touched.SickLeave && Boolean(formik.errors.SickLeave)}
            helperText={formik.touched.SickLeave && formik.errors.SickLeave}
          />
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            id="OtherLeave"
            name="OtherLeave"
            label="Other Leave"
            value={formik.values.OtherLeave}
            onChange={formik.handleChange}
            error={
              formik.touched.OtherLeave && Boolean(formik.errors.OtherLeave)
            }
            helperText={formik.touched.OtherLeave && formik.errors.OtherLeave}
          />
        </Box>

        <Box mb={2}>
          <FormControl
            fullWidth
            error={formik.touched.OverTime && Boolean(formik.errors.OverTime)}
          >
            <InputLabel>OverTime</InputLabel>
            <Select
              label="OverTime"
              id="OverTime"
              name="OverTime"
              value={formik.values.OverTime}
              onChange={formik.handleChange}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
            <FormHelperText>
              {formik.touched.OverTime && formik.errors.OverTime}
            </FormHelperText>
          </FormControl>
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            id="RegularOnTime"
            type="time"
            name="RegularOnTime"
            label="RegularOnTime"
            value={formik.values.RegularOnTime}
            onChange={formik.handleChange}
            error={
              formik.touched.RegularOnTime &&
              Boolean(formik.errors.RegularOnTime)
            }
            helperText={
              formik.touched.RegularOnTime && formik.errors.RegularOnTime
            }
          />
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            id="RegularOffTime"
            type="time"
            name="RegularOffTime"
            label="RegularOffTime"
            value={formik.values.RegularOffTime}
            onChange={formik.handleChange}
            error={
              formik.touched.RegularOffTime &&
              Boolean(formik.errors.RegularOffTime)
            }
            helperText={
              formik.touched.RegularOffTime && formik.errors.RegularOffTime
            }
          />
        </Box>

        <Button color="primary" variant="contained" type="submit" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default EmployeeAttendanceForm;
