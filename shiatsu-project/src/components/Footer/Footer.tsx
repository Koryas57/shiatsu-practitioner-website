import React from 'react';
import './Footer.scss';

export const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Téléphone : <a href="tel:+123456789">+33 6 12 34 56 78</a></p>
                    <p>Email : <a href="mailto:contact@shiatsu-bienetre.com">contact@shiatsu-bienetre.com</a></p>
                </div>
                <div className="footer-section">
                    <h3>Adresse</h3>
                    <p>123 Rue de la Sérénité</p>
                    <p>75000 Paris, France</p>
                </div>
                <div className="footer-section">
                    <h3>Suivez-nous</h3>
                    <div className="social-links">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f facebook-icon"></i> Facebook
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram instagram-icon"></i> Instagram
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Shiatsu Bien-être. Tous droits réservés.</p>
            </div>
        </footer>
    );
};
