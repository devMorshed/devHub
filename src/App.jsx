import { Outlet, useNavigation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	const navigation = useNavigation;
	return (
		<div className="App">
			<Header />
			<div
				id="detail"
				className={navigation.state === "loading" ? "loading" : "sss"}>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}

export default App;
