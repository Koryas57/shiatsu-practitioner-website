import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import './Header.scss';

export const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">Shiatsu Bien-être</div>
            <NavBar />
        </header>
    );
};
