import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

export const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav aria-label="Navigation principale">
            <button
                className="menu-toggle"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={isMenuOpen}
                aria-controls="main-menu"
            >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} menu-icon`} aria-hidden="true"></i>
            </button>

            {/* Overlay pour fermer le menu en cliquant en dehors */}
            {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

            {/* Menu déroulant */}
            <ul id="main-menu" className={`menu-links ${isMenuOpen ? 'menu-open' : ''}`}>
                <li>
                    <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? 'link-active' : '')}>
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/prestations" onClick={closeMenu} className={({ isActive }) => (isActive ? 'link-active' : '')}>
                        Prestations
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tarifs" onClick={closeMenu} className={({ isActive }) => (isActive ? 'link-active' : '')}>
                        Tarifs
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/diplomas" onClick={closeMenu} className={({ isActive }) => (isActive ? 'link-active' : '')}>
                        Diplômes & Formations
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
