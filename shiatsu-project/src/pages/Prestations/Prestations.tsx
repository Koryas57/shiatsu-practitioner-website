import React, { useState } from 'react';
import './Prestations.scss';

import Nenuphar from '../../assets/nenuphar2.jpg';
import BackHealing from '../../assets/BackHealing.jpg';
import Skeleton from '../../assets/SkeletonMedicine.jpg';
import { CTA } from '../../components/CTA/CTA';
import { Footer } from '../../components/Footer/Footer';
import { ContactModal } from '../../components/ContactModal/ContactModal';
import { ConfirmationModal } from '../../components/ConfirmationModal/ConfirmationModal';
import { Header } from '../../components/Header/Header';

interface Prestation {
    title: string;
    image: string;
    description: string;
}

const prestationsData: Prestation[] = [
    {
        title: 'Shiatsu Thérapeutique',
        image: Nenuphar,
        description: `
        Le shiatsu thérapeutique va au-delà de la relaxation. Il agit sur les déséquilibres profonds du corps et de l'esprit en travaillant sur les méridiens énergétiques. Cette pratique, reconnue pour ses bienfaits, soulage efficacement les douleurs chroniques, le stress intense, et les troubles liés à la fatigue. En stimulant les points d'acupression, nous aidons votre corps à retrouver son équilibre naturel.
        Une séance permet de rétablir un flux énergétique harmonieux, indispensable à votre bien-être. Croyez en votre potentiel de guérison.`,
    },
    {
        title: 'Shiatsu Relaxation',
        image: BackHealing,
        description: `
        Le shiatsu relaxation est une invitation à un voyage intérieur. À travers des gestes précis et harmonieux, cette technique soulage les tensions accumulées, revitalise le corps et apaise l'esprit. Parfait pour ceux qui souhaitent déconnecter du stress quotidien, il vous offre un moment de sérénité absolue.
        Vous sentez-vous souvent tendu ou débordé ? Prenez le temps de respirer et laissez notre expertise vous guider vers un mieux-être immédiat.`,
    },
    {
        title: 'Laochi',
        image: Skeleton,
        description: `
        Le Laochi, issu de pratiques énergétiques ancestrales, est une méthode douce qui vise à harmoniser les énergies du corps. Contrairement au shiatsu, cette technique ne repose pas sur la pression, mais sur une approche subtile et intuitive.
        C’est une expérience unique, profondément relaxante et réparatrice, qui s’adresse à ceux qui recherchent un apaisement spirituel autant que physique. Laissez-vous surprendre par cette connexion profonde entre votre corps et votre esprit.`,
    },
];


export const Prestations: React.FC = () => {

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
            <section className="prestations">
                <h2>Mes Prestations</h2>
                <p className="intro">
                    Découvrez mes prestations, alliant expertise et spiritualité, pour retrouver un équilibre durable entre le corps et l'esprit.
                </p>
                <div className="prestation-list">
                    {prestationsData.map((prestation, index) => (
                        <div className="prestation-item" key={index}>
                            <img src={prestation.image} alt={prestation.title} />
                            <div className="prestation-details">
                                <h3>{prestation.title}</h3>
                                <p>{prestation.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="cta-presta">
                    Prenez rendez-vous dès maintenant pour explorer ces pratiques uniques et ressentir leurs bienfaits dès la première séance.
                </p>
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
