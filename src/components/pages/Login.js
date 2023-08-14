import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import "../css/Login.css";
import { UserContext } from "../../shared/UserContext";

const Login = ({ onLogin, errorMessage }) => {
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState("");
  const auth = getAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validar campos de correo electrónico y contraseña
    if (!email.trim() || !password.trim()) {
      setFormError("Por favor, completa todos los campos");
      return;
    }

    // Validar formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormError("Por favor, ingresa un correo electrónico válido");
      return;
    }

    // Validar longitud de la contraseña
    if (password.length < 8) {
      setFormError("La contraseña debe tener al menos 8 caracteres");
      return;
    }

    try {
      // Iniciar sesión
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (!userCredential.user.emailVerified) {
        await sendEmailVerification(auth.currentUser);
        alert(
          "Se ha enviado un correo de verificación a tu dirección de correo electrónico."
        );
        return;
      }

      const user = userCredential.user;
      localStorage.setItem("user", JSON.stringify(user));

      const db = getFirestore();
      const docRef = collection(db, "persons");
      getDocs(docRef).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().auth_uid === user.uid) {
            const details = doc.data();
            const userForLocalStorage = {
              uid: user.uid,
              email: user.email,
              name: details.name,
              role: details.role,
              logo: details.logo,
              name_empresa: details.name_empresa,
              signature: details.signature,
              verified: user.emailVerified,
              middle: details.middle,
              lastname: details.lastname,
              auth: user,
            };
            localStorage.setItem("user", JSON.stringify(userForLocalStorage));
            setUserData(userForLocalStorage);

            if (details.role === "3") {
              navigate("/menu");
            } else {
              navigate("/menu");
            }
          }
        });
      });
    } catch (error) {
      console.log(error);
      setFormError("Ocurrió un error al iniciar sesión");
    }
  };

  const handleForgotPasswordClick = async () => {
    if (!email.trim()) {
      setFormError("Por favor, ingresa tu correo electrónico");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert(
        "Se ha enviado un correo con instrucciones para restablecer tu contraseña."
      );
    } catch (error) {
      console.error(error);
      setFormError(
        "Ocurrió un error al enviar el correo de restablecimiento de contraseña"
      );
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegisterClick = () => {
    navigate("/register");
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
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div>
            <Link
              to="#"
              className="forgot-password-link"
              onClick={handleForgotPasswordClick}
            >
              ¿No recuerdas tu contraseña?
            </Link>
          </div>
        </div>
        <button type="submit">Iniciar sesión</button>
        <div className="register-container">
          <p className="register-text">
            ¿No tienes cuenta?{" "}
            <a href="/register" onClick={handleRegisterClick}>
              Regístrate aquí
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
