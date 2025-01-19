import React from "react";
import projectOne from "../assets/project_1.png";
import projectTwo from "../assets/projectTwo.jpg";
import projectThree from "../assets/projectThree.jpg";

const AllProjects = () => {
  const projectData = [
    {
      id: 1,
      title: "Homik Adventures",
      description: "Mini Side Scrolling Game",
      imageUrl: projectOne,
      link: "https://br-117.github.io/game/",
    },
    {
      id: 2,
      title: "MeYou",
      description: "Cat Dating App Landing Page",
      imageUrl: projectTwo,
      link: "https://bimrai.github.io/meyou_dating_cat_app_project/",
    },
    {
      id: 3,
      title: "BoxUp",
      description: "Landing Page For Logistics Company",
      imageUrl: projectThree,
      link: "https://bimrai.github.io/BoxUpLogistics_landing_page/",
    },
  ];

  return (
    <section className="all-projects-section bg-gray-100 min-h-screen">
      <div className="all-projects-container max-w-5xl mx-auto p-6">
        <h2 className="text-4xl font-bold text-center mb-8">All Projects</h2>
        <div className="projects-list flex flex-col gap-6">
          {projectData.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card flex items-center border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-image w-1/3 h-full object-cover"
              />
              <div className="project-info p-6 flex-1">
                <h4 className="project-title text-xl font-semibold text-gray-800">
                  {project.title}
                </h4>
                <p className="project-description text-gray-600 mt-2">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
