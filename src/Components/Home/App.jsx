import React, { useState } from "react";
import { Button, Card, CardTitle, CardText } from "reactstrap";
import { useSelector } from "react-redux";
import { useHotkeys } from "react-hotkeys-hook";

import "./App.css";
import TaskModal from "../TaskModal";
import TabView from "../Tabview";

const App = () => {
  const [modal, setModal] = useState(false);

  const todoList = useSelector((state) => state.todos);

  const total = todoList.todos.length;
  const open = todoList.todos.filter((details) => details.status === "Open")
    .length;
  const completed = todoList.todos.filter(
    (details) => details.status === "Done"
  ).length;
  const cancelled = todoList.todos.filter(
    (details) => details.status === "Cancelled"
  ).length;

  const toggle = () => setModal(!modal);
  useHotkeys("ctrl+shift+a", () => toggle());

  return (
    <>
      <h1 className="app-header">Todo App</h1>
      <div className="add-task-main">
        <div className="dashboard row">
          <Card className="dashboard-card col">
            <CardTitle># Total Task</CardTitle>
            <CardText className="card-body">{total}</CardText>
          </Card>
          <Card className="dashboard-card col">
            <CardTitle># Open</CardTitle>
            <CardText className="card-body">{open}</CardText>
          </Card>
          <Card className="dashboard-card col">
            <CardTitle># Completed</CardTitle>
            <CardText className="card-body">{completed}</CardText>
          </Card>
          <Card className="dashboard-card col">
            <CardTitle># Cancelled</CardTitle>
            <CardText className="card-body">{cancelled}</CardText>
          </Card>
        </div>
        <Button color="danger" onClick={toggle}>
          Add Task
        </Button>
        <p className="keyboard-shortcut">(Ctrl+Shift+A)</p>
      </div>
      <TaskModal isModalOpen={modal} toggleModal={toggle} />
      <TabView />
    </>
  );
};
export default App;
