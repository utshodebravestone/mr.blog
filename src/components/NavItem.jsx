import { Link } from "react-router-dom";

const NavItem = ({ text, href, type }) => {
  return (
    <li className="relative group">
      <Link
        to={href}
        className={`${
          type === "button"
            ? "px-5 py-3 border border-blue-500 rounded text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-500"
            : "mr-1.5"
        }`}
      >
        {text}
      </Link>
      {type === "link" && (
        <span className="absolute top-0 left-0 text-blue-500 font-bold transition-all duration-500 opacity-0 group-hover:left-full group-hover:opacity-100">
          /
        </span>
      )}
    </li>
  );
};

export default NavItem;
