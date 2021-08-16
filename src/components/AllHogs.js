import HogCard from "./HogCard";

function AllHogs(hogs) {
	return (
		<div>
			{hogs.hogs.map((hog) => (
				<HogCard key={hog.name} hog={hog} />
			))}
		</div>
	);
}
export default AllHogs;