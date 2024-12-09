import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import './Header.scss';
import Logo from "../../assets/logoPractitioner.jpeg"

export const Header: React.FC = () => {
    return (
        <header className="header">
            <img src={Logo} alt="" />
            <div className="logo">
                <h1>Yasmina Cobelli</h1>
                <p>Praticienne Shiatsu & Lahochi</p>
            </div>
            <NavBar />
        </header>
    );
};
