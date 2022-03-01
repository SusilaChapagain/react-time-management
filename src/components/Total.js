import React from "react";

export const Total = ({ total }) => {
  return (
    <div className="row mt-2 pb-5 fs-3 fw-bolder text-success">
      <div className="col text-center">
        Total time allocated this week = <span id="totalHours">{total}</span> hr
      </div>
    </div>
  );
};
