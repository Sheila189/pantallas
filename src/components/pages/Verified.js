import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, sendEmailVerification } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const Verified = () => {
  const navigate = useNavigate();
  const [emailVerified, setEmailVerified] = useState(false);
  const auth = getAuth(); // Obtiene la instancia de autenticación de Firebase
  const db = getFirestore(); // Obtiene la instancia de Firestore

  useEffect(() => {
    // Verifica el estado de verificación de correo electrónico
    if (auth.currentUser) {
      setEmailVerified(auth.currentUser.emailVerified);
    }
  }, [auth.currentUser]);

  const handleResendVerification = () => {
    // Reenvía el correo de verificación
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log('Correo de verificación reenviado');
      })
      .catch(error => {
        console.error('Error al reenviar el correo de verificación:', error);
      });
  };

  const handleGoBack = () => {
    navigate(-1); // Regresa a la página anterior
  };

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">Verificación de Correo</h1>
        {emailVerified ? (
          <p className="not-found-message">¡Tu correo ha sido verificado!</p>
        ) : (
          <>
            <p className="not-found-message">
              Tu cuenta aún no ha sido verificada. Por favor, revisa tu correo electrónico y sigue las instrucciones para verificar tu cuenta.
            </p>
            <button onClick={handleResendVerification} className="not-found-button">
              Reenviar Correo de Verificación
            </button>
          </>
        )}
        <button onClick={handleGoBack} className="not-found-button">
          Regresar
        </button>
      </div>
    </div>
  );
};

export default Verified;
