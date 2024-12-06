import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';


// Interface pour typer les classes dynamiques dans NavLink
interface NavLinkClassProps {
    isActive: boolean;
}

export const NavBar: React.FC = () => {


    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }: NavLinkClassProps) => isActive ? "active-link" : ""}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }: NavLinkClassProps) => isActive ? "active-link" : ""}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/services"
                        className={({ isActive }: NavLinkClassProps) => isActive ? "active-link" : ""}
                    >
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }: NavLinkClassProps) => isActive ? "active-link" : ""}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
