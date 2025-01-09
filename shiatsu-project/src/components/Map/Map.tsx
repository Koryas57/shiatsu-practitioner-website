import React from 'react';
import './Map.scss';

export const Map: React.FC = () => {
    const handleMapClick = () => {
        const destination = encodeURIComponent("Shiatsu Yasmina Cobelli, Yutz, France");
        const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
        window.open(mapsUrl, "_blank");
    };

    return (
        <div className="map-container" onClick={handleMapClick}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.617741446614!2d6.190744176993064!3d49.35717106547597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479525953b57c283%3A0x7e9623af71175f51!2sShiatsu%20Yasmina%20Cobelli!5e1!3m2!1sfr!2sfr!4v1733846484495!5m2!1sfr!2sfr"
                loading="lazy"
                title="Shiatsu Yasmina Cobelli"
            />
        </div>
    );
};
