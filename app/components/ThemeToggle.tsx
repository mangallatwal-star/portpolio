"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark"); // ✅ YAHAN
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark"); // ❌ remove
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark"); // ✅ YAHAN
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  return (
    <button onClick={toggleTheme}>
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}