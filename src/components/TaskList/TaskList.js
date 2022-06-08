import React from "react";

function TaskList({ tasks, deleteTask }) {
  function showTasks() {
    return tasks.map((item, index) => (
      <li key={index}>
        <input
          type="checkbox"
          onChange={() => {}}
          checked={item.isDone}
        ></input>
        <input
          className="butt-delete"
          type="button"
          value="удалить"
          onClick={() => deleteTask(item.id)}
        ></input>
        {item.title}
      </li>
    ));
  }

  return <ul className="tasklist">{showTasks()}</ul>;
}

export default TaskList;
