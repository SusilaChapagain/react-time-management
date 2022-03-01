import React, { useState } from "react";

const initialState = { task: "", hr: "" };
export const Form = ({ addNewTask }) => {
  const [newTask, setNewTask] = useState(initialState);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setNewTask({
      ...newTask,
      [name]: name === "hr" ? +value : value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addNewTask(newTask);
    setNewTask(initialState);
  };

  return (
    <div class="row py-5">
      <div class="col">
        <form
          onSubmit={handleOnSubmit}
          class="row row-cols-md-auto g-3 align-items-center d-flex justify-content-center"
        >
          <div class="col-12">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">
              Your Task
            </label>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                name="task"
                value={newTask.task}
                onChange={handleOnChange}
                id="inlineFormInputGroupUsername"
                placeholder="your-task"
                required
              />
            </div>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">
              Hours
            </label>
            <div class="input-group">
              <input
                type="number"
                name="hr"
                value={newTask.hr}
                onChange={handleOnChange}
                class="form-control"
                id="inlineFormInputGroupUsername"
                placeholder="hours"
                required
              />
            </div>
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
