import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../css/Login.css';

const Login = ({ onLogin, errorMessage }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validar campos de correo electrónico y contraseña
    if (!email.trim() || !password.trim()) {
      setFormError('Por favor, completa todos los campos');
      return;
    }

    // Validar formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormError('Por favor, ingresa un correo electrónico válido');
      return;
    }

    // Validar longitud de la contraseña
    if (password.length < 8) {
      setFormError('La contraseña debe tener al menos 8 caracteres');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:3000/api/auth',
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );      

      console.log(response.data.message);

      onLogin(email, password);

      // Redirige según el rol del usuario
      if (response.data.rol_id === 2) {
        navigate('/menuAdmin');
      } else if (response.data.rol_id === 3) {
        navigate('/menu');
      }
    } catch (error) {
      if (error.response) {
        console.error('Server error:', error.response.data.error);
        setFormError('Credenciales incorrectas');
      } else if (error.request) {
        console.error('Request error:', error.request);
        setFormError('Error en la solicitud');
      } else {
        console.error('Error:', error.message);
        setFormError('Error desconocido');
      }
    }
    console.log(email, password);
    setEmail('');
    setPassword('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Iniciar sesión</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {formError && <p className="error-message">{formError}</p>}
      <form onSubmit={handleLogin} className="login-form">
        <div>
          <label htmlFor="email">Email:</label>
          <div className="email-container">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="password-toggle" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        <button type="submit">Iniciar sesión</button>
        <div className="register-container">
        <p className="register-text">
          ¿No tienes cuenta? <a href="/register" onClick={handleRegisterClick}>Regístrate aquí</a>
        </p>
      </div>
      </form>
    </div>
  );  
};

export default Login;
