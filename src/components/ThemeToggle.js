import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider round" onClick={toggleTheme} />
    </label>
  );
};

export default ThemeToggle;
