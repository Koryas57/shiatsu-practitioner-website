import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactModal.scss';

interface ContactModalProps {
    onClose: () => void;
    onConfirm: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ onClose, onConfirm }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '', // Ajout du champ email
        phone: '',
        reason: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            await emailjs.send(
                'service_dnk3had', // Remplace par ton Service ID
                'template_j9a8b9j', // Remplace par ton Template ID
                {
                    from_name: formData.name,
                    email: formData.email, // Inclure l'email saisi
                    phone: formData.phone,
                    reason: formData.reason,
                    message: formData.message,
                },
                'bf7bZryHTyTMYChYv' // Remplace par ton User ID
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
                        Nom et prénom
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Votre nom et prénom"
                            required
                        />
                    </label>
                    <label>
                        Adresse email
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Votre adresse email"
                            required
                        />
                    </label>
                    <label>
                        Numéro de téléphone
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Votre numéro de téléphone"
                            required
                        />
                    </label>
                    <label>
                        Motif de consultation
                        <select
                            name="reason"
                            value={formData.reason}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Sélectionnez un motif</option>
                            <option value="Relaxation">Relaxation</option>
                            <option value="Gestion du stress">Gestion du stress</option>
                            <option value="Douleurs corporelles">Douleurs corporelles</option>
                            <option value="Autre">Autre</option>
                        </select>
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
