import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    <ul className="nav-bar">
                        <NavLink
                            to={"/"}
                            // il va verifier si l'url correspond a to ={"/"} si oui donne lui la classe nav.active a ton li sinon rien
                            className={(nav) =>
                                nav.isActive ? "nav-active" : "nav-not-active"
                            }>
                            <li>Films</li>
                        </NavLink>
                        <NavLink
                            to={"/liked"}
                            className={(canard) =>
                                canard.isActive
                                    ? "nav-active"
                                    : "nav-not-active"
                            }>
                            <li>Favoris</li>
                        </NavLink>
                    </ul>
                </div>
                <h1>React Movie</h1>
            </nav>
        </header>
    );
};

export default Header;
