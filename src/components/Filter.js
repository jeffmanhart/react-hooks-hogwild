import React from "react";

function Filter({onFilterHogs ,filterState}){
    
    function handleCheck(){
            onFilterHogs(!filterState)
    }
    
    return (
        <div className="Filter">
            <div>
                <input type="checkbox" id="filter" onChange={handleCheck} />
                <label htmlFor="filter">Show only Greased?</label>
            </div>
        </div>
      );
}
export default Filter