function SidePanel() {
  return (
    <div className="SidePanel">
      <a className="SideBarList" href="#AboutMe">
        About Me
      </a>
      <a className="SideBarList" href="#Education">
        Education
      </a>
      <a className="SideBarList" href="#Employment">
        Employment
      </a>
      <a className="SideBarList" href="#Projects">
        Projects
      </a>
      <div className="Links">
        <a href="https://github.com/gobyu" target="_blank">
          <img
            src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            className="LinkImage"
          />
        </a>
        <a href="https://instagram.com/john.zhao.69420/" target="_blank">
          <img
            src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            className="LinkImage"
          />
        </a>
        <a href="https://www.youtube.com/@MrBeast" target="_blank">
          <img
            src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            className="LinkImage"
          />
        </a>
      </div>
    </div>
  );
}

export default SidePanel;
