import React, { useState } from "react";

function TodoInput({ setTasks }) {
  const [title, setTitle] = useState("");

  function handleKeyPress(event) {
    if (event.code === "Enter") {
      try {
        setTasks((prevState) => [...prevState, { title, isDone: false }]);

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
      id="inp"
      onKeyPress={handleKeyPress}
    />
  );
}

export default TodoInput;
