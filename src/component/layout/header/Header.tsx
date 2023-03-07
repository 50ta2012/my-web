import reactLogo from "../../../assets/react.svg";
import "./Header.css";
import Logo from "./Logo";
import Menu from "./Menu";

export default function Header() {
	return (
		<div className="header">
			<div className="header-grid">
				<Logo />
				<Menu />
				<div className="blank"></div>
			</div>
		</div>
	);
}
