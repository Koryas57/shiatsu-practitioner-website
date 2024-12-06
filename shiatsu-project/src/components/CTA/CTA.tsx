import React from 'react';
import './CTA.scss';

interface CTAProps {
    title: string;
    buttonText: string;
    onButtonClick: () => void;
}

export const CTA: React.FC<CTAProps> = ({ title, buttonText, onButtonClick }) => {
    return (
        <section className="cta">
            <h2>{title}</h2>
            <button onClick={onButtonClick}>{buttonText}</button>
        </section>
    );
};

