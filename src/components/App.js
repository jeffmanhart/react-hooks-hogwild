import React , { useState }from "react";
import Nav from "./Nav";
import HogTable from "./HogTable";

import hogs from "../porkers_data";

function App() {
	const [allHogs , setHogs] = useState(hogs)



	return (
		<div className="App">
			<Nav />
			<HogTable hoggies={allHogs}/>
		</div>
	);
}

export default App;


/* 
App 
	Nav - display header details and add in the
	NewHogForm - BONUS would allow to add more Hogs
	HogTable - Where Hogs will land and render tiles
		SortAndFilter - allows options to filter and sort Hogs
		HogTiles - to generate the JSX for the Hog images and data
	

*/