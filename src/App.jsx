import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import Life from "./components/Life.jsx";

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
    <>
      <BrowserRouter>
        <Header
          changeTheme={changeTheme}
          currentTheme={currentTheme}
          CSSTheme={CSSTheme}
          dark={dark}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                changeTheme={changeTheme}
                currentTheme={currentTheme}
                CSSTheme={CSSTheme}
                dark={dark}
              />
            }
          />
          <Route path="contact" element={<Contact CSSTheme={CSSTheme} />} />
          <Route path="projects" element={<Projects CSSTheme={CSSTheme} />} />
          <Route path="life" element={<Life CSSTheme={CSSTheme} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
