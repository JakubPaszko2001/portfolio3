import { useState, useEffect } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { ImSun } from "react-icons/im";
import { TbMoon } from "react-icons/tb";
const Icons = ({ menuOpen }) => {
  const [theme, setTheme] = useState("system");
  const elemet = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      elemet.classList.add("dark");
    } else {
      elemet.classList.remove("dark");
    }
  }
  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        elemet.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        elemet.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [theme]);

  return (
    <div className="flex items-center text-4xl gap-4 md:gap-2">
      <a
        href="https://www.linkedin.com/in/jakub-paszko-42409424b/"
        target="_blank"
        rel="noreferrer"
        tabIndex={menuOpen === true ? 0 : -1}
        aria-label="LinkedIn"
      >
        <BsLinkedin className="cursor-pointer hover:transition-colors duration-300 hover:text-[#0A66C2]" />
      </a>
      <a
        href="https://github.com/JakubPaszko2001"
        target="_blank"
        rel="noreferrer"
        tabIndex={menuOpen === true ? 0 : -1}
        aria-label="Github"
      >
        <BsGithub className="cursor-pointer hover:transition-colors duration-300 hover:text-gray-500" />
      </a>
      <button
        onClick={() => setTheme("light")}
        tabIndex={menuOpen === true ? 0 : -1}
        aria-label="Switch to light mode"
        className="cursor-pointer hidden dark:block hover:transition-colors duration-300 hover:text-yellow-500"
      >
        <ImSun />
      </button>
      <button
        onClick={() => setTheme("dark")}
        tabIndex={menuOpen === true ? 0 : -1}
        aria-label="Switch to dark mode"
        className="cursor-pointer block dark:hidden hover:transition-colors duration-200 hover:text-yellow-500"
      >
        <TbMoon />
      </button>
    </div>
  );
};

export default Icons;
