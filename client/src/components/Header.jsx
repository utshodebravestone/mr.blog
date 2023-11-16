import { Link } from "react-router-dom";

import { images, navItems } from "../constants";

import NavItem from "./NavItem";

const Header = () => {
  return (
    <header className="px-5 py-2.5 flex justify-between items-center">
      <div className="w-10 h-10">
        <img src={images.logo} alt="logo" />
      </div>

      <nav className="font-semibold">
        <ul className="flex justify-evenly items-center gap-x-10">
          {navItems.map((navItem, i) => (
            <NavItem key={i} text={navItem.text} href={navItem.href} />
          ))}
          <li>
            <Link
              to="/signin"
              className="px-5 py-3 border border-blue-500 rounded text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-500"
            >
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
