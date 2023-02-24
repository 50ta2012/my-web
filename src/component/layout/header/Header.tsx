import reactLogo from "../../../assets/react.svg";
import "./Header.css";
import Menu from "./Menu";

export default function Header() {
	return (
		<div className="header">
			<div className="header-grid">
				<div className="logo">logo</div>

				<Menu />
			</div>
		</div>
	);
}
