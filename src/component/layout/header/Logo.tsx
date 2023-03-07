import "./Logo.css";
import logoPng from "./image/logo.png";

function Logo() {
	return (
		<div className="logo">
			<img src={logoPng} height={64} />
		</div>
	);
}

export default Logo;
