export default function GreasedBtn({greased, setGreased}) {
    return (
        <button onClick={() => setGreased(!greased)}>
				{greased ? "Show All Hogs" : "Show Greased Hogs"}
		</button>
    )
}