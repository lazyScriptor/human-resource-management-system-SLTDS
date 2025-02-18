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
} from '@mui/material';

const validationSchema = yup.object({
  FirstName: yup.string('Enter First Name').required('First Name is required'),
  LastName: yup.string('Enter Last Name').required('Last Name is required'),
  OtherNames: yup.string('Enter Other Names'),
  ContactInfo: yup.string('Enter Contact Info'),
  EmergencyContact: yup.string('Enter Emergency Contact'),
  Address: yup.string('Enter Address'),
  Email: yup.string().email('Invalid email format'),
  DOB: yup.date().nullable(),
  Gender: yup.string().oneOf(['Male', 'Female'], 'Select a valid gender'),
  EmploymentStatus: yup.string().oneOf(['Active', 'On Leave', 'Resigned']),
  PhoneNumber: yup.string(),
  NIC: yup.string(),
  DateOfJoining: yup.date().nullable(),
});

const EmployeeCreateForm = ({ formData, handleNext, setFormData }) => {
  const formik = useFormik({
    initialValues: {
      FirstName: '',
      LastName: '',
      OtherNames: '',
      ContactInfo: '',
      EmergencyContact: '',
      Address: '',
      Email: '',
      DOB: '',
      Gender: '',
      EmploymentStatus: 'Active',
      PhoneNumber: '',
      NIC: '',
      DateOfJoining: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await setFormData(values);
      handleNext();
    },
  });

  return (
    <Box className="py-12 ">
      <form
        onSubmit={formik.handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
      >
        <Box mb={2}>
          <TextField
            fullWidth
            id="FirtName"
            name="FirstName"
            label="First Name"
            value={formik.values.FirstName}
            onChange={formik.handleChange}
            error={formik.touched.FirstName && Boolean(formik.errors.FirstName)}
            helperText={formik.touched.FirstName && formik.errors.FirstName}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            id="LastName"
            name="LastName"
            label="Last Name"
            value={formik.values.LastName}
            onChange={formik.handleChange}
            error={formik.touched.LastName && Boolean(formik.errors.LastName)}
            helperText={formik.touched.LastName && formik.errors.LastName}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            id="OtherNames"
            name="OtherNames"
            label="Other names"
            value={formik.values.OtherNames}
            onChange={formik.handleChange}
            error={
              formik.touched.OtherNames && Boolean(formik.errors.OtherNames)
            }
            helperText={formik.touched.OtherNames && formik.errors.OtherNames}
          />
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            id="ContactInfo"
            name="ContactInfo"
            label="Contact Info"
            value={formik.values.ContactInfo}
            onChange={formik.handleChange}
            error={
              formik.touched.ContactInfo && Boolean(formik.errors.ContactInfo)
            }
            helperText={formik.touched.ContactInfo && formik.errors.ContactInfo}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            id="EmergencyContact"
            name="EmergencyContact"
            label="Emergency Contact"
            value={formik.values.EmergencyContact}
            onChange={formik.handleChange}
            error={
              formik.touched.EmergencyContact &&
              Boolean(formik.errors.EmergencyContact)
            }
            helperText={
              formik.touched.EmergencyContact && formik.errors.EmergencyContact
            }
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            id="Address"
            name="Address"
            label="Address"
            value={formik.values.Address}
            onChange={formik.handleChange}
            error={formik.touched.Address && Boolean(formik.errors.Address)}
            helperText={formik.touched.Address && formik.errors.Address}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            id="Email"
            name="Email"
            label="Email"
            value={formik.values.Email}
            onChange={formik.handleChange}
            error={formik.touched.Email && Boolean(formik.errors.Email)}
            helperText={formik.touched.Email && formik.errors.Email}
          />
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            id="DOB"
            name="DOB"
            label="Date of Birth"
            type="date"
            value={formik.values.DOB}
            onChange={formik.handleChange}
            error={formik.touched.DOB && Boolean(formik.errors.DOB)}
            helperText={formik.touched.DOB && formik.errors.DOB}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>

        <Box mb={2}>
          <FormControl
            fullWidth
            error={formik.touched.Gender && Boolean(formik.errors.Gender)}
          >
            <InputLabel>Gender</InputLabel>
            <Select
              label="Gender"
              id="Gender"
              name="Gender"
              value={formik.values.Gender}
              onChange={formik.handleChange}
            >
              <MenuItem value={'Male'}>Male</MenuItem>
              <MenuItem value={'Female'}>Female</MenuItem>
            </Select>
            <FormHelperText>
              {formik.touched.Gender && formik.errors.Gender}
            </FormHelperText>
          </FormControl>
        </Box>

        <Box mb={2}>
          <FormControl
            fullWidth
            error={
              formik.touched.EmploymentStatus &&
              Boolean(formik.errors.EmploymentStatus)
            }
          >
            <InputLabel>EmploymentStatus</InputLabel>
            <Select
              label="EmploymentStatus"
              id="EmploymentStatus"
              name="EmploymentStatus"
              value={formik.values.EmploymentStatus}
              onChange={formik.handleChange}
            >
              <MenuItem value={'Active'}>Active</MenuItem>
              <MenuItem value={'On Leave'}>On Leave</MenuItem>
              <MenuItem value={'Resigned'}>Resigned</MenuItem>
            </Select>
            <FormHelperText>
              {formik.touched.EmploymentStatus &&
                formik.errors.EmploymentStatus}
            </FormHelperText>
          </FormControl>
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            id="PhoneNumber"
            name="PhoneNumber"
            label="Phone Number"
            value={formik.values.PhoneNumber}
            onChange={formik.handleChange}
            error={
              formik.touched.PhoneNumber && Boolean(formik.errors.PhoneNumber)
            }
            helperText={formik.touched.PhoneNumber && formik.errors.PhoneNumber}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            id="NIC"
            name="NIC"
            label="NIC"
            value={formik.values.NIC}
            onChange={formik.handleChange}
            error={formik.touched.NIC && Boolean(formik.errors.NIC)}
            helperText={formik.touched.NIC && formik.errors.NIC}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            id="DateOfJoining"
            name="DateOfJoining"
            label="Date of Joining"
            type="date"
            value={formik.values.DateOfJoining}
            onChange={formik.handleChange}
            error={
              formik.touched.DateOfJoining &&
              Boolean(formik.errors.DateOfJoining)
            }
            helperText={
              formik.touched.DateOfJoining && formik.errors.DateOfJoining
            }
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <Button color="primary" variant="contained" type="submit" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default EmployeeCreateForm;
