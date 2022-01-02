import React from "react";
import "./Formation.scss";
import "animate.css";
import ecoles from "../../data/ecoles";

console.log(ecoles);

export default function Formation() {
  return (
    <div className="formation-container">
      <div className="formation">
        <ul className="formation-ul">
          {ecoles.map((ecole, index) => (
            <li
              className="formation-li animate__animated animate__jackInTheBox"
              key={index}
            >
              <a href="#oClock" className="formation-link">
                {ecole.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {ecoles.map((ecole, index) => (
          <div
            key={index}
            className="school-container"
            style={{ background: ecole.background }}
          >
            <h2 className="formation-title " id="oClock">
              {ecole.title}
            </h2>
            <h3 className="formation-subtitle">{ecole.subtitle}</h3>
            <p className="formation-description">{ecole.description}</p>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
