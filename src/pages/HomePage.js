import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import NavBar from "../components/NavBar";

const HomePage = () => {
  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    const response = await fetch("/api/project/feature");
    const data = await response.json();
    setProjects(data.projectArr);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1> Charity Finder </h1>
        <article>
          Greetings and welcome, below are some charity you can check out.
        </article>
        <div className="container">
          {projects.map(project => {
            return (
              <Card
                cardTitle={project.projectTitle}
                cardText={project.projectSum}
                cardImg={project.projectImgLink}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default HomePage;
