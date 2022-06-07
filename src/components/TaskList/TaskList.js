import React, { useEffect, useState } from "react";

function TaskList({ showTasks }) {
  return <ul className="tasklist">{showTasks()}</ul>;
}

export default TaskList;
