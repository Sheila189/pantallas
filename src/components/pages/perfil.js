import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useMediaQuery } from '@mui/material';
import TopBar from './TopBar';
import { getFirestore, doc, getDocs } from "firebase/firestore/lite";
import '../css/perfil.css';
import { UserContext } from '../../shared/UserContext';

const Perfil = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const { userData, setUserData } = useContext(UserContext);
  const db = getFirestore();
  const userDocRef = doc(db, "persons", userData.uid); // Define userDocRef here

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

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDocSnapshot = await getDocs(userDocRef);
        if (userDocSnapshot.exists()) {
          const userDetails = userDocSnapshot.data();
          setUserData((prevUserData) => ({
            ...prevUserData,
            middle: userDetails.middle,
            lastname: userDetails.lastname,
            password: userDetails.password,
          }));
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchUserData();
  }, [userDocRef, setUserData]);

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
            {userData.logo && (
              <img src={userData.logo} alt="Avatar"  style={{ height: 100, width: 100, marginLeft: 20, marginTop: 20 }}/>
            )}
            <div className="file-input-wrapper">
              <input type="file" name="avatar" accept="image/*" onChange={handleChange} disabled={!isEditing}/>
              <button className="file-input-button" disabled={!isEditing} type="button">
                Seleccionar imagen
              </button>
            </div>
          </label>
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
                  <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    disabled={!isEditingUsers}
                    className={isSmallScreen ? "full-width" : ""}
                  />
                </div>
                <div className="address-item">
                  <label>Segundo nombre:</label>
                  <input
                    type="text"
                    name="middle"
                    value={userData.middle}
                    onChange={handleChange}
                    disabled={!isEditingUsers}
                    className={isSmallScreen ? "full-width" : ""}
                  />
                </div>
                <div className="address-item">
                  <label>Apellidos:</label>
                  <input
                    type="text"
                    name="lastname"
                    value={userData.lastname}
                    onChange={handleChange}
                    disabled={!isEditingUsers}
                    className={isSmallScreen ? "full-width" : ""}
                  />
                </div>
                <div className="address-item">
                  <label>Signature:</label>
                  {userData.signature && (
                    <img
                      src={userData.signature}
                      alt="Signature"
                      style={{ height: 100, width: 100, marginLeft: 20, marginTop: 20 }}
                    />
                  )}
                  <div className="file-input-wrapper">
                    <input
                      type="file"
                      name="signature"
                      accept="image/*"
                      onChange={handleChange}
                      disabled={!isEditingUsers}
                    />
                    <button
                      className="file-input-button"
                      disabled={!isEditingUsers}
                      type="button"
                    >
                      Seleccionar imagen
                    </button>
                  </div>
                </div>
                {!isEditingUsers && (
                  <button className="edit-button" onClick={handleEditUsers}>
                    Editar Datos
                  </button>
                )}
                {isEditingUsers && (
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
                <input
                  type="text"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  className={isSmallScreen ? "full-width" : ""}
                />
              </div>
              <div className="address-item">
                <label>Contraseña:</label>
                <input
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  disabled={!isEditingAuth}
                  className={isSmallScreen ? "full-width" : ""}
                />
              </div>
              {!isEditingAuth && (
                <button className="edit-button" onClick={handleEditAuth}>
                  Editar Cuenta
                </button>
              )}
              {isEditingAuth && (
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

