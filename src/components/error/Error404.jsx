import React from "react";
import "./error404.css";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const Error404 = () => {
  const navigation = useNavigate();
  return (
    <div className="error404_page">
      <div className="error404_wrapper">
        <h1>404</h1>
        <h3>we'r sorry the page not found!</h3>
        <Button
          style={{ marginTop: 10 }}
          onClick={() => navigation("/")}
          startIcon={<ArrowBack />}
          variant="outlined"
          color="warning"
        >
          home
        </Button>
      </div>
    </div>
  );
};

export default Error404;
