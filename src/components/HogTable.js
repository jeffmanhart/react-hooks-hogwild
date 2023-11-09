import React from "react";
import HogTile from "./HogTile";
import SortAndFilter from "./SortAndFilter";

function HogTable({hoggies}){
    
    const displayHogs = hoggies

    return (
        <div className="ui grid container">
            {displayHogs.map((hog)=>(
                <HogTile 
                key={hog.name}
                name={hog.name}
                specialty={hog.specialty}
                greased={hog.greased}
                weight={hog.weight}
                winnings={hog["highest medal achieved"]}
                image={hog.image}
                />
            ))}
        </div>

    )
}
export default HogTable