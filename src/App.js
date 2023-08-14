import React from "react";
import { UserProvider } from "./shared/UserContext";
import { initFirebase } from "./utils/firebase";
import RouterApp from "./RouterApp";

const App = () => {
  return (
    <UserProvider>
      <RouterApp />
    </UserProvider>
  );
};

export default App;
