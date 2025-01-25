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
                    Découvrez mes tarifs adaptés à vos besoins. Chaque prestation est pensée pour vous offrir un bien-être optimal.
                </p>

                {/* Cartes de Tarifs */}
                <div className="tarif-cards fade-in delay-2">
                    <div className="tarif-card">
                        <h3>Shiatsu</h3>
                        <p>Adultes (à partir de 16 ans) : <strong>60€</strong></p>
                        <p>Adolescents (11 à 15 ans) : <strong>40€</strong></p>
                        <p>Enfants (jusqu'à 10 ans) : <strong>30€</strong></p>
                    </div>
                    <div className="tarif-card">
                        <h3>Lahochi</h3>
                        <p>Adultes : <strong>70€</strong></p>
                        <p>Enfants : <strong>50€</strong></p>
                    </div>
                    <div className="tarif-card">
                        <h3>Formation Lahochi</h3>
                        <p>Tarif par personne : <strong>150€</strong></p>
                    </div>
                    <div className="tarif-card">
                        <h3>Shiatsu Entreprises</h3>
                        <p><strong>Sur devis</strong></p>
                    </div>
                </div>

                {/* Section des paiements */}
                <section className="paiements fade-in delay-3">
                    <h3>Modes de Paiement Acceptés</h3>
                    <ul>
                        <li>✒️ Chèques</li>
                        <li>💶 Espèces</li>
                    </ul>
                </section>

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
                title="Prêt(e) à prendre soin de vous ?"
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
