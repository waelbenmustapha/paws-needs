import { createContext, useContext, useState } from "react";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("token"));

  const login = (user) => {
    localStorage.setItem("token", user);
    setUser(user);
  };

  const axiosToken = axios.create({
    headers: { Authorization: "Bearer " + user.token },
  });
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, axiosToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
