import { Carousel } from "@mantine/carousel";
import "./Projects.scss";
import { BsGithub } from "react-icons/bs";
import projectDetails from "./Projects";
import { Badge } from '@mantine/core';

export default function Project() {
  return (
   <div>
    <h3 className="sub-heading">Projects</h3>
     <Carousel
      withIndicators
      height={200}
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'md' }}
      loop
      align="start"
    >
      {projectDetails.map((project, index) => (
        <Carousel.Slide key={index}>
          <div className="project">
            <h3>{project.projectName}</h3>
            <ul>
              {project.projectSkills.map((tech, index) => (
                <li key={index}><Badge component="li" color="red" size="sm">{tech}</Badge></li>
              ))}
            </ul>
            <br />
            <p>{project.projectDescription}</p>
            <br />
            <button className="primary-btn">
              View Project
              <BsGithub size={"1rem"} className="project-view-icon" />
            </button>
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
   </div>
  );
}
