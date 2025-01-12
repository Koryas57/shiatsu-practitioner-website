import React from 'react';
import './ConfirmationModal.scss';

interface ConfirmationModalProps {
    onClose: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="confirmation-modal modal">
                <h2>Merci pour votre message !</h2>
                <p>Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.</p>
                <button className="back-button" onClick={onClose}>Retourner sur le site</button>
            </div>
        </div>
    );
};
