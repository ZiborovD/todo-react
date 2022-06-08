import React, { useState } from "react";

function TodoInput({ setTasks }) {
  const [title, setTitle] = useState("");

  function handleKeyPress(event) {
    if (event.code === "Enter") {
      try {
        setTasks((prevState) => [
          ...prevState,
          { title, isDone: false, id: prevState.length },
        ]);

        event.target.value = "";
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
