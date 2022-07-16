import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./HeaderLogo.scss";

const HeaderLogo = () => {
  return (
    <a className="logo__link" href="#">
      <Logo />
    </a>
  );
};

export default HeaderLogo;
