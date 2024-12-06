import React from 'react';
import { Header } from '../components/Header/Header';
import { Services } from '../components/Services/Services';
import { Testimonials } from '../components/Testimonials/Testimonials';
import { CTA } from '../components/CTA/CTA';
import './Home.scss';

export const Home: React.FC = () => {
    const handleCTAClick = () => {
        alert('Redirection vers la page de réservation');
    };

    return (
        <div className="home">
            <Header />
            <main className="main-content">
                <section className="intro">
                    <h2>Bienvenue chez Shiatsu Bien-être</h2>
                    <p>
                        Découvrez l'art japonais ancestral du shiatsu, une méthode conçue pour restaurer l'équilibre et l'harmonie entre le corps et l'esprit.
                    </p>
                </section>
                <Services />
                <Testimonials />
                <CTA
                    title="Prêt(e) à commencer votre voyage ?"
                    buttonText="Réserver une séance"
                    onButtonClick={handleCTAClick}
                />
            </main>
        </div>
    );
};

