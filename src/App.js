import "./App.css";
import React, { useState } from "react";
import { Form } from "./components/Form";
import { TaskList } from "./components/TaskList";
import { Title } from "./components/Title";
import { BadList } from "./components/BadList";
import { Total } from "./components/Total";

function App() {
  const [taskList, setTasklist] = useState([]);
  const addNewTask = (task) => {
    setTasklist([...taskList, task]);
  };
  console.log(taskList);
  return (
    <div class="wraper">
      <div class="container">
        <Title />

        <Form addNewTask={addNewTask} />

        <div class="row">
          <TaskList taskList={taskList} />

          <BadList />
        </div>
        <Total />
      </div>
    </div>
  );
}

export default App;
