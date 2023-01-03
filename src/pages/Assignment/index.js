import React, { useState } from 'react'
import {
  Box,
  Button,
  Card,
  Grid,
  TableHead,
  Divider,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  IconButton,
  Icon,
} from '@material-ui/core'
import { Fragment } from 'react'
import AssignmentModel from '../../components/AssignmentModel'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAssignment,
  handleAddAssignmentData,
  handleEditAssignment,
} from '../../redux/assignment/actions'
import { objectsDifference } from '../../utils'
// import { getAssignmentsApi } from '../../redux/assignment/api'
import { useEffect } from 'react'
import AssetModel from '../../components/AssetModel'
//import AddVendorDialog from '../../components/dialog/AddVendorDialog.js'
const initialAssignmentData = {
  serialNo: '',
  employeeName: '',
  contact: '',
  assignmentDate: '',
  returnDate: '',
  description: '',
}
const Assignment = () => {
  const [isModal, setIsModal] = useState(false)
  const [assgnmentData, setAssignmentData] = useState(initialAssignmentData)
  const assignmentsData = useSelector((state) => state.assignment.assignments)
  const [isEdit, setIsEdit] = useState(false)
  const [isView, setIsView] = useState(false)
  const dispatch = useDispatch()

  const handleClose = () => {
    setIsModal(!isModal)
  }
  const toggle = () => {
    setIsModal(!isModal)
    if (isModal && isEdit) {
      setAssignmentData(initialAssignmentData)
      setIsEdit(false)
    }
  }

  const handleAddAssignment = () => {
    if (isView) {
      setAssignmentData(initialAssignmentData)
    }
    setAssignmentData(initialAssignmentData)
    setIsEdit(false)
    setIsView(false)
    toggle()
  }

  const handleInputChange = (e) => {
    let { name, value } = e.target
    console.log('value', value)

    setAssignmentData({
      ...assgnmentData,
      [name]: value,
    })
  }

  const submitAddAssignment = (e) => {
    e.preventDefault()
    console.log('assgnmentData', assgnmentData)

    // setAssignmentData(initialAssignmentData)

    dispatch(handleAddAssignmentData(assgnmentData))
    setAssignmentData(initialAssignmentData)
    toggle()
    // setValue('')
    // setSelectedData([])
  }

  const editAssignmentDetails = (e) => {
    e.preventDefault()
    const { id } = assgnmentData
    const oldData = assignmentsData?.list?.find((item) => item.id === id)
    const data = objectsDifference(assgnmentData, oldData)
    dispatch(handleEditAssignment(id, data))
    toggle()
    setIsEdit(false)
    setAssignmentData(initialAssignmentData)
  }

  const handleEdit = (assignment) => {
    setAssignmentData(assignment)
    setIsView(false)
    setIsEdit(true)
    toggle()
  }

  const handleView = (assignment) => {
    console.log('242343')
    setIsView(true)
    setIsEdit(false)
    setAssignmentData(assignment)
    toggle()
  }

  useEffect(() => {
    dispatch(getAssignment())
  }, [dispatch])
  return (
    <Fragment>
      {/* components */}
      <AssignmentModel
        open={isModal}
        handleClose={handleClose}
        handleInputChange={handleInputChange}
        addModelAsset={submitAddAssignment}
        editAsset={editAssignmentDetails}
        values={assgnmentData}
        isEdit={isEdit}
        isView={isView}
        // setValue={setValue}
      />
      <Box className="page-content">
        <Card p={3} className="card">
          <Grid container item xs={12} className="update-title">
            <Grid container item xs={10}>
              <Typography variant="h6"> Assignment Management </Typography>
            </Grid>
            <Grid container item xs={2}>
              <Button
                style={{ marginBottom: '10px' }}
                variant="contained"
                className="button"
                onClick={handleAddAssignment} // function
              >
                ASSIGNMENT
              </Button>
            </Grid>
          </Grid>
          <Divider />
          <Table aria-label="simple table">
            <TableHead>
              <TableRow className="assignment-table">
                <TableCell align="center" className="assignment-text">
                  Assignment Serial No.
                </TableCell>
                <TableCell align="center" className="assignment-text">
                  Employee Name
                </TableCell>
                <TableCell align="center" className="assignment-text">
                  Contact No.
                </TableCell>
                <TableCell align="center" className="assignment-text">
                  Assignment Date
                </TableCell>
                <TableCell align="center" className="assignment-text">
                  Return Date
                </TableCell>
                {/* <TableCell align="center" className="assignment-text">
                  Description
                </TableCell> */}
                <TableCell align="center" className="assignment-text">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {assignmentsData?.list?.map((assignment, index) => {
                return (
                  <TableRow>
                    <TableCell
                      align="center"
                      componenelt="th"
                      scope="row"
                      className="text-capital"
                    >
                      {assignment.serialNo}
                    </TableCell>
                    <TableCell align="center">
                      {assignment.employeeName}
                    </TableCell>
                    <TableCell align="center">{assignment.contact}</TableCell>
                    <TableCell align="center">
                      {assignment.assignmentDate}
                    </TableCell>
                    <TableCell align="center">
                      {assignment.returnDate}
                    </TableCell>
                    <TableCell align="center">
                      {
                        <>
                          <Icon
                            onClick={() => handleView(assignment)}
                            className="mdi mdi-eye font-size-18 mr-3"
                            // color="primary"
                            style={{ color: 'green' }}
                          />
                          <Icon
                            onClick={() => handleEdit(assignment)}
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
      </Box>
    </Fragment>
  )
}

export default Assignment
