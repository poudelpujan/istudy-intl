import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.svg";

import { FiChevronDown } from "react-icons/fi";

import { internalLinks } from "../Links/Links";
import HamMenu from "../../Buttons/buttons";
import { MenuContext } from "../MenuManager/MenuManager";

function MenuContents() {
  const { setOpen, open } = useContext(MenuContext);

  const [activeDropdown, setActiveDropdown] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = () => {
    setOpen(false);
  };

  const handleDropdownClick = (index) => {
    setActiveDropdown(activeDropdown === index ? false : index);
  };

  const handleClicks = (event, index) => {
    if (internalLinks[index].dropdownLinks) {
      event.preventDefault();
      setActiveDropdown(activeDropdown === index ? false : index);
      setActiveLink(index);
    }
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setActiveDropdown(false);
    } else {
      setActiveDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setActiveDropdown(false);
    } else {
      setActiveDropdown(false);
    }
  };

  return (
    <div className="menu-holder">
      <div className="logo-section">
        <Link to="/">
          <img
            src={logo}
            className="logo"
            alt="iStudy international educational consultancy"
          />
        </Link>

        <Link className="logo_text" to="/">
          <h4>
            <span>ISTUDY INTERNATIONAL</span> EDUCATIONAL CONSULTANCY
          </h4>
        </Link>
      </div>
      {/* hamburger menu */}
      <HamMenu />

      <div className="menu-inside">
        <nav className={`navbar ${open ? "collapse" : ""}`}>
          <ul className="nav__list">
            {internalLinks.map((link, index) => (
              <li
                className={`nav__item ${
                  link.dropdownLinks ? "has-dropdown" : ""
                } ${activeDropdown === index ? "active dropdown-active" : ""}`}
                key={link.url}
              >
                <Link
                  to={link.url}
                  className="nav__link"
                  onClick={(event) => handleClicks(event, index)}
                >
                  {link.component}
                  {link.dropdownLinks && <FiChevronDown />}
                </Link>
                {link.dropdownLinks && activeDropdown === index && (
                  <ul className="dropdown-menu">
                    {link.dropdownLinks.map((subLink, index) => (
                      <li key={subLink.url}>
                        <Link
                          to={subLink.url}
                          className={`nav__link ${
                            index === activeLink ? "active" : ""
                          }`}
                          onClick={() => setActiveDropdown(false)}
                        >
                          {subLink.subComponent}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MenuContents;
