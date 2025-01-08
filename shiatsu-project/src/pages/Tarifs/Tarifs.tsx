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
                <h2 className="fade-in">Tarifs</h2>

                {/* Introduction */}
                <p className="fade-in delay-1">
                    Découvrez mes tarifs pour des séances adaptées à vos besoins, ainsi que des formations en petit groupe.
                </p>

                {/* Cartes de Tarifs */}
                <div className="tarif-cards fade-in delay-2">
                    <div className="tarif-card">
                        <h3>
                            <i className="fas fa-user"></i> Séances Individuelles
                        </h3>
                        <ul>
                            <li>
                                <span className="title">Shiatsu Adultes (16+ ans):</span>
                                <span className="price">60€</span>
                            </li>
                            <li>
                                <span className="title">Shiatsu Adolescents (11-15 ans):</span>
                                <span className="price">40€</span>
                            </li>
                            <li>
                                <span className="title">Shiatsu Enfants (jusqu'à 10 ans):</span>
                                <span className="price">30€</span>
                            </li>
                            <br />
                            <li>
                                <span className="title">Lahochi Adultes:</span>
                                <span className="price">70€</span>
                            </li>
                            <li>
                                <span className="title">Lahochi Enfants:</span>
                                <span className="price">50€</span>
                            </li>
                            <br />
                            <li>
                                <span className="title">Formation Lahochi:</span>
                                <span className="price">Sur devis</span>
                            </li>
                        </ul>
                    </div>
                    <div className="tarif-card">
                        <h3>
                            <i className="fas fa-building"></i> Séances en Entreprise
                        </h3>
                        <p>
                            <span className="title">Tarif:</span> <span className="price">Sur devis</span>
                        </p>
                    </div>
                </div>

                {/* Informations sur les paiements */}
                <section className="paiements fade-in delay-3">
                    <h3>
                        <i className="fas fa-wallet"></i> Modes de Paiement
                    </h3>
                    <p>Les paiements sont acceptés en espèces ou par chèque uniquement.</p>
                </section>

                {/* Informations sur les remboursements */}
                <section className="mutuelles fade-in delay-4">
                    <h3>
                        <i className="fas fa-file-invoice"></i> Remboursements Mutuelles
                    </h3>
                    <p>
                        De nombreuses mutuelles remboursent partiellement ou totalement les séances de shiatsu.
                        Veuillez vous rapprocher de votre mutuelle pour plus d’informations.
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
