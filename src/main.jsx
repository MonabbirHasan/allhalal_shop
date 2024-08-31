import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import 'react-quill/dist/quill.snow.css';
import { AuthProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>
);
