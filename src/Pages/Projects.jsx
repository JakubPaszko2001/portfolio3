import { React, useState } from "react";
import Title from "../Components/Title";
import ProjectsContainer from "../Components/ProjectsContainer";
import Graphql from "../Image/Graphql.webp";
import hacjenda from "../Image/hacjenda.webp";
import TheCinema from "../Image/TheCinema.webp";
import Lyricks from "../Image/Lyricks.webp";
import Modal from "../Components/Modal";
const Projects = () => {
  const header = "Projects";
  const paragraph = "Websites I’ve already build";
  const [modalData, setModalData] = useState();

  const projects = [
    {
      src: TheCinema,
      name: "Cinema Project",
      live: "https://cinema-kappa-three.vercel.app/",
      github: "https://github.com/JakubPaszko2001/cinema",
      information: {
        header: "Cinema Project",
        paragraphs:
          "At hero section we've got randomly taken movie from api witch shows up on background. On the left side there is a description of the movie. Down below you can see a list of movies with their posters. Each movie has a button showing a trailer with a description or the possibility of booking a ticket. The seat reservation system was created using localstorage.",
        technogies: "Next.js, TypeScript, Tailwind",
      },
      start: true,
    },
    {
      src: Lyricks,
      name: "Lyricks Project",
      live: "https://beautiful-manatee-dec1fd.netlify.app",
      github: "https://github.com/JakubPaszko2001/Lyricks",
      information: {
        header: "Cinema Project",
        paragraphs:
          "At hero section we've got randomly taken movie from api witch shows up on background. On the left side there is a description of the movie. Down below you can see a list of movies with their posters. Each movie has a button showing a trailer with a description or the possibility of booking a ticket. The seat reservation system was created using localstorage.",
        technogies: "Next.js, TypeScript, Tailwind",
      },
    },
    {
      src: Graphql,
      name: "GraphQL Project",
      live: "",
      github: "https://github.com/JakubPaszko2001/Graphql",
      information: {
        header: "GraphQL Project",
        paragraphs:
          "At first you have bookshelf with all books from database. After clicking on particular book you can checkout informations about it. Down below infomations you can add your author and then add a book.",
        technogies: "GraphQL, MongoDB",
      },
      start: true,
    },
    {
      src: hacjenda,
      name: "Restaurant Website",
      live: "https://hacjendajasionowka.pl/#/",
      github: "https://github.com/JakubPaszko2001/hacjenda",
      information: {
        header: "Cinema Project",
        paragraphs:
          "My first order for website. I had the website design so my role was to write it and post it on a server with FTP.",
        technogies: "React, Tailwind",
      },
    },
  ];
  return (
    <section>
      <Title header={header} paragraph={paragraph} />
      <section className="grid grid-cols-6 gap-4">
        {projects.map(({ src, name, start, live, github, information }) => (
          <ProjectsContainer
            key={name}
            src={src}
            name={name}
            start={start}
            live={live}
            github={github}
            information={information}
            modalData={modalData}
            setModalData={setModalData}
          />
        ))}
        <Modal data={modalData} />
      </section>
    </section>
  );
};

export default Projects;
