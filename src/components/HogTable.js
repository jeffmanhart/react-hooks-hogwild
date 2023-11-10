import React , { useState } from "react";
import HogTile from "./HogTile";
import Filter from "./Filter";
import Sort from "./Sort";

function HogTable({hoggies}){
    const [filter, setFilter] = useState(false)
    const [sort , setSort] = useState("")
    

    function greasedFilter(checked){
        setFilter(checked)
    }

    function sortHogsBy(sortType){
        setSort(sortType)
        console.log(sortType)
    }

    const displayHogs = hoggies.sort((a,b)=>{
       if (sort === "name") {
        return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
        }else if (sort === "weight") {return (a.weight > b.weight) ? 1 : ((b.weight > a.weight) ? -1 : 0)}
    }).filter((hog)=>!filter ? true : hog.greased === filter)
    return (
        <div>
            <Filter onFilterHogs={greasedFilter} filterState={filter}/>
            <Sort onSortHogs={sortHogsBy} />
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
        </div>

    )
}
export default HogTable