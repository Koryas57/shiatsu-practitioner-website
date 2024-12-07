import React from 'react';
import './Footer.scss';

export const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>
                        <i className="fas fa-phone-alt"></i>
                        Téléphone :
                        <a href="tel:+123456789">+33 6 63 43 02 41</a>
                    </p>
                    <p>
                        <i className="fas fa-envelope"></i>
                        Email :
                        <a href="mailto:contact@shiatsu-bienetre.com">shiatsu.yasmina@gmail.com</a>
                    </p>
                </div>
                <div className="footer-section">
                    <h3>Adresse</h3>
                    <p>
                        <i className="fas fa-map-marker-alt"></i>
                        5 rue du Temple</p>
                    <p className='yutz'>57970 Yutz, France</p>
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
                <p>&copy; {new Date().getFullYear()} Yasmina Cobelli. Tous droits réservés.</p>
            </div>
        </footer>
    );
};
