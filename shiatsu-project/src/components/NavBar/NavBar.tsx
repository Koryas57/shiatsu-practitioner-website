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
        <nav>
            <button className="menu-toggle" onClick={toggleMenu}>
                <i className="fas fa-bars menu-icon"></i>
            </button>

            {/* Overlay pour fermer le menu en cliquant en dehors */}
            {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

            {/* Menu déroulant */}
            <ul className={`menu-links ${isMenuOpen ? 'menu-open' : ''}`}>
                <li>
                    <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => (isActive ? 'link-active' : '')}>
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/testimonials" onClick={closeMenu} className={({ isActive }) => (isActive ? 'link-active' : '')}>
                        Témoignages
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? 'link-active' : '')}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
