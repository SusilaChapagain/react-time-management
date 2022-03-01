import React, { useState } from "react";
import { Form } from "./components/Form";
import { TaskList } from "./components/TaskList";
import { Title } from "./components/Title";
import { BadList } from "./components/BadList";
import { Total } from "./components/Total";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [badList, setBadList] = useState([]);

  const addNewTask = (task) => {
    setTaskList([...taskList, task]);
  };
  // delete the task item from task list--->

  const handleOnDeleteTaskList = (i) => {
    console.log(i);

    if (window.confirm("Are you sure to delete this?")) {
      const newArg = taskList.filter((item, index) => index !== i);
      setTaskList(newArg);
    }
  };

  // take item from tasklist and put in the badlist
  const markAsNotToDo = (i) => {
    const selectedItem = taskList[i];
    setBadList([...badList, selectedItem]);
    const newArg = taskList.filter((item, index) => index !== i);
    setTaskList(newArg);
  };
  console.log(badList);

  // take item from tasklist and put in the badlist
  const markAsTask = (i) => {
    const selectedItem = badList[i];
    setTaskList([...taskList, selectedItem]);
    const newArg = badList.filter((item, index) => index !== i);
    setBadList(newArg);
  };

  // delete items from the badlist

  const handleOnDeleteBadList = (i) => {
    console.log(i);

    if (window.confirm("Are you sure to delete this?")) {
      const newArg = badList.filter((item, index) => index !== i);
      setBadList(newArg);
    }
  };
  const ttlTaskHr = taskList.reduce((subttl, item) => subttl + item.hr, 0);
  const totalBadHr = badList.reduce((acc, curr) => acc + curr.hr, 0);
  const total = ttlTaskHr + totalBadHr;
  return (
    <div className="wraper">
      <div className="container">
        <Title />

        <Form addNewTask={addNewTask} total={total} />

        <div className="row">
          <TaskList
            taskList={taskList}
            handleOnDeleteTaskList={handleOnDeleteTaskList}
            markAsNotToDo={markAsNotToDo}
          />
          <BadList
            badList={badList}
            markAsTask={markAsTask}
            handleOnDeleteBadList={handleOnDeleteBadList}
            totalBadHr={totalBadHr}
          />
        </div>
        <Total total={total} />
      </div>
    </div>
  );
}

export default App;
