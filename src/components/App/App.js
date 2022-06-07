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

  function showTasks() {
    return tasks.map(function (item, index) {
      return (
        <li key={index}>
          <input type="checkbox"></input>
          <input className="butt-delete" type="button" value="удалить"></input>
          {item.title}
        </li>
      );
    });
  }

  return (
    <>
      <TodoInput setTasks={setTasks} />
      <TaskList showTasks={showTasks} />
    </>
  );
}

export default App;
