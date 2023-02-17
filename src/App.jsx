import Main from "./Pages/Main";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

function App() {
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
