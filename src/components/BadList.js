import React from "react";

export const BadList = ({
  badList,
  markAsTask,
  handleOnDeleteBadList,
  totalBadHr,
}) => {
  return (
    <div className="col-md-6">
      <h2 className="text-center">Bad list</h2>
      <hr />
      <div className="list-items">
        <table className="table table-striped">
          <tbody id="bad-list">
            {badList.map((item, i) => {
              return (
                <tr key={i}>
                  <td>
                    <input type="checkbox" name="" id="" />
                    {item.task}
                  </td>

                  <td>{item.hr}</td>
                  <td className="text-end">
                    <button className="btn-danger">
                      <i
                        className="fa-solid fa-trash-can"
                        onClick={() => handleOnDeleteBadList(i)}
                      ></i>
                    </button>
                    <button
                      className="btn btn-sm"
                      onClick={() => markAsTask(i)}
                    >
                      <i className="fa-solid fa-arrow-left"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="ttl-bad text-end text-white">
        Total time saved =<span id="totalBadHours">{totalBadHr}</span>
      </div>
    </div>
  );
};
