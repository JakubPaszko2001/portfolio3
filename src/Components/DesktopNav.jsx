import { useEffect } from "react";
import NavUl from "./NavUl";
import Icons from "./Icons";
const DesktopNav = () => {
  const menuOpen = true;
  useEffect(() => {
    const nav = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        nav.classList.add("-translate-y-[100%]");
      } else {
        nav.classList.remove("-translate-y-[100%]");
      }

      lastScrollY = window.scrollY;
    });
  });
  return (
    <nav className="hidden fixed top-0 left-0 md:block z-50">
      <div className="navbar flex w-screen h-36 px-10 bg-light dark:bg-dark transition-transform duration-300">
        <Icons menuOpen={menuOpen} />
        <NavUl menuOpen={menuOpen} />
      </div>
    </nav>
  );
};

export default DesktopNav;
