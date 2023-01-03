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
  //
  Grid,
} from '@material-ui/core'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useEffect } from 'react'

const VendorModel = ({
  open,
  handleClose,
  handleInputChange,
  addModelVendor,
  editVendorDetails,
  values,
  isView,
  isEdit,
  editVendor,
  initialVendorData,
}) => {
  useEffect(() => {
    if (isEdit || isView) {
      formik?.setValues(values)
    } else if (!isView && !isEdit) {
      formik.resetForm()
    }
  }, [values])
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  //const gstRegExp = /^([0][1-9]|[1-2][0-9]|[3][0-7])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      address: '',
      contactNumber: '',
      gstNumber: '',
      addedDate: '',
      status: 'Active',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required!')
        .min(6, 'Name must be at least 6 characters')
        .max(20, 'Name must not exceed 20 characters'),

      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),

      address: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Address is required!'),

      contactNumber: Yup.string()
        .required('Contact number is required!')
        .min(10, 'too short')
        .max(10, 'too long'),

      gstNumber: Yup.string().required(' Gst Number is required!'),

      addedDate: Yup.string().required('Added date is required!'),

      status: Yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      if (!isEdit) {
        addModelVendor(values)
        resetForm()
      } else {
        editVendor(values)
        resetForm()
      }
      // console.log(JSON.stringify(values, null, 2))
    },
  })
  console.log(formik)
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
        ADD VENDOR
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
        {isEdit ? 'Edit Vendor' : isView ? 'Vendor Details' : 'ADD VENDOR'}
      </DialogTitle> */}

      {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
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
          {formik?.touched?.name && formik.errors.name ? (
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
          {formik?.touched?.email && formik.errors.email ? (
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
          {formik?.touched?.address && formik.errors.address ? (
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
            name="contactNumber"
            // value={values.contactNumber}
            // onChange={handleInputChange}
            value={formik.values.contactNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik?.touched?.contactNumber && formik.errors.contactNumber ? (
            <div style={{ color: 'red' }}>{formik.errors.contactNumber}</div>
          ) : null}
          <TextField
            margin="dense"
            id="gstno"
            label="GST Number"
            type="name"
            fullWidth
            required
            name="gstNumber"
            variant={!isView ? 'outlined' : 'standard'}
            disabled={!isView ? false : true}
            // value={values.gstNumber}
            // onChange={handleInputChange}
            value={formik.values.gstNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik?.touched?.gstNumber && formik.errors.gstNumber ? (
            <div style={{ color: 'red' }}>{formik.errors.gstNumber}</div>
          ) : null}

          <TextField
            style={{ marginTop: '20px' }}
            margin="dense"
            variant={!isView ? 'outlined' : 'standard'}
            id="date"
            label="Added Date (YYYY-MM-DD)"
            type="name"
            name="addedDate"
            fullWidth
            required
            disabled={!isView ? false : true}
            // value={values.addedDate}
            // onChange={handleInputChange}
            value={formik.values.addedDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik?.touched?.addedDate && formik.errors.addedDate ? (
            <div style={{ color: 'red' }}>{formik.errors.addedDate}</div>
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
              boxShadow: '0 5px #666',
              transform: 'translateY(4px)',
              fontWeight: '600',
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

export default VendorModel
