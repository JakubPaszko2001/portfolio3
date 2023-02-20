import { useState, useEffect } from "react";
import Title from "../Components/Title";
import portrait from "../Image/zdjecie.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
const About = () => {
  const header = "About Me";
  const paragraph = "Know me better";
  const education = {
    title: "My learning journal",
    paragraf:
      "After ending my IT technical school I started learning more how to create websites. I'm working on projects over one year now. Knowledge I've own is from youtube, scrimba and forums. Learning by my own feels much better for me rather then studying, I feel much more comfortable and focused.",
  };
  const hobbies = {
    title: "I spend some time on",
    paragraf:
      "I go to the gym 3/4 times a week. I try to maintain my physical fitness at a high level, especially since I spend most of the day sitting. The gym helps me build regularity and endurance in pursuit of the goal. In my free time, I love skateboarding. I like to push my limits and despite failures, I try not to give up. That's why I keep repeating the trick until I learn it. Skateboarding also helps me clear my mind",
  };
  const learning = {
    title: "My next steps",
    paragraf:
      "I definitely want to develop my React knowledge. One of the key things I want to master is better performance and optimization. I also like 3D websites or various animations, so I will probably learn the Three.js library in my free time.",
  };
  const [text, setText] = useState(education);

  const [appState, changeState] = useState({
    activeObject: null,
    objects: [
      { id: 1, name: "Education", set: education },
      { id: 2, name: "Hobbies", set: hobbies },
      { id: 3, name: "Learning", set: learning },
    ],
  });

  function toggleActive(index) {
    changeState({ ...appState, activeObject: appState.objects[index] });
  }

  function toggleActiveStyles(index) {
    if (appState.objects[index] === appState.activeObject) {
      return "active";
    } else {
      return "";
    }
  }
  useEffect(() => {
    toggleActive(appState.objects[0].id - 1);
  }, []);
  return (
    <section id="About">
      <Title header={header} paragraph={paragraph} firstMargin={true} />
      <div className="grid grid-cols-6">
        <section className="col-start-2 col-end-6 md:col-end-4">
          <div className="w-full flex justify-between mb-4">
            {appState.objects.map((element, index) => {
              return (
                <button
                  key={element.id}
                  onClick={() => {
                    toggleActive(index);
                    setText(element.set);
                  }}
                  className={`w-1/3 py-4 hover:bg-[#d6a928] ease-in duration-300 ${toggleActiveStyles(
                    index
                  )}`}
                >
                  {element.name}
                </button>
              );
            })}
          </div>
          <h4 className="mb-2 text-lg md:text-xl lg:text-2xl">{text.title}</h4>
          <p className="mb-2 md:text-lg lg:text-xl">{text.paragraf}</p>
        </section>
        <LazyLoadImage
          className="col-start-2 md:col-start-5 col-end-6 rounded-lg"
          threshold={300}
          src={portrait}
          alt="portrait"
        />
      </div>
    </section>
  );
};

export default About;
