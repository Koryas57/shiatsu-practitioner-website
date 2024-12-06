import React from 'react';
import './Home.scss';
import { Header } from '../components/Header/Header';

export const Home: React.FC = () => {
    return (

        <div className="home">
            <Header />
            <main className="main-content">
                {/* Contenu à développer */}
            </main>
        </div>
    );
};
