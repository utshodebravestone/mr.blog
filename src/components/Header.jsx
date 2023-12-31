import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { images, navItems } from "../constants";
import useToggle from "../hooks/useToggle";
import NavItem from "./NavItem";

const Header = () => {
  const [navIsActive, toggleNavIsActive] = useToggle(false);

  return (
    <header className="px-5 py-2.5 flex justify-between items-center shadow-sm">
      <div className="w-10 h-10">
        <img src={images.logo} alt="logo" />
      </div>

      <button
        onClick={toggleNavIsActive}
        className="w-8 h-8 z-50 lg:hidden transition-all duration-500"
      >
        {navIsActive ? (
          <AiOutlineClose className="h-full w-full" />
        ) : (
          <AiOutlineMenu className="w-full h-full" />
        )}
      </button>

      <nav
        className={`w-full lg:w-auto h-screen lg:h-auto fixed top-0 bottom-0 -right-full lg:static flex flex-col lg:flex-row justify-center lg:justify-end ${
          navIsActive ? "right-0" : "-right-full"
        } bg-white transition-all duration-500`}
      >
        <ul className="flex flex-col lg:flex-row justify-evenly items-center gap-14 font-semibold">
          {navItems.map((navItem, i) => (
            <NavItem
              key={i}
              text={navItem.text}
              href={navItem.href}
              type={navItem.type}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
