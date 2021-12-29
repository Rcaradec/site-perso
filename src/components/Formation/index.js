import React from "react";
import { Button } from "../Button";
import "./Formation.scss";
import "animate.css";

export default function Formation() {
  return (
    <div className="formation-container">
      <div className="text-container animate__animated animate__fadeIn">
        <h1 className="formation-title ">Bonjour, je suis Rémi.</h1>
        <h2 className="formation-subtitle">Développeur Junior React</h2>
        <p className="formation-description">
          Bienvenue sur ce site qui a pour but de me présenter et de vous
          proposer les différents projets que j'ai réalisé.
        </p>
      </div>
    </div>
  );
}
