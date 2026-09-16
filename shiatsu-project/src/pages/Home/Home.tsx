import React, { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Services } from '../../components/Services/Services';
import { Testimonials } from '../../components/Testimonials/Testimonials';
import { CTA } from '../../components/CTA/CTA';
import { Footer } from '../../components/Footer/Footer';
import { ContactModal } from '../../components/ContactModal/ContactModal';
import { ConfirmationModal } from '../../components/ConfirmationModal/ConfirmationModal';
import './Home.scss';
import { Map } from '../../components/Map/Map';
import { PublicDetails } from '../../components/PublicDetails/PublicDetails';
import { NavLink } from 'react-router-dom';
import heroPoster from '../../assets/introTxtImg_16_11zon.webp';




export const Home: React.FC = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

    const handleCTAClick = () => {
        setIsContactModalOpen(true);
    };

    const handleCloseContactModal = () => {
        setIsContactModalOpen(false);
    };

    const handleConfirmContact = () => {
        setIsContactModalOpen(false);
        setIsConfirmationModalOpen(true);
    };

    const handleCloseConfirmationModal = () => {
        setIsConfirmationModalOpen(false);
    };

    return (
        <div className="home">
            <Header />
            <main className="main-content">
                <section className="home-hero" aria-labelledby="home-title">
                    <video
                        className="intro-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster={heroPoster}
                        aria-hidden="true"
                    >
                        <source src="/shiatsu-hero.mp4" type="video/mp4" />
                    </video>
                    <div className="intro-veil" aria-hidden="true" />
                    <div className="intro-text">
                        <span className="intro-eyebrow">Shiatsu & Lahochi · Yutz</span>
                        <h2 id="home-title">
                            Retrouver l’équilibre,
                            <em> simplement.</em>
                        </h2>
                        <p>
                            Des soins personnalisés pour apaiser le stress, relâcher les tensions et retrouver une harmonie durable entre le corps et l’esprit.
                        </p>
                        <div className="intro-actions">
                            <button type="button" onClick={handleCTAClick}>Prendre rendez-vous</button>
                            <NavLink to="/prestations">Découvrir les soins</NavLink>
                        </div>
                    </div>
                </section>
                <Services />
                <PublicDetails />
                <Testimonials />
                <CTA
                    title="Prêt(e) à prendre soin de vous ?"
                    buttonText="Réserver une séance"
                    onButtonClick={handleCTAClick}
                />
                <Map />
                <Footer />
            </main>
            {/* Modale de contact */}
            {isContactModalOpen && (
                <ContactModal
                    onClose={handleCloseContactModal}
                    onConfirm={handleConfirmContact}
                />
            )}
            {/* Modale de confirmation */}
            {isConfirmationModalOpen && (
                <ConfirmationModal onClose={handleCloseConfirmationModal} />
            )}
        </div>
    );
};
