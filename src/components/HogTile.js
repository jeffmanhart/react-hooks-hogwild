import React , { useState }from "react";

function HogTile(props){
    const [isDisplay , setDisplay] = useState(false)
    function displayMetaData(){
        setDisplay(!isDisplay)
    }

    return (
    <div className="ui four wide column">
        <div className="ui card" onClick={displayMetaData}>
            <div className="image">
                <img src={props.image}/>
            </div>
            <div className="content">
                <a className="header">{props.name}</a>
                {isDisplay ? <div className="meta">
                    <span className="weight">Weight: {props.weight}</span>
                    <div className="greased">Greased: {props.greased === true ? "Yes" : "No"}</div>
                    <div className="specialty">Specialty: {props.specialty}</div>
                    <div className="winnings">Highest Winning: {props.winnings}</div>
                </div> : ""}
                
            </div>
        </div>
    </div>
    )
}
export default HogTile