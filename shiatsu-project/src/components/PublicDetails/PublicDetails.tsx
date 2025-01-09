import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faBuilding,
    faMoneyBillWave,
    faChevronDown,
    faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import './PublicDetails.scss';

export const PublicDetails: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section className="public-details">
            <h2 onClick={toggleExpand} className="toggle-header">
                Infos pratiques{' '}
                <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
            </h2>
            <div className={`details-content ${isExpanded ? 'expanded' : ''}`}>
                <div className="detail">
                    <h3>
                        <FontAwesomeIcon icon={faUser} /> Type de public
                    </h3>
                    <ul>
                        <li>Adulte</li>
                        <li>Adolescent</li>
                        <li>Enfant</li>
                    </ul>
                </div>
                <div className="detail">
                    <h3>
                        <FontAwesomeIcon icon={faBuilding} /> Lieux
                    </h3>
                    <ul>
                        <li>Cabinet</li>
                        <li>Entreprise</li>
                    </ul>
                </div>
                <div className="detail">
                    <h3>
                        <FontAwesomeIcon icon={faMoneyBillWave} /> Types de paiement
                    </h3>
                    <ul>
                        <li>Espèces</li>
                        <li>Chèque</li>
                    </ul>
                </div>
                <div className="legal-section">
                    <h3>Informations légales</h3>
                    <p>
                        Numéro SIRET : <strong>98743655700019</strong>
                    </p>
                </div>
            </div>
        </section>
    );
};
