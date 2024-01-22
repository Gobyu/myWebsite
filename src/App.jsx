import "./App.css";
import MainPanel from "./components/MainPanel";
import SidePanel from "./components/SidePanel";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [dark, setDark] = useState(true);

  const changeTheme = () => {
    setDark(!dark);
  };

  const currentCSS = () => {
    if (dark) {
      return "dark";
    } else {
      return "light";
    }
  };

  let CSSTheme = currentCSS();
  useEffect(() => {
    CSSTheme = currentCSS();
  }, [CSSTheme]);

  const currentTheme = () => {
    if (dark) {
      return faMoon;
    } else {
      return faSun;
    }
  };

  return (
    <div className={CSSTheme + "-App"}>
      <Header
        changeTheme={changeTheme}
        currentTheme={currentTheme}
        CSSTheme={CSSTheme}
        dark={dark}
      />
      <div className={CSSTheme + "-Main-Content"}>
        <MainPanel CSSTheme={CSSTheme} />
      </div>
    </div>
  );
}

export default App;
