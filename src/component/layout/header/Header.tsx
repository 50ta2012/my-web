import reactLogo from "../../../assets/react.svg";
import "./Header.css";

export default function Header() {
	return (
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
	);
}
