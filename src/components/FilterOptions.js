export default function FilterOptions({setSort}) {
    return (
        <>
            <label> Sort By:</label>
            <select onChange={(e) => setSort(e.target.value)}>
                    <option value="all">All</option>
                    <option value="name"> Name </option>
                    <option value="weight">Weight </option>
            </select>
        </>
    )
}