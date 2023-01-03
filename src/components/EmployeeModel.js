import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  //SearchBar,
  DialogTitle,
} from '@material-ui/core'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useEffect } from 'react'

const EmployeeModel = ({
  open,
  handleClose,
  handleInputChange,
  addModelEmployee,
  editEmployeeDetails,
  values,
  isView,
  isEdit,
  editEmployee,
  initialEmployeeData,
}) => {
  useEffect(() => {
    if (isEdit || isView) {
      formik?.setValues(values)
    } else if (!isView && !isEdit) {
      formik.resetForm()
    }
  }, [values])

  const formik = useFormik({
    initialValues: {
      employeeId: '',
      name: '',
      email: '',
      address: '',
      contact: '',
      projectGroup: '',
      projectName: '',
      status: 'Active',
    },
    validationSchema: Yup.object({
      employeeId: Yup.number().required(' Employee Id is required!'),
      name: Yup.string()

        .required('Name is required')
        .min(6, 'Name must be at least 6 characters')
        .max(20, 'Name must not exceed 20 characters'),
      email: Yup.string()
        .email('Invalid email address')

        .required('Email is required'),
      address: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Address is required!'),
      contact: Yup.string().required(' Contact Number is required!'),
      projectGroup: Yup.string().required(' Project Group is required!'),
      projectName: Yup.string().required('Project Name is required!'),
      status: Yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      if (!isEdit) {
        //values.preventDefault()
        addModelEmployee(values)
        resetForm()
      } else {
        editEmployee(values)
        resetForm()
      }
      // console.log(JSON.stringify(values, null, 2))
    },
  })
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle
        id="form-dialog-title"
        style={{
          margin: '10px 22px 10px 22px',
          //fontSize: '20px',
          //fontWeight: '700',
          background: '#4294e8',
          color: 'white',
          textAlign: 'center',
          // fontFamily: 'Fantasy',
        }}
      >
        ADD Employee
      </DialogTitle>
      {/* <Button
        style={{
          margin: '10px 22px 10px 22px',
          fontSize: '20px',
          fontWeight: '700',
          background: '#4294e8',
          color: 'white',
        }}
      >
        ADD VENDOR
      </Button> */}
      {/* 
      <DialogTitle
        style={{
          margin: '10px 22px 10px 22px',
          textAlign: 'center',
          fontSize: '30px',
          fontWeight: '600',
          background: '#4294e8',
          color: 'white',
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        {isEdit ? 'Edit Employee' : isView ? 'Employee Details' : 'ADD VENDOR'}
      </DialogTitle> */}

      {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <TextField
            margin="dense"
            variant={!isView ? 'outlined' : 'standard'}
            id="number"
            label="Employee Id"
            type="name"
            fullWidth
            required
            disabled={!isView ? false : true}
            name="employeeId"
            // value={values.contact}
            // onChange={handleInputChange}
            value={formik.values.employeeId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.employeeId && formik.errors.employeeId ? (
            <div style={{ color: 'red' }}>{formik.errors.employeeId}</div>
          ) : null}

          <TextField
            autoFocus
            margin="dense"
            variant={!isView ? 'outlined' : 'standard'}
            disabled={!isView ? false : true}
            id="name"
            label="Name"
            type="name"
            fullWidth
            name="name"
            required
            // onChange={handleInputChange}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div style={{ color: 'red' }}>{formik.errors.name}</div>
          ) : null}
          <TextField
            margin="dense"
            variant={!isView ? 'outlined' : 'standard'}
            id="name"
            label="Email"
            type="email"
            name="email"
            fullWidth
            required
            disabled={!isView ? false : true}
            // value={values.email}
            // onChange={handleInputChange}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          ) : null}
          <TextField
            margin="dense"
            variant={!isView ? 'outlined' : 'standard'}
            id="name"
            label="Address"
            type="address"
            fullWidth
            required
            name="address"
            disabled={!isView ? false : true}
            // value={values.address}
            // onChange={handleInputChange}
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.address && formik.errors.address ? (
            <div style={{ color: 'red' }}>{formik.errors.address}</div>
          ) : null}
          <TextField
            margin="dense"
            variant={!isView ? 'outlined' : 'standard'}
            id="number"
            label="Contact Number"
            type="name"
            fullWidth
            required
            disabled={!isView ? false : true}
            name="contact"
            // value={values.contact}
            // onChange={handleInputChange}
            value={formik.values.contact}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.contact && formik.errors.contact ? (
            <div style={{ color: 'red' }}>{formik.errors.contact}</div>
          ) : null}

          <TextField
            margin="dense"
            id="name"
            label="Project Group"
            type="text"
            fullWidth
            required
            name="projectGroup"
            variant={!isView ? 'outlined' : 'standard'}
            disabled={!isView ? false : true}
            // value={values.gstNumber}
            // onChange={handleInputChange}
            value={formik.values.projectGroup}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.projectGroup && formik.errors.projectGroup ? (
            <div style={{ color: 'red' }}>{formik.errors.projectGroup}</div>
          ) : null}

          <TextField
            margin="dense"
            id="name"
            label="Project Name"
            type="text"
            fullWidth
            required
            name="projectName"
            variant={!isView ? 'outlined' : 'standard'}
            disabled={!isView ? false : true}
            // value={values.gstNumber}
            // onChange={handleInputChange}
            value={formik.values.projectName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.projectName && formik.errors.projectName ? (
            <div style={{ color: 'red' }}>{formik.errors.projectName}</div>
          ) : null}

          <FormControl style={{ marginTop: '10px' }}>
            <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
            {!isView ? (
              <FormControl component="fieldset">
                <RadioGroup
                  row
                  aria-label="status"
                  name="status"
                  // onChange={handleInputChange}
                  onChange={formik.handleChange}
                  value={formik.values.status}

                  // value={values.status}
                >
                  <FormControlLabel
                    value="Active"
                    control={<Radio />}
                    label={<div style={{ fontSize: '1rem' }}>Active</div>}
                    labelPlacement="Active"
                  />

                  <FormControlLabel
                    value="Inactive"
                    control={<Radio />}
                    label={<div style={{ fontSize: '1rem' }}>Inactive</div>}
                    labelPlacement="Inactive"
                  />
                </RadioGroup>
              </FormControl>
            ) : (
              <div>{values.status}</div>
            )}
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            style={{
              marginBottom: '45px',
              background: '#4294e8',
              color: 'white',
              fontWeight: '600',
              boxShadow: '0 5px #666',
              transform: 'translateY(4px)',
              borderRadius: '15px',
            }}
          >
            Cancel
          </Button>
          {!isView && (
            <Button
              type="submit"
              // onClick={!isEdit ? addModelVendor : editVendor}
              style={{
                marginBottom: '45px',
                background: '#4294e8',
                color: 'white',
                boxShadow: '0 5px #666',
                transform: 'translateY(4px)',
                fontWeight: '600',
                marginRight: '20px',
                borderRadius: '15px',
              }}
            >
              {!isEdit ? 'submit' : 'submit'}
            </Button>
          )}
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default EmployeeModel
