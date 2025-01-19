import React from "react";
import { Link } from "react-router-dom";
import projectOne from "../assets/project_1.png";
import projectTwo from "../assets/projectTwo.jpg";
import projectThree from "../assets/projectThree.jpg";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Project One",
      description: "Side Scroller Interactive Game",
      imageUrl: projectOne,
      link: "https://br-117.github.io/game/",
    },
    {
      id: 2,
      title: "Project Two",
      description: "Cat Dating App Landing Page",
      imageUrl: projectTwo,
      link: "https://bimrai.github.io/meyou_dating_cat_app_project/",
    },
    {
      id: 3,
      title: "Project Three",
      description: "Landing Page For Logistics Company",
      imageUrl: projectThree,
      link: "https://bimrai.github.io/BoxUpLogistics_landing_page/",
    },
  ];

  return (
    <section className="projects-section bg-gray-100 h-screen">
      <div className="projects-container">
        <h3 className="projects-title text-center text-3xl font-bold">
          Projects
        </h3>
        <div className="projects-grid grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {projectData.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card block border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-image w-full h-48 object-cover"
              />
              <div className="project-info p-4">
                <h4 className="project-title text-lg font-semibold">
                  {project.title}
                </h4>
                <p className="project-description text-gray-600 mt-2">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
        <div className="all-projects-wrapper">
          <Link to="/all-projects" className="hero-btns all-projects">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
