import React from 'react';
import './Testimonials.scss';

interface Testimonial {
    quote: string;
    author: string;
    rating: number; // Nouveau champ pour les étoiles
}

const testimonialsData: Testimonial[] = [
    {
        quote: 'J\'ai consulté Yasmina a plusieurs reprises pour des problèmes d\'angoisse de stresse et d insomnie et j\'en suis très contente. Praticienne a l\'écoute qui prend le tps de bien expliquer. En plus de soulager c\'est un pure moment de détente et de relaxation. Je recommande vivement.',
        author: 'Sylvia A.',
        rating: 5,
    },
    {
        quote: 'Très professionnelle, très douce et à l’écoute de son client. N’hésitez pas à aller faire une séance',
        author: 'Eva L.',
        rating: 5,
    },
    {
        quote: 'Super praticienne , très professionnelle,  elle m as soulagé mes maux suite à mon syndrome ainsi qu à mon état psychologique. Je l as recommande à 💯 %',
        author: 'Christelle C.',
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
