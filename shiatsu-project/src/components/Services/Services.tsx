import React from 'react';
import './Services.scss';

interface Service {
    title: string;
    description: string;
}

const servicesData: Service[] = [
    { title: 'Shiatsu Relaxation', description: 'Vivez une relaxation profonde et un soulagement du stress.' },
    { title: 'Shiatsu Thérapeutique', description: 'Traitez des problèmes physiques ou émotionnels spécifiques.' },
    { title: 'Équilibrage Énergétique', description: 'Restaurez l’harmonie du flux énergétique de votre corps.' },
];

export const Services: React.FC = () => {


    return (
        <section className="services">
            <h2>Nos Services</h2>
            <div className="service-list">
                {servicesData.map((service, index) => (
                    <div className="service-item" key={index}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
