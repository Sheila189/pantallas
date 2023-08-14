import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuPrincipal from "./components/pages/MenuPrincipal";
import MenuPrincipalAdmin from "./components/pages/MenuPrincipalAdmin";
import Formularios from "./components/pages/Formularios";
import Borradores from "./components/pages/Borradores";
import Historial from "./components/pages/Historial";
import Users from "./components/pages/Users";
import Perfil from "./components/pages/perfil";
import Verificar from "./components/pages/Verified";
import Login from "./components/pages/Login";
import NotFound from "./components/pages/NotFound";
import Registrar from "./components/pages/Register";
import NB4 from "./components/pages/Forms/NB_4";
import NB5 from "./components/pages/Forms/NB_5";
import NB6 from "./components/pages/Forms/NB_6";
import NB7 from "./components/pages/Forms/NB_7";
import NB136 from "./components/pages/Forms/NB_136";
import NB403 from "./components/pages/Forms/NB_403";
import { UserContext } from "./shared/UserContext";

export default function RouterApp() {
  const { userData } = useContext(UserContext);
  return (
    <Router>
      <Routes>
        {userData.verified === false ? (
          <>
            <Route path="/verify" element={<Verificar />} />
            <Route path="*" element={<NotFound />} />
          </>
        ) : userData.role === 2 ? (
          <>
            <Route path="/menu" element={<MenuPrincipal />} />
            <Route path="/forms" element={<Formularios />} />
            <Route path="/drafts" element={<Borradores />} />
            <Route path="/history" element={<Historial />} />
            <Route path="/profile" element={<Perfil />} />
            <Route path="/register" element={<Registrar />} />
            <Route path="/forms/NB4" element={<NB4 />} />
            <Route path="/forms/NB5" element={<NB5 />} />
            <Route path="/forms/NB6" element={<NB6 />} />
            <Route path="/forms/NB7" element={<NB7 />} />
            <Route path="/forms/NB136" element={<NB136 />} />
            <Route path="/forms/NB403" element={<NB403 />} />
            <Route path="*" element={<NotFound />} />
          </>
        ) : userData.role === 3 ? (
          <>
            <Route path="/menu" element={<MenuPrincipalAdmin />} />
            <Route path="/forms" element={<Formularios />} />
            <Route path="/drafts" element={<Borradores />} />
            <Route path="/history" element={<Historial />} />
            <Route path="/users" element={<Users />} />
            <Route path="/profile" element={<Perfil />} />
            <Route path="/register" element={<Registrar />} />
            <Route path="/forms/NB4" element={<NB4 />} />
            <Route path="/forms/NB5" element={<NB5 />} />
            <Route path="/forms/NB6" element={<NB6 />} />
            <Route path="/forms/NB7" element={<NB7 />} />
            <Route path="/forms/NB136" element={<NB136 />} />
            <Route path="/forms/NB403" element={<NB403 />} />
            <Route path="/users" element={<Users />} /> 
            <Route path="*" element={<NotFound />} />
          </>
        ) : (
          <>
            <Route exact path="/" element={<Login />} />
            <Route path="/register" element={<Registrar />} />
            <Route path="*" element={<NotFound />} />
          </>
        )}
      </Routes>
    </Router>
  );
}
