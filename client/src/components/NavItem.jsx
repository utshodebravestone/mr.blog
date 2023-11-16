import { Link } from "react-router-dom";

const NavItem = ({ text, href }) => {
  return (
    <li className="relative group">
      <Link to={href} className="mr-2">
        {text}
      </Link>
      <span className="absolute top-0 left-0 text-blue-500 font-bold transition-all duration-500 opacity-0 group-hover:left-[95%] group-hover:opacity-100">
        /
      </span>
    </li>
  );
};

export default NavItem;
