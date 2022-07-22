import react, { useState } from "react";
import { Link } from "react-router-dom";
import {serviceDropdown} from "./DropdownItems";
import "./Dropdown.css";

const Dropdown = (props) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <react.Fragment>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {serviceDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}>
              
              {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </react.Fragment>
  );
};
export default Dropdown;
