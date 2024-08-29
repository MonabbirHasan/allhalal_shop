import React, { useContext, useEffect, useState } from "react";
import "./signin.css";
import { Container, Form, InputGroup } from "react-bootstrap";
import { FormControl } from "@mui/material";
import {
  Password,
  Person,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { Card, IconButton, Button as NeuButton } from "ui-neumorphism";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
const SignIn = () => {
  const { login, isAuthenticate, AuthUser } = useContext(AuthContext);
  const navigation = useNavigate();
  const [UserMail, setUserMail] = useState("");
  const [UserPass, setUserPass] = useState("");
  const [error, setError] = useState({});
  const [InputTyp, setInputTyp] = useState("password");
  const [loader, setLoader] = useState(false);
  const input_style = {
    background: "#e4ebf5",
    border: "none",
  };
  const validate = () => {
    let errors = {};
    if (!UserMail) {
      errors.UserMail = "mail is required";
    }

    if (!UserPass) {
      errors.UserPass = "password is required";
    }
    setError(errors);
    return Object.keys(errors).length > 0;
  };
  //====================================
  // REDIRECT WHEN USER IS LOGGED IN
  //====================================
//   useEffect(() => {
//     if (isAuthenticate) {
//         navigation("/m")
//     }
//   }, []);
  /******************
   * ASIGN LOGIN
   ******************/
  const handlelogin = async () => {
    if (!validate()) {
      setLoader(true);
      const credentials = {
        email: UserMail,
        password: UserPass,
      };
      const result = await login(credentials);
      if (result.success) {
        // console.log(AuthUser.data.user.role);
        const user_role = AuthUser?.data.user.role;
        setTimeout(() => {
          setLoader(false);
          toast.success("Login Success🎉🎉🎉");
          switch (user_role) {
            case "admin":
              navigation("/admin_dashboard");
              break;
            case "user":
              navigation("/my_dashboard");
              break;
            case "advertiser":
              navigation("/advertisor_dashboard");
              break;
            case "vendor":
              navigation("/vendor_dashboard");
              break;
            default:
              break;
          }
        }, 2000);
      } else {
        setLoader(false);
        alert(result.message);
      }
    }
  };
  /******************
   * ERROR ELEMENTS
   ******************/
  const error_element = (error) => {
    return (
      <small
        style={{
          color: "tomato",
          textTransform: "capitalize",
          fontSize: 12,
          paddingTop: 4,
          marginLeft: 20,
          paddingLeft: 30,
        }}
      >
        {error}
      </small>
    );
  };
  return (
    <div className="front_signin">
      <Container>
        <div className="signin_wrapper">
          <div className="signin_form">
            <Card className="global_card_border">
              <h3>Let's SingIn</h3>
              {/* USER NAME */}
              <FormControl fullWidth>
                <InputGroup>
                  <InputGroup.Text style={input_style}>
                    <Person htmlColor="#232" />
                  </InputGroup.Text>
                  <Form.Control
                    autoComplete="off"
                    onChange={(e) => setUserMail(e.target.value)}
                    value={UserMail}
                    type="text"
                    className="global_input_shadow"
                    placeholder="Enter Your Email"
                  />
                </InputGroup>
                {error.UserMail && error_element(error.UserMail)}
              </FormControl>
              {/* USER PASSWORD */}
              <FormControl fullWidth sx={{ py: 2 }}>
                <InputGroup>
                  <InputGroup.Text style={input_style}>
                    <Password htmlColor="#232" />
                  </InputGroup.Text>
                  <Form.Control
                    autoComplete="off"
                    onChange={(e) => setUserPass(e.target.value)}
                    value={UserPass}
                    type={InputTyp}
                    name="password"
                    className="global_input_shadow"
                    placeholder="Enter Password"
                  />
                  <InputGroup.Text style={input_style}>
                    <IconButton
                      onClick={() => {
                        InputTyp == "password"
                          ? setInputTyp("text")
                          : setInputTyp("password");
                      }}
                      size="small"
                    >
                      {InputTyp == "password" ? (
                        <VisibilityOff fontSize="small" htmlColor="#232" />
                      ) : (
                        <Visibility fontSize="small" htmlColor="#232" />
                      )}
                    </IconButton>
                  </InputGroup.Text>
                </InputGroup>

                {error.UserPass && error_element(error.UserPass)}
              </FormControl>
              <FormControl sx={{ pl: 1 }}>
                <NavLink>Forgot Password</NavLink>
              </FormControl>
              {/* SUBMIT BUTTON */}
              <FormControl
                fullWidth
                sx={{
                  py: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {loader ? (
                  <ThreeDots width={50} height={20} color="dodgerblue" />
                ) : (
                  <NeuButton
                    disabled={loader}
                    depressed={true}
                    onClick={handlelogin}
                  >
                    Submit
                  </NeuButton>
                )}
                <small
                  style={{
                    padding: "10px 0",
                    textTransform: "capitalize",
                    fontSize: "14px",
                  }}
                >
                  Don't have an account? <NavLink to="/signup">signup</NavLink>
                </small>
              </FormControl>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
