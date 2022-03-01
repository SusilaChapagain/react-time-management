import React, { useState } from "react";

const initialState = { task: "", hr: "" };

const weaklyHours = 7 * 24;

export const Form = ({ addNewTask, total }) => {
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
    if (newTask.hr < 1) {
      return alert("please enter a positive number ");
    }

    if (total + newTask.hr > weaklyHours) {
      return alert("you have exceed the weakly hours");
    }

    addNewTask(newTask);
    setNewTask(initialState);
  };

  return (
    <div className="row py-5">
      <div className="col">
        <form
          onSubmit={handleOnSubmit}
          className="row row-cols-md-auto g-3 align-items-center d-flex justify-content-center"
        >
          <div className="col-12">
            <label
              className="visually-hidden"
              htmlFor="inlineFormInputGroupUsername"
            >
              Your Task
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                name="task"
                value={newTask.task}
                onChange={handleOnChange}
                id="inlineFormInputGroupUsername"
                placeholder="your-task"
                required
              />
            </div>
          </div>

          <div className="col-12">
            <label
              className="visually-hidden"
              htmlFor="inlineFormInputGroupUsername"
            >
              Hours
            </label>
            <div className="input-group">
              <input
                type="number"
                name="hr"
                value={newTask.hr}
                onChange={handleOnChange}
                className="form-control"
                id="inlineFormInputGroupUsername"
                placeholder="hours"
                required
              />
            </div>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
