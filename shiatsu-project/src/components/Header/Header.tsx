import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import './Header.scss';

export const Header: React.FC = () => {
    return (
        <header>
            <h1>Shiatsu Wellness</h1>
            <NavBar />
        </header>
    );
};

