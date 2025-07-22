import NavbarDropdown from "./NavbarDropdown";
import { NavLink } from "react-router-dom";
import { ShoppingBasket, Heart, User } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav className="border-b border-b-stone-700 bg-stone-950 px-4">
        <div className="navbar mx-auto max-w-7xl shadow-sm">
          {/* Navbar Start */}
          <div className="navbar-start">
            <NavLink to="/">
              <img
                src="./images/logo-light.png"
                alt="Secret Shop Logo"
                className="h-auto w-36 md:w-48"
              />
            </NavLink>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden md:flex">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>

          {/* Navbar End */}
          <div className="navbar-end">
            {/* Nav Links */}
            <div className="hidden flex-row space-x-4 md:flex">
              <NavLink to="/account">
                <User className="h-10 w-10" />
              </NavLink>

              <NavLink to="/wishlist">
                <Heart className="h-10 w-10" />
              </NavLink>

              <NavLink to="/cart">
                <ShoppingBasket className="h-10 w-10" />
              </NavLink>
            </div>

            {/* Navbar Dropdown */}
            <NavbarDropdown />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
