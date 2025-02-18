import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, Box, FormLabel } from '@mui/material';
import axios from 'axios';

const validationSchema = yup.object({
  DateOfResignation: yup.date().required('Date of resignation is required'),
  ReasonForResignation: yup
    .string('Enter the reason')
    .required('This field is required'),
});

const EmployeeResignationForm = ({ formData, handleNext, setFormData }) => {
  const formik = useFormik({
    initialValues: {
      documents: null, // File input for documents
      avatars: null, // File input for signature
      DateOfResignation: '',
      ReasonForResignation: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const finalFormValue = Object.assign(formData, values);
      setFormData(finalFormValue);

      const imageUpload = await axios.post(
        `${import.meta.env.VITE_API_URL}/employee/upload`,
        {
          avatars: values.avatars,
          documents: values.documents,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(imageUpload);
    },
  });

  const handleFileChange = (event, fieldName) => {
    formik.setFieldValue(fieldName, event.currentTarget.files[0]);
  };

  return (
    <Box className="py-12">
      <form onSubmit={formik.handleSubmit}>
        <Box mb={2}>
          <FormLabel>Upload Document (CV or other documents)</FormLabel>
          <input
            id="Documents"
            name="documents" // Corrected name here
            type="file"
            onChange={(event) => handleFileChange(event, 'documents')} // Corrected
          />
          {formik.touched.documents && formik.errors.documents && (
            <div style={{ color: 'red' }}>{formik.errors.documents}</div>
          )}
        </Box>

        <Box mb={2}>
          <FormLabel>Upload Signature Document</FormLabel>
          <input
            id="Signature"
            name="avatars" // Corrected name here
            type="file"
            onChange={(event) => handleFileChange(event, 'avatars')} // Corrected
          />
          {formik.touched.avatars && formik.errors.avatars && (
            <div style={{ color: 'red' }}>{formik.errors.avatars}</div>
          )}
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            id="DateOfResignation"
            name="DateOfResignation"
            label="Date of Resignation"
            type="date"
            value={formik.values.DateOfResignation}
            onChange={formik.handleChange}
            error={
              formik.touched.DateOfResignation &&
              Boolean(formik.errors.DateOfResignation)
            }
            helperText={
              formik.touched.DateOfResignation &&
              formik.errors.DateOfResignation
            }
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            id="ReasonForResignation"
            name="ReasonForResignation"
            label="Reason for Resignation"
            value={formik.values.ReasonForResignation}
            onChange={formik.handleChange}
            error={
              formik.touched.ReasonForResignation &&
              Boolean(formik.errors.ReasonForResignation)
            }
            helperText={
              formik.touched.ReasonForResignation &&
              formik.errors.ReasonForResignation
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

export default EmployeeResignationForm;
