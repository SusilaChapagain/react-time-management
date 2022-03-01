import React from "react";

export const TaskList = ({ taskList }) => {
  console.log(taskList);

  return (
    <div class="col-md-6">
      <h2 class="text-center">Task list</h2>
      <hr />
      <div class="list-items">
        <table class="table table-striped">
          <tbody id="task-list">
            {taskList.map((item, i) => {
              return (
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                    {item.task}
                  </td>

                  <td>{item.hr}</td>
                  <td class="text-end">
                    <button class="btn-danger" onclick="deleteItem(${i})">
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                    <button class="btn btn-sm" onclick="markAsNotToDo(${i})">
                      <i class="fa-solid fa-arrow-right"></i>
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
