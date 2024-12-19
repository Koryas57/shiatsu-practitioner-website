import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Défile vers le haut à chaque changement de route
    }, [pathname]);

    return null; // Ce composant n'a pas besoin de rendre quoi que ce soit
};
