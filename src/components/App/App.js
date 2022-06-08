import React, { useEffect, useState } from "react";
import TodoInput from "../TodoInput/TodoInput";
import TaskList from "../TaskList/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  function loadTasks() {
    setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
  }

  useEffect(() => loadTasks(), []);
  useEffect(
    () => localStorage.setItem("tasks", JSON.stringify(tasks)),
    [tasks]
  );

  return (
    <>
      <TodoInput setTasks={setTasks} />
      <TaskList setTasks={setTasks} tasks={tasks} />
    </>
  );
}

export default App;
