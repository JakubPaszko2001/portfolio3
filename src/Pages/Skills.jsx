import React from "react";
import Title from "../Components/Title";
import react from "../Image/icons/react.webp";
import next from "../Image/icons/next.webp";
import typescript from "../Image/icons/typescript.webp";
import sass from "../Image/icons/sass.webp";
import tailwind from "../Image/icons/tailwind.webp";
import github from "../Image/icons/github.webp";
import gsap from "../Image/icons/gsap.webp";
import figma from "../Image/icons/figma.webp";
import InfiniteScroll from "../Components/InfiniteScroll";

const Skills = () => {
  const header = "Skills";
  const paragraph = "Technologies I’m using";
  const iconsUpper = [
    { path: react, name: "REACT" },
    { path: next, name: "NEXT" },
    { path: typescript, name: "TYPESCRIPT" },
    { path: sass, name: "SASS" },
  ];
  const iconsLower = [
    { path: tailwind, name: "TAILWIND" },
    { path: github, name: "GITHUB" },
    { path: gsap, name: "GSAP" },
    { path: figma, name: "FIGMA" },
  ];
  return (
    <section data-aos="fade-up" id="Skills">
      <Title header={header} paragraph={paragraph} />
      <InfiniteScroll icons={iconsUpper} scrolling={"scrolling"} />
      <InfiniteScroll icons={iconsLower} scrolling={"scrolling2"} />
    </section>
  );
};

export default Skills;
