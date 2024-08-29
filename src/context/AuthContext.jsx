import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [AuthUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  // Load user from localStorage or API
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const savedUser = JSON.parse(localStorage.getItem("allhalal_token"));
        if (savedUser) {
          setIsAuthenticate(true);
          setAuthUser(savedUser);
        }
      } catch (error) {
        console.error("Failed to load user from localStorage", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // Login function
  const login = async (credentials) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/platform/users/login",
        credentials,
        {
          headers: {
            Authorization: import.meta.env.VITE_API_ACCESS_KEY,
          },
        }
      );
      if (response.status === 200) {
        const convert_token_to_info = jwtDecode(response.data.token);
        localStorage.setItem(
          "allhalal_token",
          JSON.stringify({
            data: convert_token_to_info,
            token: response.data.token,
          })
        );
        setAuthUser(JSON.parse(localStorage.getItem("allhalal_token")));
        setIsAuthenticate(true);
        return { success: true, isAuthenticate: isAuthenticate };
      }
    } catch (error) {
      console.error("Login failed", error);
      return { success: false, message: error.response.data.message };
    }
  };
  // Logout function
  const logout = () => {
    localStorage.removeItem("allhalal_token");
    setAuthUser(null);
    return (location.href = "/signin");
  };
  // CLEAR AUTH
  const Authenticated = () => {
    if (JSON.parse(localStorage.getItem("allhalal_token"))) {
      const date =
        JSON.parse(localStorage.getItem("allhalal_token")).data.exp * 1000 >
        Date.now();
      if (date) {
        setIsAuthenticate(true);
      } else {
        localStorage.removeItem("allhalal_token");
        location.href = "/singin";
        return false;
      }
    }
  };
  useEffect(() => {
    Authenticated();
  }, [isAuthenticate]);
  return (
    <AuthContext.Provider
      value={{ AuthUser, loading, login, isAuthenticate, logout }}
    >
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
