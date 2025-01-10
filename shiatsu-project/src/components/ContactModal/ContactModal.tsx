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
        email: '',
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
            // Utilisation des variables d'environnement
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const userId = import.meta.env.VITE_EMAILJS_USER_ID;

            if (!serviceId || !templateId || !userId) {
                throw new Error("Les variables d'environnement EmailJS ne sont pas configurées.");
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    reason: formData.reason,
                    message: formData.message,
                },
                userId
            );
            setIsLoading(false);
            onConfirm();
        } catch (error) {
            setIsLoading(false);
            setError("Une erreur est survenue. Veuillez réessayer.");
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                {/* Croix pour fermer la modale */}
                <button className="close-button" onClick={onClose} aria-label="Fermer la modale">
                    &times;
                </button>
                <h2>Contactez-moi</h2>
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
                            <option value="Shiatsu">Shiatsu</option>
                            <option value="Lahochi">Lahochi</option>
                            <option value="Formation Lahochi">Formation Lahochi</option>
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
                            rows={5}
                            required
                        />
                    </label>
                    <button type="submit" className="submit-button" disabled={isLoading}>
                        {isLoading ? "Envoi en cours..." : "Envoyer"}
                    </button>
                    {error && <p className="error-message">{error}</p>}
                </form>
            </div>
        </div>
    );
};
