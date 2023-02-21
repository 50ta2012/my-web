import reactLogo from "./assets/react.svg";
import "./App.css";

document.title = "Berlin Website";

function App() {
	return (
		<div className="App">
			<div className="layout">
				<div className="header">
					<div className="header-grid">
						<div>
							<a href="https://reactjs.org" target="_blank">
								<img src={reactLogo} className="logo react" alt="React logo" />
							</a>
						</div>
						<div>Berlin</div>
					</div>
				</div>
				<div className="body">
					<h1>Berlin Website</h1>
					<p>Continue...</p>
				</div>
				<div className="footer">footer</div>
			</div>
		</div>
	);
}

export default App;
