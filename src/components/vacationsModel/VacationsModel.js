import React, { useState, useEffect } from 'react'
import { Row, Col, Alert, Label, Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, Input } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import moment from 'moment'
const VacationsModel = ({
  visible,
  toggle,
  addModelVacations,
  handleInputChange,
  values,
  isView,
  isEdit,
  editVacations,
}) => {
  const [currentVacation, setCurrentVacation] = useState();

  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const now = tomorrow.toJSON().split('T')[0];

  let sevenYearsAgo = new Date();
  sevenYearsAgo.setFullYear(sevenYearsAgo.getFullYear() + 10);
  sevenYearsAgo = sevenYearsAgo.toJSON().split('T')[0];

  const handleInput = (e) =>{
    let { name, value } = e.target;
    setCurrentVacation(value)
    handleInputChange(e)
  }

  return (
    <Modal
      isOpen={visible} toggle={toggle}
    >
      <ModalHeader toggle={toggle}>{isEdit ? 'Edit Vacations' : isView ? 'Vacations details' : 'Add Vacations'}</ModalHeader>
      <ModalBody>
        <AvForm onValidSubmit={addModelVacations}>
          <Row>
            <Col lg={12}>
              <AvForm>
                <Label htmlFor="from">From</Label>
                {
                  !isView ?
                     /* <AvField name="from" type="date" onChange={handleInputChange} value={moment(values.from).format("LL")}/>  */
                    /* <AvField name="dateRangeProp" label="Date" type="date" onChange={handleInputChange} required value={moment(values.from).format("LL")} validate={{ datetime: true, dateRange: { format: 'MM/DD/YYYY', start: { value: `${currentDate}` }, end: { value: '01/01/2030' } } }} title="Use MM/DD/YYYY" /> */
                    <AvField name="from" type="date" min={now} onChange={handleInput}  max={sevenYearsAgo}  helpMessage={isEdit && `${moment(values.from).format("LL")}`} 
                      validate={{
                        required: { value: true, errorMessage: 'From date is required!' },
                      }}
                     />
                :
                  <div>{moment(values.from).format("LL")}</div>
                }
              </AvForm>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <AvForm>
                <Label htmlFor="key_no">To</Label>
                {
                  !isView ?
                    <AvField name="to" type="date" onChange={handleInputChange} min={currentVacation} max={sevenYearsAgo} reqiured helpMessage={isEdit && `${moment(values.to).format("LL")}`} validate={{required: { value: true, errorMessage: 'From date is required!' }}}  />
                :
                    <div>{moment(values.to).format("LL")}</div>
                }
              </AvForm>
            </Col>
  
          </Row>
          <ModalFooter>
            {isView ? "" : !isEdit ? <Button color="primary">Add</Button> : <Button className="btn-info" onClick={(e) => editVacations(e)} >Save Changes</Button>}
            <Button color="secondary" onClick={() => toggle()}>Cancel</Button>
          </ModalFooter>
        </AvForm>
      </ModalBody>
    </Modal>
  )
}
export default VacationsModel;