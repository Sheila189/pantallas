import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useMediaQuery } from '@mui/material';
import TopBar from './TopBar';
import '../css/perfil.css';

const Perfil = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const [userData, setUserData] = useState({
    name: 'John Doe',
    address: '',
    streetAddress: '',
    addressLine2: '',
    city: '',
    postalCode: '',
    state: '',
    country: '',
    avatar: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'avatar') {
      const reader = new FileReader();
      reader.onload = () => {
        setUserData((prevData) => ({
          ...prevData,
          avatar: reader.result,
        }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setUserData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditAddress = () => {
    setIsEditingAddress(true);
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
    setIsEditingAddress(false);
  };

  const isSmallScreen = useMediaQuery('(max-width: 500px)');
  const isMediumScreen = useMediaQuery('(max-width: 950px)');
  const isLargeScreen = useMediaQuery('(min-width: 1200px)');

  return (
    <div>
      <TopBar name={userData.name} avatar={userData.avatar} />
      <h1 className="title">Perfil de Usuario</h1>
      <div className={`perfil-container ${isLargeScreen ? 'centered' : ''} ${isSmallScreen ? 'column-1-centered' : ''}`}>
        <div className={`column-1 ${isSmallScreen ? 'full-width' : ''}`}>
        <h3 className="perfil-title">Datos de Usuario</h3>
        <div className={`perfil-section ${isMediumScreen || (isLargeScreen && !isSmallScreen) ? 'column-1' : ''}`}>
        <div className="input-container">
          <label>
            Avatar:
            <div className="file-input-wrapper">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={handleChange}
                disabled={!isEditing}
              />
              <button className="file-input-button" disabled={!isEditing} type="button">
                Seleccionar imagen
              </button>
            </div>
          </label>
          {userData.avatar && (
            <img src={userData.avatar} alt="Avatar" className="avatar-image" />
          )}
        </div>
            <div className="input-container">
              <label>
                Nombre:
                <input type="text" name="name" value={userData.name} onChange={handleChange} disabled={!isEditing} className={isSmallScreen ? "full-width" : ""}/>
              </label>
            </div>
            {!isEditing && (
              <button className="edit-button" onClick={handleEdit}>
                Editar Perfil
              </button>
            )}
            {isEditing && (
              <button className="save-button" onClick={handleSaveChanges}>
                Guardar Cambios
              </button>
            )}
          </div>
        </div>
        {(isMediumScreen || (isLargeScreen && !isSmallScreen)) && (
          <div className={`perfil-section ${isMediumScreen || (isLargeScreen && !isSmallScreen) ? 'column-2' : ''}`}>
            <div className="address-container">
              <hr className="separator" />
              <h3 className="address-title">Dirección</h3>
              <div className="address-section">
                <div className="address-item">
                  <label>Dirección:</label>
                  <input
                    type="text"
                    name="address"
                    value={userData.address}
                    onChange={handleChange}
                    disabled={!isEditingAddress}
                    className={isSmallScreen ? "full-width" : ""}
                  />
                </div>
                <div className="address-item">
                  <label>Dirección de calle:</label>
                  <input
                    type="text"
                    name="streetAddress"
                    value={userData.streetAddress}
                    onChange={handleChange}
                    disabled={!isEditingAddress}
                    className={isSmallScreen ? "full-width" : ""}
                  />
                </div>
                <div className="address-item">
                  <label>Línea de dirección 2:</label>
                  <input
                    type="text"
                    name="addressLine2"
                    value={userData.addressLine2}
                    onChange={handleChange}
                    disabled={!isEditingAddress}
                    className={isSmallScreen ? "full-width" : ""}
                  />
                </div>
                <div className="address-item">
                  <label>Ciudad/Distrito:</label>
                  <input
                    type="text"
                    name="city"
                    value={userData.city}
                    onChange={handleChange}
                    disabled={!isEditingAddress}
                    className={isSmallScreen ? "full-width" : ""}
                  />
                </div>
                <div className="address-item">
                  <label>Código postal:</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={userData.postalCode}
                    onChange={handleChange}
                    disabled={!isEditingAddress}
                    className={isSmallScreen ? "full-width" : ""}
                  />
                </div>
                <div className="address-item">
                  <label>Estado/Provincia/Región:</label>
                  <input
                    type="text"
                    name="state"
                    value={userData.state}
                    onChange={handleChange}
                    disabled={!isEditingAddress}
                    className={isSmallScreen ? "full-width" : ""}
                  />
                </div>
                <div className="address-item">
                  <label>País:</label>
                  <input
                    type="text"
                    name="country"
                    value={userData.country}
                    onChange={handleChange}
                    disabled={!isEditingAddress}
                    className={isSmallScreen ? "full-width" : ""}
                  />
                </div>
                {!isEditingAddress && (
                  <button className="edit-button" onClick={handleEditAddress}>
                    Editar Dirección
                  </button>
                )}
                {isEditingAddress && (
                  <button className="save-button" onClick={handleSaveChanges}>
                    Guardar Dirección
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px'}}>
          <ArrowBackIcon style={{ fontSize: '2.5rem' }} variant="contained" color="primary" onClick={handleGoBack} />
      </div>
    </div>
  );
};

export default Perfil;


