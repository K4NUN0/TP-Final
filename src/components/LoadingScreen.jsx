import React, { useState, useEffect } from 'react';

const FRASES = [
    'Abriendo portal interdimensional...',
    'Calibrando el fluzo de Ricktrón...',
    'Esquivando a la Federación Galáctica...',
    'Wubba lubba dub dub...',
    'Consultando con el Consejo de Ricks...',
    'Evitando Cronenbergs en el servidor...',
    'Sincronizando con C-137...',
];

const LoadingScreen = ({ onFinished }) => {
    const [progress, setProgress] = useState(0);
    const [frase] = useState(() => FRASES[Math.floor(Math.random() * FRASES.length)]);

    useEffect(() => {
        const duration = 15000;
        const intervalTime = 100;
        const increment = 100 / (duration / intervalTime);

        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onFinished, 500);
                    return 100;
                }
                return prev + increment;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, [onFinished]);

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <div className="wa-dark-loading">
            <div className="wa-loading-center">
                <img
                    src="/app_icon.png"
                    alt="Portal"
                    className="loading-portal-spin"
                />

                <div className="wa-progress-container">
                    <div className="wa-progress-bar" style={{ width: `${progress}%` }} />
                </div>

                <h2 className="wa-loading-title">SquanchApp</h2>
                <p className="wa-loading-subtitle">{frase}</p>
                <p className="wa-loading-encrypt">🔒 Cifrado de extremo a extremo interdimensional</p>
            </div>

            <button className="wa-logout-btn" onClick={handleLogout}>
                CERRAR SESIÓN
            </button>
        </div>
    );
};

export default LoadingScreen;
