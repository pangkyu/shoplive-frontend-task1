import Logo from "../components/Logo";
import "../scss/header.scss";

const Header = () => {
  return (
    <header className="app__header">
      <span>SHOPLIVE</span>
      <Logo />
    </header>
  );
};
export default Header;
