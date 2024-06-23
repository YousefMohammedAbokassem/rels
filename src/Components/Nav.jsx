import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  return (
    <nav className="flex items-center justify-between container nav h-[60px] max-h-[60px]">
      <div className="logo font-bold uppercase">pizza</div>
      <FontAwesomeIcon icon={faBars} className="block md:hidden" />
      <ul className="items-center justify-center gap-4 md:flex hidden">
        <li className="capitalize">Home</li>
        <li className="capitalize">About</li>
        <li className="capitalize">Contact Us</li>
        <li className="capitalize">gallery</li>
      </ul>
    </nav>
  );
};

export default Nav;
