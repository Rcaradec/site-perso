import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
//import {Button} from "../Button"
import "./NavBar.scss";

function NavBar() {
  //hook pour gestion du clic
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // Changement de classe pour l'icone au clic
  const handleClick = () => {
    setClick(!click);
  };

  //
  const closeMobileMenu = () => {
    setClick(false);
  };

  //affiche le bouton en fonction de la taille d'écran
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // évitel'apparation du bouton au milieu de la navBar,
  // au refresh sur petits ecrans.
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar animate__animated animate__fadeInLeftBig">
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
                Accueil{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                A Propos{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projets"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projets{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/formation"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Formation{" "}
              </NavLink>
            </li>
          </ul>
          {/* Pas encore sûr de l'utiliser
           {button && <Button buttonStyle='btn--outline'>Contact</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
