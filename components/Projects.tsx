import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import amazonClone from "../public/img/projects/amazonClone.jpg";
import cyberBlog from "../public/img/projects/cyberBlog.jpg";
import reactBD from "../public/img/projects/reactBD.jpg";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projets" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={amazonClone.src}
          title="Ramonage, entretien, chaudière"
          link="https://www.rec-plus.fr/"
        />
        <ProjectCard
          img={reactBD.src}
          title="Underground France"
          link="https://www.underground-france.com/"
        />
        <ProjectCard
          img={cyberBlog.src}
          title="Efisun"
          link="https://www.efisun.fr/"
        />
      </div>
    </div>
  );
};

export default Projects;
