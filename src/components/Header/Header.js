import HeaderLogo from "../HeaderLogo";
import HeaderText from "../HeaderText";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <HeaderLogo />
        </div>
        <div className="header__text">
          <HeaderText />
        </div>
      </div>
    </header>
  );
};

export default Header;
