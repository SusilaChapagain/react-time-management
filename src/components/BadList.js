import React from "react";

export const BadList = () => {
  return (
    <div class="col-md-6">
      <h2 class="text-center">Bad list</h2>
      <hr />
      <div class="list-items">
        <table class="table table-striped">
          <tbody id="bad-list"></tbody>
        </table>
      </div>
      <div class="ttl-bad text-end text-white">
        Total time saved =<span id="totalBadHours"></span>
      </div>
    </div>
  );
};
