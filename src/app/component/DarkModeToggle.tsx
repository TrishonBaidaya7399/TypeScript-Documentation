"use client" 

import { useState, useEffect } from "react";
import { TbSun } from "react-icons/tb";
import { BsMoonStars } from "react-icons/bs";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center cursor-pointer" onClick={toggleDarkMode}>
      {darkMode ? (
        <span className="text-black text-2xl">
          <TbSun />
        </span>
      ) : (
        <span className="text-white text-2xl">
          <BsMoonStars />
        </span>
      )}
    </div>
  );
}
