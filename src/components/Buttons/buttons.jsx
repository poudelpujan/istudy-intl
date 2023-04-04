import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../Menu/MenuManager/MenuManager";

export default function HamMenu() {
  const { setOpen, open } = useContext(MenuContext);
  return (
    <div
      className={`menu__hamburger_menu ${open ? " open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export const AboutButton = () => {
  return (
    <div>
      <Link to="/about-us/" className="is__btn cta__lm">
        Learn More
      </Link>
    </div>
  );
};
