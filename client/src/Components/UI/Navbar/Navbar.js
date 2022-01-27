import React from 'react';
import Bird from '../../../Assets/images/bird.jpg';
import { NavLink } from 'react-router-dom';

const navbar = (props) => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-primary bgClrNav">
            <div className="container-fluid fw-bold">
                <a className="navbar-brand" href="/">
                    <img src={Bird} className="rounded logoNavbar" alt="" />
                </a>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    Menu<span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <NavLink to="/" exact className="nav-link">Accueil</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/parc" exact className="nav-link">Le parc</NavLink>
                    </li>
                </ul>
                <div className="d-flex">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink to="/contact" exact className="nav-link">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin" exact className="nav-link">Connexion</NavLink>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>
    </header>
);

export default navbar;