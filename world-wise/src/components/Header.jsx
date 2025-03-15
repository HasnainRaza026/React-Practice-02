import { NavLink, Link } from "react-router-dom";
import Button from "./Button";

function Header() {
  return (
    <header className="flex justify-between w-[95%] fixed z-10 top-[30px] left-1/2 transform -translate-x-1/2">
      <Link to="/">
        <img
          src="./src/assets/logo.png"
          alt="logo"
          className="w-[191px] h-[46px]"
        />
      </Link>
      <div className="flex gap-[60px] items-center">
        <NavLink className="font-medium text-xl" to="/pricing">
          PRICING
        </NavLink>
        <NavLink className="font-medium text-xl" to="/product">
          PRODUCT
        </NavLink>
        <Link to="/login">
          <Button text={"LOGIN"} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
