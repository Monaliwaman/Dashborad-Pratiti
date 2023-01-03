
import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { closeConfirmModel } from '../../redux/layout/actions';

const Confirm = () => {
 const dispatch = useDispatch();
const confirmationData = useSelector(state => state?.layout?.confirmationData);

const onConfirm = () => {
    dispatch(confirmationData?.callback(confirmationData.params))
    dispatch(closeConfirmModel());
}

  return (
      <Modal isOpen={confirmationData?.model} toggle={() => dispatch(closeConfirmModel())} >
        <ModalHeader>{confirmationData?.title}</ModalHeader>
        <ModalBody>
          {confirmationData?.message}
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => onConfirm()}>Delete</Button>{' '}
          <Button className="cancel-button" onClick={() => dispatch(closeConfirmModel())}>Cancel</Button>
        </ModalFooter>
      </Modal>
  );
}

export default Confirm;