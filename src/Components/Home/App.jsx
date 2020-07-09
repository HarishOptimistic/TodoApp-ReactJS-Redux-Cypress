import React, { useState } from "react";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";
import { useHotkeys } from "react-hotkeys-hook";

import "./App.css";
import TaskModal from "../TaskModal";
import TabView from "../Tabview";
import Dashboard from "../Dashboard";

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
        <Dashboard
          total={total}
          open={open}
          completed={completed}
          cancelled={cancelled}
        />
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
