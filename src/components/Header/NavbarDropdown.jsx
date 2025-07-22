import { NavLink } from "react-router-dom";

const NavbarDropdown = () => {
  return (
    <>
      <div className="dropdown">
        {/* Dropdown Menu */}
        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />{" "}
          </svg>
        </div>

        {/* Dropdown Links */}
        <ul
          tabIndex={0}
          className="menu menu-xl dropdown-content rounded-box z-1 mt-3 w-52 bg-stone-950 p-2 shadow"
        >
          <li>
            <NavLink to="/account">Account</NavLink>
          </li>
          <li>
            <NavLink to="/wishlist">Wishlist</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarDropdown;
