import "./App.css";
import MainPanel from "./components/MainPanel";

function Home({ changeTheme, currentTheme, CSSTheme, dark }) {
  return (
    <div className={CSSTheme + "-Home"}>
      <MainPanel CSSTheme={CSSTheme} />
    </div>
  );
}

export default Home;
