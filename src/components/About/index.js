import React from "react";
import "./About.scss";
import "animate.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="text-container animate__animated animate__fadeIn">
        <h1 className="about-title ">Bonjour, je suis Rémi.</h1>
        <h2 className="about-subtitle">Développeur Junior React</h2>
        <p className="about-description">
          Bienvenue sur ce site qui a pour but de me présenter et de vous
          proposer les différents projets que j'ai réalisé.
        </p>
      </div>
    </div>
  );
}
