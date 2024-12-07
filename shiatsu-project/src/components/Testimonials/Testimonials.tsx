import React from 'react';
import './Testimonials.scss';

interface Testimonial {
    quote: string;
    author: string;
}

const testimonialsData: Testimonial[] = [
    { quote: 'Shiatsu Bien-être a transformé ma qualité de vie. Je recommande vivement !', author: 'Anonyme' },
    { quote: 'Une expérience incroyable. Je me sens en pleine forme.', author: 'Marie L.' },
];

export const Testimonials: React.FC = () => {


    return (
        <section className="testimonials">
            <h2>Ce que disent nos clients</h2>
            {testimonialsData.map((testimonial, index) => (
                <blockquote key={index}>
                    <p>"{testimonial.quote}"</p>
                    <p>- {testimonial.author}</p>
                    <br />
                </blockquote>
            ))}
        </section>
    );
};
