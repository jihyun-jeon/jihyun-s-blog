"use client";
// csr로 작동을 해야 ThemeProvider가 작동함.

import { useEffect, useState } from "react";

const ThemeProvider = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const { matches } = window.matchMedia("(prefers-color-scheme:dark");

    if (theme === "dark" || matches) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="relative w-16 h-8">
      <li
        onClick={() =>
          setDarkMode(window.matchMedia("(prefers-color-scheme:dark").matches)
        }
      >
        prefer
      </li>
      <li onClick={() => setDarkMode(true)}>dark</li>
      <li onClick={() => setDarkMode(false)}>light</li>
    </div>
  );
};

export default ThemeProvider;
