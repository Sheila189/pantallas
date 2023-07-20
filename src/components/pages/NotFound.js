import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();
  const [previousPath, setPreviousPath] = useState('');

  useEffect(() => {
    const handleBeforeUnload = () => {
      // Guarda la ruta actual antes de salir de la página
      setPreviousPath(window.location.pathname);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleGoBack = () => {
    if (previousPath) {
      navigate(previousPath); // Regresa a la ruta anterior
    } else {
      navigate('/'); // Si no hay ruta anterior, redirige a la página de inicio
    }
  };

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">
          ¡Oops! La página que estás buscando no existe.
        </p>
        <p className="not-found-message">
          Puedes regresar a la página anterior haciendo clic en el siguiente botón.
        </p>
        <button onClick={handleGoBack} className="not-found-button">
          Regresar
        </button>
      </div>
    </div>
  );
};

export default NotFound;
