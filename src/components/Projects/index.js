import React from "react";
import projets from "../../data/projets";
import "./Projects.scss"


export default function Projects() {
  return (
    <div>
      <div className="projects-prez">
        <h1 className="projects-main-title">Mes Projets</h1>
        <p className="projects-desc">Voici une sélection de projets que j'ai pu faire en autonomie et durant ma formation.</p>
      </div>
      {projets.map((projets, index) => (
        <div
          key={index}
          className="projects-container"
          style={{ background: projets.background }}
        >
          <h2 className="projects-title" id="oClock">
            {projets.title}
          </h2>
          <p className="projects-desc">{projets.description}</p>
          <h3 className="projects-subtitle">{projets.subtitle}</h3>
          <ul className="projects-ul">
            <li className="projects-li"><i class="fab fa-github"></i></li>
            <li className="projects-li"><i class="fab fa-chrome"></i></li>
          </ul>
        </div>
      ))}
    </div>
  );
}
  