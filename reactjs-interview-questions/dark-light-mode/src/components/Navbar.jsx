import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const handleTheme = (mode) => {
    console.log("mode", mode);

    if (theme !== mode) {
      toggleTheme();
    }
  };
  console.log("tehem", theme);

  return (
    <>
      <nav>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="mode-switch">
          <label>
            <input type="checkbox" onChange={toggleTheme} />
            <span className="slider round"></span>
          </label>
        </div>

        <div>
          <button onClick={() => handleTheme("dark")}>Dark</button>
          <button onClick={() => handleTheme("light")}>Light</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
