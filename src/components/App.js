import React, { useState } from "react";
import Nav from "./Nav";
import AllHogs from "./AllHogs.js";
import hogs from "../porkers_data";
import FilterOptions from "./FilterOptions";
import GreasedBtn from "./GreasedBtn";

function App() {
	const [showGreased, setShowGreased] = useState(false);
	const [sortOption, setSortOption] = useState("all");
	const hogsToShow = hogs
		.filter((hog) => (showGreased ? hog.greased : true))
		.sort((a, b) => {
			if (sortOption === "weight") {
				return a.weight - b.weight;
			} else if (sortOption === "name") {
				return a.name.localeCompare(b.name);
			}
		});
	return (
		<div className="App">
			<Nav />
			<GreasedBtn greased={showGreased} setGreased={setShowGreased}/>
			<FilterOptions setSort={setSortOption}/>
			<AllHogs hogs={hogsToShow} />
		</div>
	);
}

export default App;
