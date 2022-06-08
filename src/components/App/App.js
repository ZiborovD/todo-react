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

  function deleteTask(itemId) {
    setTasks((prevState) => prevState.filter((item) => item.id !== itemId));
  }

  return (
    <>
      <TodoInput setTasks={setTasks} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;
