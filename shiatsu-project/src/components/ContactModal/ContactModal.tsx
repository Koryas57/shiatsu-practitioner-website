import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactModal.scss';

interface ContactModalProps {
    onClose: () => void;
    onConfirm: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ onClose, onConfirm }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            await emailjs.send(
                'YOUR_SERVICE_ID', // Remplace par ton Service ID
                'YOUR_TEMPLATE_ID', // Remplace par ton Template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                'YOUR_USER_ID' // Remplace par ton User ID
            );
            setIsLoading(false);
            onConfirm();
        } catch (error) {
            setIsLoading(false);
            setError('Une erreur est survenue. Veuillez réessayer.');
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                {/* Croix pour fermer la modale */}
                <button className="close-button" onClick={onClose} aria-label="Fermer la modale">
                    &times;
                </button>
                <h2>Contactez-nous</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nom
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Votre nom"
                            required
                        />
                    </label>
                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Votre email"
                            required
                        />
                    </label>
                    <label>
                        Message
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Votre message"
                            required
                        />
                    </label>
                    <button type="submit" className="submit-button" disabled={isLoading}>
                        {isLoading ? 'Envoi en cours...' : 'Envoyer'}
                    </button>
                    {error && <p className="error-message">{error}</p>}
                </form>
            </div>
        </div>
    );
};
