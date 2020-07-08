import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
} from "reactstrap";
import DatePicker from "reactstrap-date-picker";
import { useDispatch } from "react-redux";

import { setTodoList, updateTodoList } from "../../actions/todoActions";

const TaskModal = (props) => {
  const { className } = props;
  const todoItem = {
    id: Math.floor(Math.random() * 10000),
    title: "",
    description: "",
    dueByValue: "",
    dueBy: "",
    expectedHours: "",
    priority: "",
    status: "Open",
    spentHours: "0",
    createdAt: new Date().toDateString(),
  };
  const [data, setData] = useState(todoItem);
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.data) {
      setData(props.data);
    }
  }, [props.data]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(setTodoList(data));
    props.toggleModal();
    setData(todoItem);
  };

  const handleSave = () => {
    data.status = "Open";
    dispatch(updateTodoList(data));
    props.toggleModal();
    setData(todoItem);
  };

  function isEquivalent(a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    if (aProps.length !== bProps.length) {
      return false;
    }
    for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i];

      if (a[propName] !== b[propName]) {
        return false;
      }
    }
    return true;
  }

  return (
    <div>
      <Modal
        isOpen={props.isModalOpen}
        toggle={props.toggleModal}
        className={className}
        backdrop={true}
        keyboard={true}
      >
        <ModalHeader toggle={props.toggleModal}>Enter task details</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Title</Label>
              <Input
                required
                type="text"
                name="title"
                id="title"
                value={data.title}
                onChange={(event) => handleChange(event)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Description</Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                value={data.description}
                onChange={(event) => handleChange(event)}
              />
            </FormGroup>

            <FormGroup>
              <Label>Due By</Label>
              <DatePicker
                name="dueBy"
                id="dueBy"
                value={data.dueByValue}
                onChange={(value, formattedVal) => {
                  data.dueBy = formattedVal;
                  data.dueByValue = value;
                }}
              />
            </FormGroup>

            <FormGroup>
              <Label>Expected Hours</Label>
              <Input
                type="number"
                name="expectedHours"
                id="expectedHours"
                min={0}
                value={data.expectedHours}
                onChange={(event) => handleChange(event)}
              />
            </FormGroup>

            <FormGroup>
              <Label>Priority</Label>
              <Input
                type="select"
                name="priority"
                id="priority"
                value={data.priority}
                onChange={(event) => handleChange(event)}
              >
                <option>Select</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          {props.data ? (
            <Button
              color="primary"
              onClick={() => handleSave()}
              disabled={!data.title || isEquivalent(props.data, data)}
            >
              Save
            </Button>
          ) : (
            <Button
              color="primary"
              onClick={() => handleSubmit()}
              disabled={!data.title}
            >
              Create Task
            </Button>
          )}

          <Button color="secondary" onClick={props.toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default TaskModal;
