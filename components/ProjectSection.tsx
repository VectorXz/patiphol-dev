import React from "react";
import Button from "./Button";
import ProjectCard from "./ProjectCard";

const ProjectSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 w-full max-w-xl my-5">
      <h1 className="text-4xl font-bold text-fuchsia-500">My Projects</h1>
      <br />
      <ProjectCard
        title="Sushi Plate Calculator App"
        description="Just open the app and tap on the plate&price that you've eaten, then the app will calculate total for you!"
        url="https://sushi.patiphol.dev/"
      ></ProjectCard>
    </div>
  );
};

export default ProjectSection;
