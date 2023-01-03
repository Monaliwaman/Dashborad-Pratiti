import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Card,
  //Grid,
  TableHead,
  Divider,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Typography,

  //IconButton,
  //SearchBar,
} from '@material-ui/core'
import { Pagination } from '@mui/material'

import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getVendors,
  handleAddVendorData,
  handleEditVendor,
} from '../../redux/vendor/actions'
import { objectsDifference } from '../../utils'
import Icon from '@material-ui/core/Icon'
import VendorModel from '../../components/VendorModel'
import TextField from '@material-ui/core/TextField'
import '../../assets/scss/asset_page.scss'

const initialVendorData = {
  name: '',
  email: '',
  contactNumber: '',
  address: '',
  gstNumber: '',
  addedDate: '',
  status: 'Active',
}
const Vendor = () => {
  const [isModal, setIsModal] = useState(false)

  const [vendorData, setVendorData] = useState(initialVendorData)
  var data = useSelector((state) => state.vendor.vendors) //useSelector is used for call state
  const [isEdit, setIsEdit] = useState(false)
  const [isView, setIsView] = useState(false)
  const [vendorsData, setVendorsData] = useState([])
  const [page, setPage] = useState(1)

  const handleChange = (e, p) => {
    console.log(e, p)
    setPage(p)
  }

  useEffect(() => {
    setVendorsData(data.list)
  }, [data])
  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setIsModal(!isModal)
  }

  const handleClose = () => {
    setIsModal(!isModal)
  }
  const toggle = () => {
    setIsModal(!isModal)
    if (isModal && isEdit) {
      setVendorData(initialVendorData)
      setIsEdit(false)
    }
  }

  // const handleInputChange = (e) => {
  //   let { name, value } = e.target
  //   console.log('e.target', e.target.value)
  //   setVendorData({
  //     ...vendorData,
  //     [name]: value,
  //   })
  // }

  const submitAddVendor = (val) => {
    // e.preventDefault()
    setVendorData(initialVendorData)

    dispatch(handleAddVendorData(val))
    setVendorData(initialVendorData)
    toggle()
  }

  const editVendorDetails = (val) => {
    // e.preventDefault()
    // const { id } = vendorData
    // const oldData = vendorsData?.find((item) => item.id === val?.id)
    // console.log('oldData', oldData, vendorData)
    const data = objectsDifference(val, vendorData)
    console.log('datadatadatadata', data)

    dispatch(handleEditVendor(val?.id, data))
    toggle()
    setIsEdit(false)
    setVendorData(initialVendorData)
  }

  const handleAddVendor = () => {
    if (isView) {
      setVendorData(initialVendorData)
    }
    setVendorData(initialVendorData)
    setIsEdit(false)
    setIsView(false)
    toggle()
  }

  const handleEdit = (vendor) => {
    setVendorData(vendor)
    setIsView(false)
    setIsEdit(true)
    toggle()
  }

  const handleView = (vendor) => {
    setIsView(true)
    setIsEdit(false)
    setVendorData(vendor)
    toggle()
  }
  //using callback function
  useEffect(() => {
    dispatch(getVendors()) // call action---this is method
  }, [dispatch]) //don't render multiple time----pass dispatch

  const getDataFrom = (text) => {
    if (text.target.value === '') {
      setVendorsData(data.list)
    } else {
      const textData = text.target.value
      let result = vendorsData.filter((item) => {
        if (item.name.toLowerCase().includes(textData.toLowerCase())) {
          return item
        }
        return false
      })
      setVendorsData(result)
    }
  }

  return (
    <Fragment>
      <VendorModel
        open={isModal}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        // handleInputChange={handleInputChange}
        addModelVendor={submitAddVendor}
        editVendor={editVendorDetails}
        values={vendorData}
        isEdit={isEdit}
        isView={isView}
        initialVendorData={initialVendorData}
      />
      <Box className="page-content">
        <Card p={3} className="card" style={{ paddingTop: '10px' }}>
          <div
            className="d-flex justify-content-between"
            style={{ paddingBottom: '20px' }}
          >
            <div style={{ marginTop: '10px' }}>
              <Typography
                variant="h5"
                style={{ fontWeight: '700', textIndent: '25px ' }}
              >
                Vendor Management
              </Typography>
            </div>

            <div className="d-flex">
              <div className="searchField" style={{ marginTop: '5px' }}>
                <TextField
                  style={{ height: '10px' }}
                  // style={{ width: '100%' }}
                  onChange={(e) => getDataFrom(e)}
                  variant="outlined"
                  label="Search By Name"
                />
              </div>
              <div
                style={{
                  marginRight: '15px',
                  marginLeft: '15px',
                  //marginBottom: '25px',
                }}
              >
                <Button
                  style={{
                    height: '45px',
                    //marginBottom: '5px',
                    //marginTop: '10px',
                    background: '#4294e8',
                    color: 'white',
                    boxShadow: '0 5px #666',
                    transform: 'translateY(4px)',
                    fontWeight: '600',
                    borderRadius: '15px',
                  }}
                  variant="contained"
                  // className="button"
                  onClick={() => handleAddVendor()}
                >
                  Add Vendor
                </Button>
              </div>
            </div>
          </div>
          {/* <Grid container item xs={12} className="update-title">
            <Grid container item xs={6}>
              <Typography
                variant="h5"
                style={{ fontWeight: '700', textIndent: '25px ' }}
              >
                Vendor Management
              </Typography>
            </Grid>

            <Grid container item xs={3}>
              <TextField
                onChange={(e) => getDataFrom(e)}
                variant="outlined"
                label="Search Box"
              />
            </Grid>

            <Grid container item xs={2} style={{ marginLeft: '55px' }}>
              <Button
                style={{
                  marginBottom: '10px',
                  background: '#4294e8',
                  color: 'white',
                  fontWeight: '600',
                }}
                variant="contained"
                // className="button"
                onClick={() => handleAddVendor()}
              >
                Add Vendor
              </Button>
            </Grid>
          </Grid> */}
          <Divider />
          <Table aria-label="simple table">
            <TableHead style={{ background: '#4294e8' }}>
              <TableRow className="vendor-table">
                <TableCell
                  align="center"
                  className="vendor-text"
                  style={{
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: '700',
                    boxShadow: '0 5px #666',
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  align="center"
                  className="vendor-text"
                  style={{
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: '700',
                    boxShadow: '0 5px #666',
                  }}
                >
                  Email
                </TableCell>
                <TableCell
                  align="center"
                  className="vendor-text"
                  style={{
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: '700',
                    boxShadow: '0 5px #666',
                  }}
                >
                  Contact Number
                </TableCell>
                <TableCell
                  align="center"
                  className="vendor-text"
                  style={{
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: '700',
                    boxShadow: '0 5px #666',
                  }}
                >
                  GST Number
                </TableCell>
                <TableCell
                  align="center"
                  className="vendor-text"
                  style={{
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: '700',
                    boxShadow: '0 5px #666',
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  align="center"
                  className="vendor-text"
                  style={{
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: '700',
                    boxShadow: '0 5px #666',
                  }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vendorsData?.map((vendor, index) => {
                return (
                  <TableRow>
                    <TableCell
                      align="center"
                      component="th"
                      scope="row"
                      className="text-capital"
                    >
                      {vendor.name}
                    </TableCell>
                    <TableCell align="center"> {vendor.email}</TableCell>
                    <TableCell align="center">{vendor.contactNumber}</TableCell>
                    <TableCell align="center"> {vendor.gstNumber}</TableCell>
                    <TableCell align="center">{vendor.status}</TableCell>
                    <TableCell align="center">
                      {
                        <>
                          <Icon
                            title="View"
                            onClick={() => handleView(vendor)}
                            className="mdi mdi-eye font-size-18 mr-3"
                            // color="primary"
                            style={{ color: 'green' }}
                          />
                          <Icon
                            title="Edit"
                            // component="label"
                            onClick={() => handleEdit(vendor)}
                            className="mdi mdi-pencil font-size-18"
                            color="primary"
                          />
                        </>
                      }
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Card>

        <div className="pagination">
          <h5 style={{ marginLeft: '10px' }}>Current Page is {page}</h5>

          <Pagination
            style={{ marginLeft: '10px' }}
            count={20}
            color="primary"
            defaultPage={1}
            //variant="outlined"
            onChange={handleChange}
          ></Pagination>
        </div>
      </Box>
    </Fragment>
  )
}

export default Vendor
