import React, { useState } from 'react';
import { Header } from '../components/Header/Header';
import { Services } from '../components/Services/Services';
import { Testimonials } from '../components/Testimonials/Testimonials';
import { CTA } from '../components/CTA/CTA';
import { Footer } from '../components/Footer/Footer';
import { ContactModal } from '../components/ContactModal/ContactModal';
import { ConfirmationModal } from '../components/ConfirmationModal/ConfirmationModal';
import './Home.scss';
import HandHealing from '../assets/HandHealing.jpg';
import { Map } from '../components/Map/Map';
import { PublicDetails } from '../components/PublicDetails/PublicDetails';




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
                <PublicDetails />
                <CTA
                    title="Prêt(e) à commencer votre voyage ?"
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
