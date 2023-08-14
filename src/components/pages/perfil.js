import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useMediaQuery } from '@mui/material';
import TopBar from './TopBar';
import '../css/perfil.css';
import { UserContext } from '../../shared/UserContext';

const Perfil = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

 const { userData, setUserData } = useContext(UserContext);

  const [isEditing, setIsEditing] = useState(false);
  const [isEditingAuth, setIsEditingAuth] = useState(false);
  const [isEditingUsers, setIsEditingUsers] = useState(false);
  //const [isChangingPassword, setIsChangingPassword] = useState(false);

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

  const handleEditUsers = () => {
    setIsEditingUsers(true);
  };

  const handleEditAuth = () => {
    setIsEditingAuth(true);
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
    setIsEditingUsers(false);
    setIsEditingAuth(false);
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
            Logo:
            <div className="file-input-wrapper">
              <input type="file" name="avatar" accept="image/*" onChange={handleChange} disabled={!isEditing}/>
              <button className="file-input-button" disabled={!isEditing} type="button">
                Seleccionar imagen
              </button>
            </div>
          </label>
          {userData.logo && (
            <img src={userData.logo} alt="Avatar"  style={{ height: 100, width: 100, marginLeft: 20, marginTop: 20 }}/>
          )}
        </div>
            <div className="input-container">
              <label>
                Nombre de la Empresa:
                <input type="text" name="name_empresa" value={userData.name_empresa} onChange={handleChange} disabled={!isEditing} className={isSmallScreen ? "full-width" : ""}/>
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
              <h3 className="address-title">Datos Usuario</h3>
              <div className="address-section">
                <div className="address-item">
                  <label>Nombre:</label>
                  <input type="text" name="address" value={userData.name} onChange={handleChange}
                    disabled={!setIsEditingUsers} className={isSmallScreen ? "full-width" : ""}/>
                </div>
                <div className="address-item">
                  <label>Segundo nombre:</label>
                  <input type="text" name="streetAddress" value={userData.middle} onChange={handleChange} 
                   disabled={!setIsEditingUsers} className={isSmallScreen ? "full-width" : ""}/>
                </div>
                <div className="address-item">
                  <label>Apellidos:</label>
                  <input type="text" name="addressLine2" value={userData.lastname} onChange={handleChange}
                    disabled={!setIsEditingUsers} className={isSmallScreen ? "full-width" : ""}
                  />
                </div>
                <div className="address-item">
                  <label>Signature:</label>
                  <div className="file-input-wrapper">
                    <input type="file" name="avatar" accept="image/*" onChange={handleChange} disabled={!setIsEditingUsers}/>
                    <button className="file-input-button" disabled={!setIsEditingUsers} type="button">
                      Seleccionar imagen
                    </button>
                  </div>
                  {userData.signature && (
                    <img src={userData.signature} alt="Avatar"  style={{ height: 100, width: 100, marginLeft: 20, marginTop: 20 }}/>
                  )}
                </div>
                {!isEditingUsers && (
                  <button className="edit-button" onClick={handleEditUsers}>
                    Editar Datos
                  </button>
                )}
                {isEditingUsers&& (
                  <button className="save-button" onClick={handleSaveChanges}>
                    Guardar Datos
                  </button>
                )}
              </div>
            </div>
            <div className="address-container">
              <hr className="separator" />
              <h3 className="address-title">Datos Cuenta</h3>
              <div className="address-section">
                <div className="address-item">
                  <label>Email:</label>
                  <input type="text" name="address" value={userData.email} onChange={handleChange} className={isSmallScreen ? "full-width" : ""}/>
                </div>
                <div className="address-item">
                  <label>Contraseña:</label>
                  <input type="text" name="streetAddress" value={userData.password} onChange={handleChange} 
                   disabled={!setIsEditingAuth} className={isSmallScreen ? "full-width" : ""}/>
                </div>
                {!isEditingAuth && (
                  <button className="edit-button" onClick={handleEditAuth}>
                    Editar Cuenta
                  </button>
                )}
                {isEditingAuth&& (
                  <button className="save-button" onClick={handleSaveChanges}>
                    Guardar Datos
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

