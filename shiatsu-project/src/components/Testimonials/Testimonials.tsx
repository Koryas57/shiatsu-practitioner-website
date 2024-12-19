import React from 'react';
import './Testimonials.scss';

interface Testimonial {
    quote: string;
    author: string;
    rating: number; // Nouveau champ pour les étoiles
}

const testimonialsData: Testimonial[] = [
    {
        quote: 'Shiatsu Yasmina a transformé ma qualité de vie. Je recommande vivement !',
        author: 'Anonyme',
        rating: 5,
    },
    {
        quote: 'Une expérience incroyable. Je me sens en pleine forme.',
        author: 'Marie L.',
        rating: 4,
    },
    {
        quote: 'Un excellent service, je me sens revigoré(e) !',
        author: 'Paul T.',
        rating: 5,
    },
];

export const Testimonials: React.FC = () => {
    return (
        <section className="testimonials">
            <h2>Vos avis clients</h2>
            <div className="testimonial-list">
                {testimonialsData.map((testimonial, index) => {
                    const authorInitial = testimonial.author.charAt(0).toUpperCase(); // Première lettre de l'auteur
                    return (
                        <div className="testimonial" key={index}>
                            <div className="author-icon">
                                <div className="icon-circle">{authorInitial}</div>
                            </div>
                            <div className="testimonial-content">
                                <blockquote>
                                    <p>"{testimonial.quote}"</p>
                                    <p>- {testimonial.author}</p>
                                </blockquote>
                                <div className="stars">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <span key={i} className={i < testimonial.rating ? 'star filled' : 'star'}>
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
