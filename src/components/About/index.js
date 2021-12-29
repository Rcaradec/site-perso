import React from "react";
import "./About.scss";
import "animate.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="text-container animate__animated animate__fadeInLeft">
        <h1 className="about-title">Développeur Junior React</h1>
        <p className="about-description">
          Après 15 ans dans l'Audiovisuel et plus particulèrement dans l'univers
          de l'Image, je décide aujourd'hui de me consacrer pleinement au métier
          de Développeur Front-end.<hr></hr> En effet fort de l'expérience
          acquise aussi bien par la programmation de projecteurs lumière
          asservis, puis par l'utilisation quotidienne de tout type de caméras
          sur les plateaux TV, je souhaite me focaliser pleinement sur le
          potentiel de ce métier, à savoir allier la haute technicité au service
          de la créativité.
          <br />
          L'expérience utilisateur >est au choeur de mes préoccupations, et je
          veille sans cesse afin de pouvoir proposer les fonctionnalités les
          plus pertinentes et innovantes.<hr></hr> Le Métier de Développeur
          m'attire particulièrement de par sa perpétuelle évolution, et je
          souhaite aujourd'hui pouvoir collaborer avec des personnes passionnées
          sur des projets stimulants. Vous voulez en discuter d'avantage ?{" "}
          <a className="about-link" href="/contact">
            Allons-y!
          </a>
        </p>
      </div>
    </div>
  );
}
