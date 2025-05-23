import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.scss';

import Shiatsu from '../../assets/Shiatsu.webp';
import Lahochi from '../../assets/Lahochi.webp';
import FormationLahochi from '../../assets/formationLahochi.webp';

interface Service {
    title: string;
    image: string;
    description: string;
}

const servicesData: Service[] = [
    {
        title: 'Shiatsu',
        image: Shiatsu,
        description: `
            Le Shiatsu est une méthode japonaise qui équilibre l’énergie du corps. 
            Grâce à des pressions et étirements doux, il apaise les tensions et 
            revitalise le corps pour une détente profonde.
        `,
    },
    {
        title: 'Lahochi',
        image: Lahochi,
        description: `
            Le Lahochi est une technique énergétique douce qui harmonise le corps 
            et l'esprit. Chaque séance dissipe les blocages et offre un bien-être 
            profond et durable.
        `,
    },
    {
        title: 'Formation Lahochi',
        image: FormationLahochi,
        description: `
            Initiez-vous au Lahochi en petits groupes de 2 à 6 personnes. Apprenez 
            les bases de cette pratique énergétique et découvrez une expérience 
            enrichissante et transformative.
        `,
    },
];

export const Services: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const touchStartX = useRef<number | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        const tiltInterval = setInterval(() => {
            setDragOffset(-30);
            setTimeout(() => setDragOffset(0), 350);
        }, 6000);

        return () => clearInterval(tiltInterval);
    }, []);

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (isDragging && touchStartX.current !== null) {
            const currentX = e.touches[0].clientX;
            setDragOffset(currentX - touchStartX.current);
        }
    };

    const handleTouchEnd = () => {
        if (dragOffset > 50) {
            // Swiper vers la droite -> afficher l'élément précédent
            setCurrentIndex((prevIndex) => (prevIndex - 1 + servicesData.length) % servicesData.length);
        } else if (dragOffset < -50) {
            // Swiper vers la gauche -> afficher l'élément suivant
            setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
        }
        setDragOffset(0);
        setIsDragging(false);
    };

    const handleLearnMoreClick = () => {
        navigate('/prestations');
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index); // Naviguer vers le service correspondant au dot
    };

    return (
        <section className="services">
            <h2>Mes Prestations</h2>
            <div
                className="service-carousel"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {servicesData.map((service, index) => {
                    const isActive = index === currentIndex;
                    const translateX = isActive ? dragOffset : 0;
                    const opacity = isActive ? 1 : 0;
                    const scale = isActive ? 1 : 0.2;
                    const zIndex = isActive ? 2 : 1;

                    return (
                        <div
                            key={index}
                            className={`service-item ${isActive ? 'active' : ''}`}
                            style={{
                                transform: `translateX(${translateX}px) scale(${scale})`,
                                opacity,
                                zIndex,
                            }}
                        >
                            <h3>{service.title}</h3>
                            <img src={service.image} alt={service.title} />
                            <p>{service.description}</p>
                            <button onClick={handleLearnMoreClick}>En savoir plus</button>
                        </div>
                    );
                })}
            </div>
            <div className="pagination">
                {servicesData.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        style={{
                            transition: 'transform 1s ease, background-color 1s ease',
                            transform: index === currentIndex ? 'scale(1.3)' : 'scale(1)',
                        }}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};
