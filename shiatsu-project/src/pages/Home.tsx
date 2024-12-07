import React from 'react';
import { Header } from '../components/Header/Header';
import { Services } from '../components/Services/Services';
import { Testimonials } from '../components/Testimonials/Testimonials';
import { CTA } from '../components/CTA/CTA';
import './Home.scss';
import HandHealing from "../assets/HandHealing.jpg"
import { Footer } from '../components/Footer/Footer';

export const Home: React.FC = () => {
    const handleCTAClick = () => {
        alert('Redirection vers la page de réservation');
    };

    return (
        <div className="home">
            <Header />
            <main className="main-content">
                <section className="intro">
                    <img src={HandHealing} alt="Soin des problèmes de poignet" />
                    <div className="intro-text">
                        <h2>Bienvenue chez Shiatsu Bien-être</h2>
                        <p>
                            Découvrez l'art japonais ancestral du shiatsu, une méthode conçue pour restaurer l'équilibre et l'harmonie entre le corps et l'esprit.
                        </p>
                    </div>
                </section>
                <Services />
                <Testimonials />
                <CTA
                    title="Prêt(e) à commencer votre voyage ?"
                    buttonText="Réserver une séance"
                    onButtonClick={handleCTAClick}
                />
                <Footer />
            </main>
        </div>
    );
};

