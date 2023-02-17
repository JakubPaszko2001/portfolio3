import { React, useLayoutEffect } from "react";
import Navbar from "../Components/Navbar";
import SplitType from "split-type";
import gsap from "gsap";
const Main = () => {
  useLayoutEffect(() => {
    const upperNameSplit = new SplitType("#upperName");
    const nameSplit = new SplitType("#myName");
    const jobSplit = new SplitType("#job");
    const tl = gsap.timeline();
    tl.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.5,
      duration: 0.1,
    });
  });
  return (
    <main className="relative">
      <Navbar />
      <section className="w-screen h-screen flex flex-col justify-center items-center">
        <h1
          id="upperName"
          className="text-lg clippath dark:text-light lg:text-xl"
        >
          Hi, I'am
        </h1>
        <h2
          id="myName"
          className="text-5xl clippath dark:text-light lg:text-7xl"
        >
          Jakub Paszko
        </h2>
        <h3 id="job" className="text-2xl clippath dark:text-light lg:text-4xl">
          Frontend Developer
        </h3>
        <p className="text-3xl hidden md:block absolute bottom-10 left-10">
          jakubpaszko01@gmail.com
        </p>
      </section>
    </main>
  );
};

export default Main;
