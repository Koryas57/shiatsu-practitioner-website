import React from "react";
import "./Testimonials.scss";

interface Testimonial {
  quote: string;
  author: string;
  rating: number; // Nouveau champ pour les étoiles
}

const testimonialsData: Testimonial[] = [
  {
    quote:
      "Voilà plus d'un an que je consulte Yasmina. C'est une personne formidable à qui vous pouvez parler de tout. Les effets du shiatsu font des miracles sur moi. Je recommande les yeux fermés.",
    author: "Amandine Koch",
    rating: 5,
  },
  {
    quote:
      "J'ai consulté Yasmina a plusieurs reprises pour des problèmes d'angoisse de stresse et d insomnie et j'en suis très contente. Praticienne a l'écoute qui prend le tps de bien expliquer. En plus de soulager c'est un pure moment de détente et de relaxation. Je recommande vivement.",
    author: "Sylvia Andreoli",
    rating: 5,
  },
  {
    quote:
      "Probablement la plus belle personne que j’ai la chance d’avoir rencontré! Une femme exceptionnelle d’un soutien et d’une bienveillance incroyable. Ses séances de shiatsu sont indéniablement une expérience à vivre",
    author: "Fabs",
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="testimonials">
      <h2>Avis clients</h2>
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
                    <span
                      key={i}
                      className={
                        i < testimonial.rating ? "star filled" : "star"
                      }
                    >
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
