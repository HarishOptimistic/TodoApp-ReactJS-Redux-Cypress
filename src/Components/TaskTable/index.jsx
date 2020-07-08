import React, { useEffect, useState } from "react";
import { Table, Button, Input, Badge } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

import TaskModal from "../TaskModal";
import ConfirmationModal from "../ConfirmationModal";
import { bulkUpdate } from "../../actions/todoActions";
import "./TaskTable.css";

const TaskList = (props) => {
  const todoList = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [taskDetails, setTaskDetails] = useState(todoList.todos);
  const [modal, setModal] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [selectedData, setSelectedData] = useState(todoList.todos[0]);
  const [confirmationModalData, setConfirmationModalData] = useState({});
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    if (props.status) {
      setTaskDetails(
        todoList.todos.filter((details) => details.status === props.status)
      );
    } else {
      setTaskDetails(todoList.todos);
    }
  }, [props.status, todoList]);

  const toggle = () => setModal(!modal);
  const confirmationModalToggle = () =>
    setConfirmationModal(!confirmationModal);

  const handleEdit = (data) => {
    setSelectedData(data);
    toggle();
  };

  const handleSearch = (e) => {
    setTaskDetails(
      todoList.todos.filter((details) =>
        details.title.toLowerCase().includes(e.target.value)
      )
    );
  };

  const showConfirmationModal = (data, action) => {
    setConfirmationModalData({ task: data, action: action });
    confirmationModalToggle();
  };

  const handleToggle = (event, value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const bulkComplete = () => {
    const finalArray = todoList.todos.map((todo) => {
      checked.forEach((id) => {
        if (todo.id === id) {
          todo.status = "Done";
        }
      });
      return todo;
    });
    dispatch(bulkUpdate(finalArray));
    setChecked([]);
  };

  return (
    <>
      <TaskModal isModalOpen={modal} toggleModal={toggle} data={selectedData} />
      <ConfirmationModal
        isModalOpen={confirmationModal}
        toggleModal={confirmationModalToggle}
        data={confirmationModalData}
      />
      <div className="row">
        {!props.status && (
          <Input
            placeholder="Search Task"
            className="search"
            onChange={(event) => handleSearch(event)}
          />
        )}
        {checked.length > 0 && (
          <Button
            color="success"
            className="margin-20"
            onClick={() => bulkComplete()}
          >
            Complete
          </Button>
        )}
      </div>
      <Table striped className="todo-list-table">
        <thead>
          <tr>
            <th className="flex">
              <div>#</div>
            </th>
            <th>Status</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Due by</th>
            <th>Expected Hours</th>
            <th>Priority</th>
            <th>Spent Hours</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {taskDetails.map((data) => (
            <tr key={data.id}>
              <td className="flex">
                {data.status === "Open" && (
                  <Input
                    type="checkbox"
                    onClick={(event) => handleToggle(event, data.id)}
                  />
                )}{" "}
                {data.id}
              </td>
              <td>{data.status}</td>
              <td>{data.title}</td>
              <td>{data.description}</td>
              <td>{data.createdAt}</td>
              <td>{data.dueBy}</td>
              <td>{data.expectedHours}</td>
              <td>{data.priority}</td>
              <td>
                {data.spentHours}
                <>
                  {data.spentHours > data.expectedHours && (
                    <>
                      <svg
                        width="2em"
                        height="2em"
                        viewBox="0 0 16 16"
                        className="bi bi-arrow-up"
                        fill="red"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M7.646 2.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8 3.707 5.354 6.354a.5.5 0 1 1-.708-.708l3-3z"
                        />
                      </svg>
                      <Badge color="danger">
                        -{data.spentHours - data.expectedHours}
                      </Badge>
                    </>
                  )}
                  {data.spentHours < data.expectedHours && (
                    <svg
                      width="2em"
                      height="2em"
                      viewBox="0 0 16 16"
                      className="bi bi-arrow-down"
                      fill="green"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 9.646a.5.5 0 0 1 .708 0L8 12.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M8 2.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5z"
                      />
                    </svg>
                  )}
                </>{" "}
              </td>
              <td>
                <Button
                  color="primary"
                  size="sm"
                  onClick={() => handleEdit(data)}
                >
                  Edit
                </Button>{" "}
                {data.status === "Open" ? (
                  <Button
                    color="success"
                    size="sm"
                    onClick={() => showConfirmationModal(data, "Complete")}
                  >
                    Complete
                  </Button>
                ) : null}{" "}
                {data.status === "Open" ? (
                  <Button
                    color="danger"
                    size="sm"
                    onClick={() => showConfirmationModal(data, "Cancel")}
                  >
                    Delete
                  </Button>
                ) : null}{" "}
                {data.status === "Done" || data.status === "Cancelled" ? (
                  <Button
                    color="warning"
                    size="sm"
                    onClick={() => showConfirmationModal(data, "ReOpen")}
                  >
                    ReOpen
                  </Button>
                ) : null}{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TaskList;
