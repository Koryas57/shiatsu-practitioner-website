import React, { useState } from 'react';
import './Tarifs.scss';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { CTA } from '../../components/CTA/CTA';
import { ContactModal } from '../../components/ContactModal/ContactModal';
import { ConfirmationModal } from '../../components/ConfirmationModal/ConfirmationModal';

export const Tarifs: React.FC = () => {

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
        <>
            <Header />
            <section className="tarifs">
                {/* Titre avec animation */}
                <h2 className="fade-in">Mes Tarifs</h2>

                {/* Introduction */}
                <p className="fade-in delay-1">
                    Découvrez mes tarifs adaptés à tous. Que ce soit pour une séance de relaxation, un besoin thérapeutique ou des prestations en entreprise, trouvez ce qui vous convient le mieux.
                </p>

                {/* Cartes de Tarifs */}
                <div className="tarif-cards fade-in delay-2">
                    <div className="tarif-card">
                        <h3>Séance Individuelle</h3>
                        <p>Adulte : 60€</p>
                        <p>Enfant : 40€</p>
                    </div>
                    <div className="tarif-card">
                        <h3>Séance en Entreprise</h3>
                        <p>Sur devis</p>
                    </div>
                </div>

                {/* Informations sur les remboursements */}
                <section className="mutuelles fade-in delay-3">
                    <h3>Remboursements Mutuelles</h3>
                    <p>
                        De nombreuses mutuelles remboursent partiellement ou totalement les séances de shiatsu. Veuillez vous rapprocher de votre mutuelle pour plus d’informations.
                    </p>
                    <p className="siret">Numéro SIRET : 98743655700019</p>
                </section>
            </section>
            <CTA
                title="Prêt(e) à commencer votre voyage ?"
                buttonText="Réserver une séance"
                onButtonClick={handleCTAClick}
            />
            <Footer />
            {isContactModalOpen && (
                <ContactModal
                    onClose={handleCloseContactModal}
                    onConfirm={handleConfirmContact}
                />
            )}
            {isConfirmationModalOpen && (
                <ConfirmationModal onClose={handleCloseConfirmationModal} />
            )}
        </>

    );
};
