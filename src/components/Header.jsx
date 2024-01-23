import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Header = ({ changeTheme, currentTheme, CSSTheme, dark }) => {
  let theme = currentTheme();
  useEffect(() => {
    theme = currentTheme();
  }, [dark]);
  return (
    <div className={CSSTheme + "-Header"}>
      <div className="left-header">
        <a href="/">
          <h1 className={CSSTheme + "-Name"}>Gobyu</h1>
        </a>
        <a href="https://github.com/gobyu" target="_blank">
          <FontAwesomeIcon icon={faGithub} className={CSSTheme + "-LinkIcon"} />
        </a>
        <a href="https://instagram.com/john.zhao.69420/" target="_blank">
          <FontAwesomeIcon
            icon={faInstagram}
            className={CSSTheme + "-LinkIcon"}
          />
        </a>
        <a href="https://www.youtube.com/@MrBeast" target="_blank">
          <FontAwesomeIcon
            icon={faYoutube}
            className={CSSTheme + "-LinkIcon"}
          />
        </a>
      </div>
      <div className="right-header">
        <button onClick={changeTheme} className={CSSTheme + "-ThemeButton"}>
          <FontAwesomeIcon
            icon={theme}
            className={CSSTheme + "-ThemeButtonIcon"}
          />
        </button>
        <Link to="/contact" className={CSSTheme + "-links"}>
          Contact
        </Link>
        <Link to="/projects" className={CSSTheme + "-links"}>
          Projects
        </Link>
        <Link to="/life" className={CSSTheme + "-links"}>
          Life
        </Link>
      </div>
    </div>
  );
};

export default Header;
