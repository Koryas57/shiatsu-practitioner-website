import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import './Header.scss';
import Logo from "../../assets/logoPractitioner2_19_11zon.webp"

export const Header: React.FC = () => {
    return (
        <header className="header">
            <NavLink to="/" className="header-mark" aria-label="Shiatsu Yasmina, accueil">
                <img src={Logo} alt="" />
            </NavLink>
            <div className="logo">
                <h1>Yasmina Cobelli</h1>
                <p>Praticienne Shiatsu & Lahochi</p>
            </div>
            <NavBar />
        </header>
    );
};
