import ProviderContacts from "./context/ProviderContacts";
import Routes from "./routes";
import Wallpaper from "./rtth99ngv4261.png";

function App() {
	return (
		<div
			style={{
				height: "100vh",
				display: "grid",
				placeItems: "center",
				backgroundImage: `url(${Wallpaper})`,
				backgroundRepeat: "repeat",
				backgroundSize: "70%",
			}}
		>
			{/* <img src={Wallpaper} alt="wallpaper" style={{}} /> */}
			<div
				style={{
					width: "400px",
					height: "90vh",
					border: "1px solid #aaa",
					position: "relative",
					overflow: "hidden",
					borderRadius: "5px",
					backgroundColor: "#fff",
				}}
			>
				<ProviderContacts>
					<Routes />
				</ProviderContacts>
			</div>
		</div>
	);
}

export default App;
