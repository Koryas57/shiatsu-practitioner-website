import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import './Header.scss';
import Logo from "../../assets/logoPractitioner.jpeg"

export const Header: React.FC = () => {
    return (
        <header className="header">
            <NavLink to="/">
                <img src={Logo} alt="Logo Zen de la praticienne" />
            </NavLink>
            <div className="logo">
                <h1>Yasmina Cobelli</h1>
                <p>Praticienne Shiatsu & Lahochi</p>
            </div>
            <NavBar />
        </header>
    );
};
