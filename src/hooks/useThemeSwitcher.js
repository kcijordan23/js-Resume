import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

// Reads the theme that the inline script in _document.js already applied,
// and lets the toggle switch between "light" and "dark".
const useThemeSwitcher = () => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    setMode(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next = mode === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // storage can be blocked (private mode); the theme still switches for this visit
    }
    setMode(next);
  };

  return [mode, toggle];
};

export default useThemeSwitcher;
