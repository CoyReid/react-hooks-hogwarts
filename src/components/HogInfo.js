function HogInfo({ hog }) {
	return (
		<div>
			<h2>Special Trait: {hog.specialty} </h2>
			<h3>Greased: {hog.greased ? "Yes" : "No"}</h3>
			<h3>Weight: {hog.weight}</h3>
			<h3>Highest medal achieved: {hog["highest medal achieved"]}</h3>
		</div>
	);
}
export default HogInfo;