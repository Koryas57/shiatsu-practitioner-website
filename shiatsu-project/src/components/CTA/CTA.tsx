import React from 'react';
import './CTA.scss';
import profilePicture from '../../assets/practitionerPicture_22_11zon.webp'

interface CTAProps {
    title: string;
    buttonText: string;
    onButtonClick: () => void;
}

export const CTA: React.FC<CTAProps> = ({ title, buttonText, onButtonClick }) => {
    return (
        <section className="cta">
            <h2>{title}</h2>
            <img className="profilePicture" src={profilePicture} alt="Yasmina Cobelli, praticienne shiatsu et lahochi" />
            <h3>Yasmina Cobelli</h3>
            <p>Praticienne Shiatsu</p>
            <p>Praticienne Lahochi</p>
            <button onClick={onButtonClick}>{buttonText}</button>
        </section>
    );
};

