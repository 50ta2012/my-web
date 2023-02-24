import "./App.css";
import Body from "./component/layout/body/Body";
import Footer from "./component/layout/footer/Footer";
import Header from "./component/layout/header/Header";

document.title = "Berlin Website";

function App() {
	return (
		<div className="App">
			<Header />
			<Body />
			<Footer />
		</div>
	);
}

export default App;
