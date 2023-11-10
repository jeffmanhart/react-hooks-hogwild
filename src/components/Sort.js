import React from "react";

function Sort({onSortHogs}){

    function handleSort(e){
        onSortHogs(e.target.value)
    }
    
    return (
        <div className="Sort">
          <select name="sort" onChange={handleSort}>
            <option value="All">Sort Hogs By</option>
            <option value="name">Name </option>
            <option value="weight">Weight</option>
          </select>
        </div>
      );
}
export default Sort