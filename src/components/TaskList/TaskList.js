import React, { useEffect, useState } from "react";

function TaskList({ tasks }) {
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

  return <ul className="tasklist">{showTasks()}</ul>;
}

export default TaskList;
