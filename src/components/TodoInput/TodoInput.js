import React, { useState } from "react";

function TodoInput({ setTasks }) {
  const [title, setTitle] = useState("");

  function addTask(event) {
    setTasks((prevState) => [
      ...prevState,
      { title, isDone: false, id: prevState.length },
    ]);

    event.target.value = "";
  }

  function handleKeyPress(event) {
    if (event.code === "Enter") {
      try {
        addTask(event);
      } catch (error) {
        console.log(error);
      }
    }

    setTitle(event.target.value);
  }

  return (
    <input
      placeholder="Enter task name"
      type="text"
      className="task-input"
      onKeyPress={handleKeyPress}
    />
  );
}

export default TodoInput;
