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
                    <div className="intro-text">
                        <h2>Bienvenue chez Shiatsu Yasmina</h2>
                        <p>
                            Reconnectez-vous avec votre bien-être intérieur grâce au shiatsu, une discipline ancestrale qui équilibre corps et esprit. Découvrez des soins personnalisés pour apaiser le stress, soulager les tensions et retrouver votre harmonie naturelle
                        </p>
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
