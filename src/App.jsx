import { React, useEffect } from "react";
import Main from "./Pages/Main";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mediaQuery || mediaQuery.matches) {
      AOS.init({ disable: true });
    } else {
      AOS.init({ duration: 1000, once: true });
    }
  }, []);
  return (
    <div className="App font-second bg-light dark:bg-dark overflow-hidden light:text-black dark:text-light font-bold">
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
