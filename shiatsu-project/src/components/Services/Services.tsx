import React from 'react';
import './Services.scss';

import ZenBowl from '../../assets/ZenBowl.jpg'
import Skeleton from '../../assets/SkeletonMedicine.jpg'
import BackHealing from '../../assets/BackHealing.jpg'

interface Service {
    title: string;
    image: string;
    description: string;
}

const servicesData: Service[] = [
    { title: 'Shiatsu Relaxation', image: ZenBowl, description: 'Vivez une relaxation profonde et un soulagement du stress.' },
    { title: 'Shiatsu Thérapeutique', image: BackHealing, description: 'Traitez des problèmes physiques ou émotionnels spécifiques.' },
    { title: 'Équilibrage Énergétique', image: Skeleton, description: 'Restaurez l’harmonie du flux énergétique de votre corps.' },
];

export const Services: React.FC = () => {


    return (
        <section className="services">
            <h2>Nos Services</h2>
            <div className="service-list">
                {servicesData.map((service, index) => (
                    <div className="service-item" key={index}>
                        <h3>{service.title}</h3>
                        <img src={service.image} alt={service.title} />
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
