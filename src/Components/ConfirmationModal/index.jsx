import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { changeStatus, updateTodoList } from "../../actions/todoActions";

const ConfirmationModal = (props) => {
  const { className } = props;
  const dispatch = useDispatch();
  const [spentHours, setSpentHours] = useState(0);

  const handleAction = () => {
    let status;
    if (props.data.action !== "Complete") {
      if (props.data.action === "ReOpen") {
        status = "Open";
      }
      if (props.data.action === "Cancel") {
        status = "Cancelled";
      }
      dispatch(changeStatus(props.data.task.id, status));
    } else {
      props.data.task.status = "Done";
      props.data.task.spentHours = spentHours;
      dispatch(updateTodoList(props.data.task));
    }
    props.toggleModal();
  };

  const setHours = (e) => {
    setSpentHours(e.target.value);
  };

  return (
    <div>
      <Modal
        isOpen={props.isModalOpen}
        toggle={props.toggleModal}
        className={className}
      >
        <ModalHeader toggle={props.toggleModal}>Confirmation</ModalHeader>
        <ModalBody>
          {props.data.action !== "Complete" ? (
            <span>Are you sure you want to {props.data.action} the task?</span>
          ) : (
            <>
              <div>Please enter the hours spent</div>
              <Input type="number" onChange={(event) => setHours(event)} />
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAction}>
            Yes
          </Button>{" "}
          <Button color="secondary" onClick={props.toggleModal}>
            No
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ConfirmationModal;
