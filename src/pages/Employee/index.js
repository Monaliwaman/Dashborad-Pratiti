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
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getEmployees,
  handleAddEmployeeData,
  handleEditEmployee,
  //handleAddEmployee,
  //initialEmployeeData,
} from '../../redux/employee/action'
import { objectsDifference } from '../../utils'
import Icon from '@material-ui/core/Icon'
import EmployeeModel from '../../components/EmployeeModel'
import TextField from '@material-ui/core/TextField'
//import '../../assets/scss/asset_page.scss'

const initialEmployeeData = {
  employeeId: '',
  name: '',
  email: '',
  contact: '',
  address: '',
  projectGroup: '',
  projectName: '',
  status: 'Active',
}
const Employee = () => {
  const [isModal, setIsModal] = useState(false)

  const [employeeData, setEmployeeData] = useState(initialEmployeeData)
  var data = useSelector((state) => state.employee.employees) //useSelector is used for call state
  const [isEdit, setIsEdit] = useState(false)
  const [isView, setIsView] = useState(false)
  const [employeesData, setEmployeesData] = useState([])
  useEffect(() => {
    setEmployeesData(data.list)
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
      setEmployeeData(initialEmployeeData)
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

  const submitAddEmployee = (val) => {
    // e.preventDefault()
    setEmployeeData(initialEmployeeData)

    dispatch(handleAddEmployeeData(val))
    setEmployeeData(initialEmployeeData)
    toggle()
  }

  const editEmployeeDetails = (val) => {
    // e.preventDefault()
    // const { id } = vendorData
    // const oldData = vendorsData?.find((item) => item.id === val?.id)
    // console.log('oldData', oldData, vendorData)
    const data = objectsDifference(val, employeeData)
    console.log('datadatadatadata', data)

    dispatch(handleEditEmployee(val?.employeeId, data))
    toggle()
    setIsEdit(false)
    setEmployeeData(initialEmployeeData)
  }

  const handleAddEmployee = () => {
    if (isView) {
      setEmployeeData(initialEmployeeData)
    }
    setEmployeeData(initialEmployeeData)
    setIsEdit(false)
    setIsView(false)
    toggle()
  }

  const handleEdit = (employee) => {
    setEmployeeData(employee)
    setIsView(false)
    setIsEdit(true)
    toggle()
  }

  const handleView = (employee) => {
    setIsView(true)
    setIsEdit(false)
    setEmployeeData(employee)
    toggle()
  }
  //using callback function
  useEffect(() => {
    dispatch(getEmployees()) // call action---this is method
  }, [dispatch]) //don't render multiple time----pass dispatch

  const getDataFrom = (text) => {
    if (text.target.value === '') {
      setEmployeesData(data.list)
    } else {
      const textData = text.target.value
      let result = employeesData.filter((item) => {
        if (item.name.toLowerCase().includes(textData.toLowerCase())) {
          return item
        }
        return false
      })
      setEmployeesData(result)
    }
  }
  return (
    <Fragment>
      <EmployeeModel
        open={isModal}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        // handleInputChange={handleInputChange}
        addModelEmployee={submitAddEmployee}
        editEmployee={editEmployeeDetails}
        values={employeeData}
        isEdit={isEdit}
        isView={isView}
        initialEmployeeData={initialEmployeeData}
      />
      <Box className="page-content">
        <Card p={3} className="card">
          <div
            className="d-flex justify-content-between"
            style={{ paddingBottom: '20px' }}
          >
            <div style={{ marginTop: '10px' }}>
              <Typography
                variant="h5"
                style={{ fontWeight: '700', textIndent: '25px ' }}
              >
                Employee Management
              </Typography>
            </div>

            <div className="d-flex">
              <div className="searchField" style={{ marginTop: '5px' }}>
                <TextField
                  style={{
                    height: '10px',
                  }}
                  // style={{ width: '100%' }}
                  onChange={(e) => getDataFrom(e)}
                  variant="outlined"
                  label="Search By Name"
                />
              </div>
              <div style={{ marginRight: '15px', marginLeft: '15px' }}>
                <Button
                  style={{
                    height: '45px',
                    //marginBottom: '10px',
                    //marginTop: '10px',
                    background: '#4294e8',
                    color: 'white',
                    fontWeight: '600',
                    boxShadow: '0 5px #666',
                    transform: 'translateY(4px)',
                    borderRadius: '15px',
                  }}
                  variant="contained"
                  // className="button"
                  onClick={() => handleAddEmployee()}
                >
                  Add Employee
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
              <TableRow className="employee-table">
                <TableCell
                  align="center"
                  className="employee-text"
                  style={{
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: '700',
                    boxShadow: '0 5px #666',
                  }}
                >
                  Employee Id
                </TableCell>
                <TableCell
                  align="center"
                  className="employee-text"
                  style={{
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: '700',
                    boxShadow: '0 5px #666',
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  align="center"
                  className="employee-text"
                  style={{
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: '700',
                    boxShadow: '0 5px #666',
                  }}
                >
                  Email
                </TableCell>
                <TableCell
                  align="center"
                  className="employee-text"
                  style={{
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: '700',
                    boxShadow: '0 5px #666',
                  }}
                >
                  Contact Number
                </TableCell>
                <TableCell
                  align="center"
                  className="employee-text"
                  style={{
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: '700',

                    boxShadow: ' 0 5px #666',
                  }}
                >
                  Project Group
                </TableCell>
                <TableCell
                  align="center"
                  className="employee-text"
                  style={{
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: '700',
                    boxShadow: '0 5px #666',
                  }}
                >
                  Project Name
                </TableCell>
                <TableCell
                  align="center"
                  className="employee-text"
                  style={{
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: '700',
                    boxShadow: '0 5px #666',
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  align="center"
                  className="employee-text"
                  style={{
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: '700',
                    boxShadow: '0 5px #666',
                    marginRight: '10px',
                    paddingRight: '30px',
                  }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employeesData?.map((employee, index) => {
                return (
                  <TableRow>
                    <TableCell align="center"> {employee.employeeId}</TableCell>
                    <TableCell
                      align="center"
                      component="th"
                      scope="row"
                      className="text-capital"
                    >
                      {employee.name}
                    </TableCell>
                    <TableCell align="center"> {employee.email}</TableCell>
                    <TableCell align="center">{employee.contact}</TableCell>
                    <TableCell align="center">
                      {employee.projectGroup}
                    </TableCell>
                    <TableCell align="center">{employee.projectName}</TableCell>
                    <TableCell align="center">{employee.status}</TableCell>
                    <TableCell align="center">
                      {
                        <>
                          <Icon
                            title="View"
                            onClick={() => handleView(employee)}
                            className="mdi mdi-eye font-size-18 mr-3"
                            // color="primary"
                            style={{ color: 'green' }}
                          />
                          <Icon
                            title="Edit"
                            // component="label"
                            onClick={() => handleEdit(employee)}
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

          {/* <Grid className="update-title">
            <Button className="btn-save" variant="contained">
              Update
            </Button>
          </Grid> */}
        </Card>
      </Box>
    </Fragment>
  )
}

export default Employee
