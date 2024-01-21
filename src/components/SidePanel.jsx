import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

function SidePanel({ changeTheme, currentTheme, dark, CSSTheme }) {
  let theme = currentTheme();
  useEffect(() => {
    theme = currentTheme();
  }, [dark]);
  return (
    <div className={CSSTheme + "-SidePanel"}>
      <div className="Gobyu">
        <button onClick={changeTheme} className={CSSTheme + "-ThemeButton"}>
          <FontAwesomeIcon
            icon={theme}
            className={CSSTheme + "-ThemeButtonIcon"}
          />
        </button>
        <h1 className={CSSTheme + "-no-margin"}>Gobyu</h1>
      </div>
      <a className={CSSTheme + "-SideBarList"} href="#AboutMe">
        <FontAwesomeIcon
          icon={faChevronRight}
          className={CSSTheme + "-chevron"}
        />
        &nbsp;About Me
      </a>
      <a className={CSSTheme + "-SideBarList"} href="#Education">
        <FontAwesomeIcon
          icon={faChevronRight}
          className={CSSTheme + "-chevron"}
        />
        &nbsp;Education
      </a>
      <a className={CSSTheme + "-SideBarList"} href="#Employment">
        <FontAwesomeIcon
          icon={faChevronRight}
          className={CSSTheme + "-chevron"}
        />
        &nbsp;Employment
      </a>
      <a className={CSSTheme + "-SideBarList"} href="#Projects">
        <FontAwesomeIcon
          icon={faChevronRight}
          className={CSSTheme + "-chevron"}
        />
        &nbsp;Projects
      </a>
      <a className={CSSTheme + "-SideBarList"} href="#Contact">
        <FontAwesomeIcon
          icon={faChevronRight}
          className={CSSTheme + "-chevron"}
        />
        &nbsp;Contact
      </a>
      <div className={CSSTheme + "-Links"}>
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
    </div>
  );
}

export default SidePanel;
