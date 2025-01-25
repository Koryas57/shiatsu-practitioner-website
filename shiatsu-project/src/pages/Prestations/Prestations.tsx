import React, { useState } from 'react';
import './Prestations.scss';

import Shiatsu from '../../assets/Shiatsu.webp';
import Lahochi from '../../assets/Lahochi.webp';
import FormationLahochi from '../../assets/formationLahochi.webp';
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
        title: 'Shiatsu',
        image: Shiatsu,
        description: `
            Le Shiatsu est une pratique ancestrale japonaise qui combine des pressions 
            manuelles, des étirements doux et des techniques spécifiques pour rétablir 
            l'équilibre énergétique du corps. Cette méthode vise à soulager les tensions 
            musculaires, améliorer la circulation énergétique et réduire le stress. 
            Idéal pour apaiser le corps et revitaliser l'esprit, chaque séance est 
            adaptée à vos besoins spécifiques pour une expérience profondément relaxante.
        `,
    },
    {
        title: 'Lahochi',
        image: Lahochi,
        description: `
            Le Lahochi est une technique énergétique puissante et douce, idéale pour 
            harmoniser le corps et l'esprit. En utilisant une approche subtile, cette 
            méthode aide à dissiper les blocages énergétiques et à stimuler le processus 
            naturel de guérison. Chaque séance offre une reconnexion à votre énergie 
            vitale, vous laissant apaisé et revitalisé. C’est une invitation à explorer 
            un bien-être durable, tout en douceur et en profondeur.
        `,
    },
    {
        title: 'Formation Lahochi',
        image: FormationLahochi,
        description: `
            La formation Lahochi vous offre une initiation complète à cette technique 
            énergétique accessible et puissante. En petits groupes de 2 à 6 personnes, 
            vous apprendrez les bases des positions des mains, les protocoles de soin et 
            l’aspect spirituel de cette méthode. Cette formation immersive permet de 
            pratiquer sur soi-même et sur autrui, en apportant équilibre et sérénité. 
            Repartez avec des outils pratiques pour diffuser l’énergie réparatrice et 
            renforcer votre connexion intérieure.
        `,
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
