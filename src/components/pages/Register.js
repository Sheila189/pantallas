import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../css/RegisterUser.css';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [setRegistrationSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const [user, setUser] = useState({
    lastname: '',
    name: '',
    middle: '',
    signature: '',
    name_empresa: '',
    logo: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'signature' || name === 'logo') {
      const reader = new FileReader();

      reader.onload = () => {
      const binaryData = reader.result;
      setUser((prevUser) => ({
        ...prevUser,
        [name]: binaryData,
      }));
    };

    reader.readAsDataURL(files[0]);
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      const personData = {
        name: user.name,
        lastname: user.lastname,
        middle: user.middle,
        signature: user.signature,
        logo: user.logo,
        name_empresa: user.name_empresa,
      };

      const userData = {
        email: user.email,
        password: user.password,
      };

      // Enviar datos de la persona al endpoint /api/persons
      fetch('http://localhost:3000/api/persons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(personData),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Registro de persona exitoso:', data);
          console.log(personData);
          // Una vez que se ha creado la persona
          // Enviar datos del usuario al endpoint /api/users
          fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          })
            .then(response => response.json())
            .then(data => {
              console.log(user);
              console.log('Registro de usuario exitoso:', data);
              console.log(userData);
              setRegistrationSuccess(true);
            })
            .catch(error => {
              console.error('Error al registrar usuario:', error);
            });
        })
        .catch(error => {
          console.error('Error al registrar persona:', error);
        });
    }
  };

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
    }
  };

  const handleClearError = (fieldName) => {
    setFormErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[fieldName];
      return updatedErrors;
    });
  };

  const validateForm = () => {
    const {
      lastname,
      name,
      middle,
      signature,
      name_empresa,
      logo,
      email,
      password,
      confirmPassword,
    } = user;

    console.log('Form Data: ',user);

    // Validating password strength
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isPasswordValid = passwordRegex.test(password);
    const doPasswordsMatch = password === confirmPassword;

    const errors = {};

    if (lastname === '') {
      errors.lastName = 'Ingrese su apellido';
    }
    if (name === '') {
      errors.name = 'Ingrese su nombre';
    }
    if (middle === '') {
      errors.middle = 'Ingrese su segundo nombre';
    }
    if (signature === '') {
      errors.signature = 'Suba su firma';
    }
    if (name_empresa === '') {
      errors.name_empresa = 'Ingrese el nombre de su empresa';
    }
    if (logo === '') {
      errors.logo = 'Suba el logo de su empresa';
    }
    if (email === '') {
      errors.email = 'Ingrese su email';
    }
    if (password === '') {
      errors.password = 'Ingrese su contraseña';
    }
    if (confirmPassword === '') {
      errors.confirmPassword = 'Confirme su contraseña';
    }

    if (!isPasswordValid) {
      errors.password = 'La contraseña debe contener al menos 8 caracteres y contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.';
    }

    if (!doPasswordsMatch) {
      errors.confirmPassword = 'Las contraseñas no coinciden';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  return (
    <div className="register-user-container">
      <h1>Registro de Usuario</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="section">
          <h3>Datos Personales</h3>
          <div className="form-group">
            <label>Apellido:</label>
            <input type="text" name="lastname" value={user.lastname} onChange={handleChange} />
            {formErrors.lastName && (
              <p className="error-message">
                {formErrors.lastName}
                <span className="close-button" onClick={() => handleClearError('lastName')}>X</span>
              </p>
            )}
          </div>
          <div className="form-group">
            <label>Nombre:</label>
            <input type="text" name="name" value={user.name} onChange={handleChange} />
            {formErrors.name && (
              <p className="error-message">
                {formErrors.name}
                <span className="close-button" onClick={() => handleClearError('name')}>X</span>
              </p>
            )}
          </div>
          <div className="form-group">
            <label>Segundo Nombre:</label>
            <input type="text" name="middle" value={user.middle} onChange={handleChange} />
            {formErrors.middle && (
              <p className="error-message">
                {formErrors.middle}
                <span className="close-button" onClick={() => handleClearError('middle')}>X</span>
              </p>
            )}
          </div>
          <div className="form-group">
            <label>Firma:</label>
            <input type="file" name="signature" onChange={handleChange} accept="image/*" />
            {user.signature && <img src={user.signature} alt="Firma" className="preview-image" />}
            {formErrors.signature && (
              <p className="error-message">
                {formErrors.signature}
                <span className="close-button" onClick={() => handleClearError('signature')}>X</span>
              </p>
            )}
          </div>
        </div>
        <div className="section">
          <h3>Datos de la Empresa</h3>
          <div className="form-group">
            <label>Nombre de la Empresa:</label>
            <input type="text" name="name_empresa" value={user.name_empresa} onChange={handleChange} />
            {formErrors.name_empresa && (
              <p className="error-message">
                {formErrors.name_empresa}
                <span className="close-button" onClick={() => handleClearError('name_empresa')}>X</span>
              </p>
            )}
          </div>
          <div className="form-group">
            <label>Logo de la Empresa:</label>
            <input type="file" name="logo" onChange={handleChange} accept="image/*" />
            {user.logo && <img src={user.logo} alt="Logo" className="preview-image" />}
            {formErrors.logo && (
              <p className="error-message">
                {formErrors.logo}
                <span className="close-button" onClick={() => handleClearError('logo')}>X</span>
              </p>
            )}
          </div>
        </div>
        <div className="section">
          <h3>Información de Contacto</h3>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={user.email} onChange={handleChange} />
            {formErrors.email && (
              <p className="error-message">
                {formErrors.email}
                <span className="close-button" onClick={() => handleClearError('email')}>X</span>
              </p>
            )}
          </div>
          <div className="form-group">
            <label>Contraseña:</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={user.password}
                onChange={handleChange}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="password-icon"
                onClick={() => togglePasswordVisibility('password')}
              />
            </div>
            {formErrors.password && (
              <p className="error-message">
                {formErrors.password}
                <span className="close-button" onClick={() => handleClearError('password')}>X</span>
              </p>
            )}
          </div>
          <div className="form-group">
            <label>Confirmar Contraseña:</label>
            <div className="password-input">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
              />
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEyeSlash : faEye}
                className="password-icon"
                onClick={() => togglePasswordVisibility('confirmPassword')}
              />
            </div>
            {formErrors.confirmPassword && (
              <p className="error-message">
                {formErrors.confirmPassword}
                <span className="close-button" onClick={() => handleClearError('confirmPassword')}>X</span>
              </p>
            )}
          </div>
        </div>
        <div className="button-container">
        <button className="button-1" type="submit">Registrarse</button>
        <button className="button-2" type="submit" onClick={handleGoBack}>Regresar</button>
      </div>      
      </form>
    </div>
  );
};

export default Register;

//{registrationSuccess && ( <div className="success-message"> 
      //  ¡Registro exitoso! Puedes iniciar sesión ahora. </div> )}