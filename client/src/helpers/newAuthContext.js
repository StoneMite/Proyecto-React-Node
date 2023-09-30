import { createContext } from "react";

const initialAuthState = {
  username: "",
  id: 0,
  status: false,
  role: "", // Agregar el campo "role" al estado de autenticación
};

export const AuthContext = createContext(initialAuthState);
