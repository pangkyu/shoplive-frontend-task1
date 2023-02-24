import Logo from "../components/Logo";
import "../scss/header.scss";

const Header = () => {
  return (
    <header className="header">
      <span>SHOPLIVE</span>
      <span className="logo">{Logo()}</span>
    </header>
  );
};
export default Header;
