import React from "react";
import Header from "./Heading";
import Card from "./Card";

const data = [
  {
    id: 0,
    title: "Logo Design",
    desc: "Design with Adobe Photoshop & Illustrator",
    img: "/basit1.png",
    tags: ["Adobe Photoshop", "Adobe Illustrator",],
  },
  {
    id: 1,
    title: "Resume Builder",
    desc: "Create with html,css,js,ts for resume builder",
    img: "/Capture.PNG",
    tags: ["HTML", "Javascript", "Typescript", "CSS"],
  },
 
  {
    id: 3,
    title: "T shirt logo",
    desc: "Design with Adobe Photoshop & Illustrator",
    img: "/t shirt logo1.png",
    tags: ["Adobe Photoshop", "Adobe Illustrator"],
  },
  {
    id: 4,
    title: "Branding Logo for Tiles",
    desc: "Design with Adobe Photoshop & Illustrator",
    img: "/logo.png",
    tags:  ["Adobe Photoshop", "Adobe Illustrator"],
  },
  {
    id: 5,
    title: "Design logo",
    desc: "Design with Adobe Photoshop & Illustrator",
    img: "/design.png",
    tags: ["Adobe Photoshop", "Adobe Illustrator"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container pt-32">
      <Header title="My Projects" />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;