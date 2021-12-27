import React from 'react';
import { Button } from '../Button'
import "./Main.scss";

export default function Main() {
  return (
      <div className="main-container">
        <div className="text-container">
          <h1 className="main-title">Salut, je suis Rémi.</h1>
          <h2 className="main-subtitle">Développeur Junior React</h2>
          <p className="main-description">Bienvenue sur ce site qui a pour but de me présenter et de
            vous proposer les différents projets que j'ai réalisé.</p>
              <Button>En savoir plus</Button>
        </div>
      
      </div>
      
  )
}
