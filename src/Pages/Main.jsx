import { React, useLayoutEffect } from "react";
import Navbar from "../Components/Navbar";
import SplitType from "split-type";
import gsap from "gsap";
const Main = () => {
  const Border = ({ rotate, divClass }) => (
    <div
      className={`${divClass} hidden md:block box1 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-black dark:border-light ${
        rotate ? "rotate-45" : "rotate-0"
      }`}
    />
  );
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          isDesktop: "(min-width: 300px)",
        },
        (context) => {
          let { reduceMotion } = context.conditions;
          if (reduceMotion === true) {
          } else {
            const upperNameSplit = new SplitType("#upperName");
            const nameSplit = new SplitType("#myName");
            const jobSplit = new SplitType("#job");
            const tl = gsap.timeline();
            tl.to(".char", {
              y: 0,
              stagger: 0.05,
              delay: 0.5,
              duration: 0.1,
            })
              .fromTo(
                ".box1",
                { opacity: 0, rotate: 360 },
                { opacity: 1, rotate: 0, duration: 2, ease: "circ.out" },
                "-=2"
              )
              .fromTo(
                ".box2",
                { opacity: 0, rotate: -360 },
                { opacity: 1, rotate: 45, duration: 2, ease: "circ.out" },
                "-=2"
              )
              .fromTo(
                ".navbar",
                { opacity: 0, y: "-100%" },
                { opacity: 1, y: 0, duration: 0.5 }
              )
              .fromTo(
                ".email",
                { opacity: 0, y: "100%" },
                { opacity: 1, y: 0, duration: 0.5 },
                "+=0.5"
              );
          }
        }
      );
    }, []);
    return () => ctx.revert();
  }, []);
  return (
    <main className="w-screen h-screen relative">
      <Navbar />
      <section className="w-screen h-screen flex flex-col justify-center items-center">
        <Border rotate={false} divClass="box1" />
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
        <Border rotate={true} divClass="box2" />
        <p className="email text-3xl hidden md:block absolute bottom-10 left-10">
          jakubpaszko01@gmail.com
        </p>
      </section>
    </main>
  );
};

export default Main;
