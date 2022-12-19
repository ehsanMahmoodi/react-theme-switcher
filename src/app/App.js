// style's
import "../assets/css/App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [colorTheme, setColorTheme] = useState("");
  useEffect(() => {
    const currentThemeColor = localStorage.getItem("theme-color");
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }
  }, []);

  const clickHandler = (e) => {
    let itemClicked = e.currentTarget;
    setColorTheme(itemClicked.id);
    localStorage.setItem("theme-color", itemClicked.id);
  };
  return (
    <div className={`App ${colorTheme}`}>
      <div className="theme-options">
        <div
          id="theme-white"
          className={colorTheme === "theme-white" ? "active" : ""}
          onClick={clickHandler}
        ></div>
        <div
          id="theme-blue"
          className={colorTheme === "theme-blue" ? "active" : ""}
          onClick={clickHandler}
        ></div>
        <div
          id="theme-orange"
          className={colorTheme === "theme-orange" ? "active" : ""}
          onClick={clickHandler}
        ></div>
        <div
          id="theme-purple"
          className={colorTheme === "theme-purple" ? "active" : ""}
          onClick={clickHandler}
        ></div>
        <div
          id="theme-green"
          className={colorTheme === "theme-green" ? "active" : ""}
          onClick={clickHandler}
        ></div>
        <div
          id="theme-black"
          className={colorTheme === "theme-black" ? "active" : ""}
          onClick={clickHandler}
        ></div>
      </div>

      <div className="content-box">
        <h3>Multiple Themes Switcher / React</h3>
        <h5>(ReactJS, SCSS/CSS, Local Storage)</h5>
        <p>
          Lorem ipsum dolor sit amet, consecrate radicalising elite. Accusal ad
          cum ex magna nisei null quicksand quo ration ut vitae.
        </p>
      </div>
    </div>
  );
};

export default App;
