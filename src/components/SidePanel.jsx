import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function SidePanel() {
  return (
    <div className="SidePanel">
      <a className="SideBarList" href="#AboutMe">
        <FontAwesomeIcon icon={faChevronRight} className="chevron" />
        &nbsp;About Me
      </a>
      <a className="SideBarList" href="#Education">
        <FontAwesomeIcon icon={faChevronRight} className="chevron" />
        &nbsp;Education
      </a>
      <a className="SideBarList" href="#Employment">
        <FontAwesomeIcon icon={faChevronRight} className="chevron" />
        &nbsp;Employment
      </a>
      <a className="SideBarList" href="#Projects">
        <FontAwesomeIcon icon={faChevronRight} className="chevron" />
        &nbsp;Projects
      </a>
      <a className="SideBarList" href="#Contact">
        <FontAwesomeIcon icon={faChevronRight} className="chevron" />
        &nbsp;Contact
      </a>
      <div className="Links">
        <a href="https://github.com/gobyu" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="LinkIcon" />
        </a>
        <a href="https://instagram.com/john.zhao.69420/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} className="LinkIcon" />
        </a>
        <a href="https://www.youtube.com/@MrBeast" target="_blank">
          <FontAwesomeIcon icon={faYoutube} className="LinkIcon" />
        </a>
      </div>
    </div>
  );
}

export default SidePanel;
