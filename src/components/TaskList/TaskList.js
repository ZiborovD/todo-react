import React from "react";

function TaskList({ tasks, deleteTask }) {
  /*function changeStatus(isDone) {
   setTasks((prevState) => (prevState[isDone] ? false : true));
 }
*/

  function showTasks() {
    return tasks.map((item, index) => (
      <li key={index}>
        <input
          type="checkbox"
          //          onChange={() => changeStatus(item.isDone)}
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
