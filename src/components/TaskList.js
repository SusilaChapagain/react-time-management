import React from "react";

export const TaskList = ({
  taskList,
  handleOnDeleteTaskList,
  markAsNotToDo,
}) => {
  console.log(taskList);

  return (
    <div className="col-md-6">
      <h2 className="text-center">Task list</h2>
      <hr />
      <div className="list-items">
        <table className="table table-striped">
          <tbody id="task-list">
            {taskList.map((item, i) => {
              return (
                <tr key={i}>
                  <td>
                    <input type="checkbox" name="" id="" />
                    {item.task}
                  </td>

                  <td>{item.hr}</td>
                  <td className="text-end">
                    <button
                      className="btn-danger"
                      onClick={() => handleOnDeleteTaskList(i)}
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                    <button
                      className="btn btn-sm"
                      onClick={() => markAsNotToDo(i)}
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
