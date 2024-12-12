import React, { useState, useRef, useEffect } from 'react';
import './Services.scss';

import Nenuphar from '../../assets/nenuphar.jpg';
import Skeleton from '../../assets/SkeletonMedicine.jpg';
import BackHealing from '../../assets/BackHealing.jpg';

interface Service {
    title: string;
    image: string;
    description: string;
}

const servicesData: Service[] = [
    { title: 'Shiatsu Relaxation', image: Nenuphar, description: 'Vivez une relaxation profonde et un soulagement du stress.' },
    { title: 'Shiatsu Thérapeutique', image: BackHealing, description: 'Traitez des problèmes physiques ou émotionnels spécifiques.' },
    { title: 'Équilibrage Énergétique', image: Skeleton, description: 'Restaurez l’harmonie du flux énergétique de votre corps.' },
];

export const Services: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const touchStartX = useRef<number | null>(null);

    useEffect(() => {
        const tiltInterval = setInterval(() => {
            setDragOffset(30);
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
            // Progresser vers la droite (augmenter l'index) lorsqu'on swippe vers la gauche
            setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
        } else if (dragOffset < -50) {
            // Progresser vers la gauche (réduire l'index) lorsqu'on swippe vers la droite
            setCurrentIndex((prevIndex) => (prevIndex - 1 + servicesData.length) % servicesData.length);
        }
        setDragOffset(0);
        setIsDragging(false);
    };

    return (
        <section className="services">
            <h2>Mes Services</h2>
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
                            className={`service-item-${index} ${isActive ? 'active' : ''}`}
                            style={{
                                transform: `translateX(${translateX}px) scale(${scale})`,
                                opacity,
                                zIndex,
                            }}
                        >
                            <h3>{service.title}</h3>
                            <img src={service.image} alt={service.title} />
                            <p>{service.description}</p>
                            <button>En savoir plus</button>
                        </div>
                    );
                })}
            </div>
            {/* Pagination (points) */}
            <div className="pagination">
                {servicesData.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        style={{
                            transition: index === currentIndex ? 'background-color 0.5s ease, transform 0.5s ease' : '',
                            transform: index === currentIndex ? 'scale(1.3)' : 'scale(1)', // L'effet d'agrandissement pour le dot actif
                        }}
                    ></span>
                ))}
            </div>
        </section>
    );
};
