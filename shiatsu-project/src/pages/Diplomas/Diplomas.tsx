import React, { useState } from 'react';
import './Diplomas.scss';
import EcolePeyrard from '../../assets/ecolePeyrardShiatsu_4_11zon.webp';
import CoursMinerve from '../../assets/CoursMinerve_3_11zon.webp';
import SportShiatsu from '../../assets/SportShiatsu_29_11zon.webp'
import LahochiSandra from '../../assets/LaochiSandra_17_11zon.webp';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { CTA } from '../../components/CTA/CTA';
import { ContactModal } from '../../components/ContactModal/ContactModal';
import { ConfirmationModal } from '../../components/ConfirmationModal/ConfirmationModal';

export const Diplomas: React.FC = () => {

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
            <section className="diplomas">
                <h2>Diplômes et Formations</h2>
                <p className="intro">
                    Découvrez mes certifications et formations qui témoignent de mon engagement et de mon expertise dans le domaine du Shiatsu et du bien-être.
                </p>
                <div className="diploma-list">
                    <div className="diploma-card">
                        <img src={EcolePeyrard} alt="École Philippe Peyrard" />
                        <div className="diploma-details">
                            <h3>École Philippe Peyrard</h3>
                            <ul>
                                <li>Certificat de Shiatsu familial</li>
                                <li>Certificat de praticien Shiatsu</li>
                                <li>Certificat professionnel de Shiatsu thérapeutique</li>
                            </ul>
                            <p>Formation de 3 ans, Bourg-en-Bresse</p>
                        </div>
                    </div>
                    <div className="diploma-card">
                        <img src={CoursMinerve} alt="Cours Minerve" />
                        <div className="diploma-details">
                            <h3>Cours Minerve</h3>
                            <ul>
                                <li>Anatomie et Physiologie, niveau 1 et 2</li>
                            </ul>
                        </div>
                    </div>
                    <div className="diploma-card">
                        <img src={SportShiatsu} alt="Shiatsu du Sportif" />
                        <div className="diploma-details">
                            <h3>Shiatsu du Sportif</h3>
                            <ul>
                                <li>Formation dispensée par Hervé Ligot (F.F.S.T.)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="diploma-card">
                        <img src={LahochiSandra} alt="Formation Lahochi" />
                        <div className="diploma-details">
                            <h3>Praticien et Enseignant Lahochi</h3>
                            <ul>
                                <li>Certificat délivré par Sandra Schroeder</li>
                            </ul>
                            <p>Guenange</p>
                        </div>
                    </div>
                </div>
            </section>
            <CTA
                title="Prêt(e) à commencer votre voyage ?"
                buttonText="Réserver une séance"
                onButtonClick={handleCTAClick}
            />
            <Footer />
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
        </>
    );
};
