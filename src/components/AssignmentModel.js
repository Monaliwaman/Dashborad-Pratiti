import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  // FormControl,
  // FormControlLabel,
  // FormLabel,
  // Radio,
  // RadioGroup,
  TextField,
} from '@material-ui/core'
// import { Button } from 'bootstrap'
import React from 'react'

const AssignmentModel = ({
  open,
  handleClose,
  isView,
  handleInputChange,
  values,
  isEdit,
  editAsset,
  addModelAsset,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {isEdit
          ? 'EDIT ASSIGNMENT'
          : isView
          ? 'ASSIGNMENT DETAILS'
          : 'ADD NEW ASSIGNMENT'}
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="number"
          label="Asset Serial No."
          type="name"
          fullWidth
          name="serialNo"
          variant={!isView ? 'outlined' : 'standard'}
          disabled={!isView ? false : true}
          value={values.serialNo}
          onChange={handleInputChange}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="name"
          label="Employee Name"
          type="name"
          fullWidth
          name="employeeName"
          variant={!isView ? 'outlined' : 'standard'}
          disabled={!isView ? false : true}
          value={values.employeeName}
          onChange={handleInputChange}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="number"
          label="Contact No."
          type="name"
          fullWidth
          name="contact"
          variant={!isView ? 'outlined' : 'standard'}
          disabled={!isView ? false : true}
          value={values.contact}
          onChange={handleInputChange}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="name"
          label="Assignment Date"
          type="name"
          fullWidth
          name="assignmentDate"
          variant={!isView ? 'outlined' : 'standard'}
          disabled={!isView ? false : true}
          value={values.assignmentDate}
          onChange={handleInputChange}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="date"
          label="Return Date"
          type="name"
          fullWidth
          name="returnDate"
          variant={!isView ? 'outlined' : 'standard'}
          disabled={!isView ? false : true}
          value={values.returnDate}
          onChange={handleInputChange}
        />
        <TextField
          className="text-field"
          // autoFocus
          margin="dense"
          multiline //increase Description height
          rows={3} //increase Description height
          maxRows={20} //increase Description height
          id="name"
          label="Description"
          type="name"
          fullWidth
          name="description"
          variant={!isView ? 'outlined' : 'standard'}
          disabled={!isView ? false : true}
          value={values.description}
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        {!isView && (
          <Button onClick={!isEdit ? addModelAsset : editAsset}>
            {!isEdit ? 'submit' : 'Edit Assignment'}
          </Button>
        )}{' '}
      </DialogActions>
    </Dialog>
  )
}

export default AssignmentModel
