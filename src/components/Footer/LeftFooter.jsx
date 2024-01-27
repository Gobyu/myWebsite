import React from "react";

const LeftFooter = ({ CSSTheme }) => {
  return (
    <div className="left-footer">
      <p>© 2024 Gobyu. All rights reserved.</p>
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        className={CSSTheme + "-links"}
      >
        Privacy Policy{" "}
      </a>
      <a
        href="https://www.youtube.com/watch?v=OSCiMbMVDLI"
        target="_blank"
        className={CSSTheme + "-links"}
      >
        {" "}
        Terms of Use
      </a>
    </div>
  );
};

export default LeftFooter;
