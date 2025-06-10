import NavbarDropdown from "./NavbarDropdown";
import { NavLink } from "react-router-dom";

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-user-round-icon lucide-user-round"
                >
                  <circle cx="12" cy="8" r="5" />
                  <path d="M20 21a8 8 0 0 0-16 0" />
                </svg>
              </NavLink>

              <NavLink to="/wishlist">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-heart-icon lucide-heart"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </NavLink>

              <NavLink to="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-shopping-basket-icon lucide-shopping-basket"
                >
                  <path d="m15 11-1 9" />
                  <path d="m19 11-4-7" />
                  <path d="M2 11h20" />
                  <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
                  <path d="M4.5 15.5h15" />
                  <path d="m5 11 4-7" />
                  <path d="m9 11 1 9" />
                </svg>
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
