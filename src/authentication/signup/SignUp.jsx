import React, { useEffect, useState } from "react";
import "./signup.css";
import { Container, Form, InputGroup } from "react-bootstrap";
import { FormControl, IconButton } from "@mui/material";
import {
  Diversity1,
  Email,
  Password,
  Person,
  Phone,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";
import { Card, Button as NeuButton } from "ui-neumorphism";
import ApiClient from "../../utils/apiClient/ApiClient";
import { toast } from "react-toastify";
const SignUp = () => {
  const navigate = useNavigate();
  const [UserName, setUserName] = useState("");
  const [UserMail, setUserMail] = useState("");
  const [UserPhone, setUserPhone] = useState("");
  const [UserPass, setUserPass] = useState("");
  const [UserType, setUserType] = useState();
  const [InputTyp, setInputTyp] = useState("password");

  const [error, setError] = useState({});
  //================================
  // INITIALIZE CLIENT API ROOT
  //================================
  const ClientApi = new ApiClient(import.meta.env.VITE_API_ROOT_URI);
  // validate form
  const validate = () => {
    let errors = {};
    if (!UserName) {
      errors.UserName = "name is required";
    }
    if (!UserMail) {
      errors.UserMail = "mail is required";
    }
    if (!UserPhone) {
      errors.UserPhone = "phone is required";
    }
    if (!UserPass) {
      errors.UserPass = "password is required";
    }
    if (!UserType) {
      errors.UserType = "account type is required";
    }
    setError(errors);
    return Object.keys(errors).length > 0;
  };
  const reset = () => {
    setUserName("");
    setUserMail("");
    setUserPhone("");
    setUserPass("");
    setUserType("");
  };
  //================================
  // CREATE NEW USER ACCOUNTS
  //================================
  const register = async () => {
    try {
      const data = {
        username: UserName,
        email: UserMail,
        phone: UserPhone,
        password: UserPass,
        role: UserType,
        is_active: 1,
        is_online: 1,
      };

      if (!validate()) {
        const response = await ClientApi.create(
          `api/platform/users`,
          data,
          import.meta.env.VITE_API_ACCESS_KEY
        );
        if (response.status === 201) {
          reset();
          navigate("/signin");
          toast.success("Your Account Create Success🎉🎉");
        }
      }
    } catch (error) {
      // console.log(error.response.status);
      if (error.response.status === 409) {
        toast.error("Accout Already Exist. Please Login");
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
  const input_style = {
    background: "#e4ebf5",
    border: "none",
  };
  return (
    <div className="front_signup" id="front_signup">
      <Container>
        <div className="signup_wrapper">
          <div className="signup_form">
            <Card style={{ padding: 10, border: "1px solid #fff" }}>
              <h3>Let's Signup</h3>
              {/* USER NAME */}
              <FormControl fullWidth>
                <InputGroup>
                  <InputGroup.Text style={input_style}>
                    <Person htmlColor="#232" />
                  </InputGroup.Text>
                  <Form.Control
                    onChange={(e) => setUserName(e.target.value)}
                    value={UserName}
                    type="text"
                    className="global_input_shadow"
                    placeholder="Enter Your Name"
                  />
                </InputGroup>
                {error.UserName && error_element(error.UserName)}
              </FormControl>
              {/* USER EMAIL */}
              <FormControl fullWidth sx={{ py: 2 }}>
                <InputGroup>
                  <InputGroup.Text style={input_style}>
                    <Email htmlColor="#232" />
                  </InputGroup.Text>
                  <Form.Control
                    onChange={(e) => setUserMail(e.target.value)}
                    value={UserMail}
                    type="text"
                    className="global_input_shadow"
                    placeholder="Enter Your Email"
                  />
                </InputGroup>
                {error.UserMail && error_element(error.UserMail)}
              </FormControl>
              {/* USER PHONE */}
              <FormControl fullWidth sx={{ py: 2 }}>
                <InputGroup>
                  <InputGroup.Text style={input_style}>
                    <Phone htmlColor="#232" />
                  </InputGroup.Text>
                  <Form.Control
                    onChange={(e) => setUserPhone(e.target.value)}
                    value={UserPhone}
                    type="text"
                    className="global_input_shadow"
                    placeholder="Enter Your Phone"
                  />
                </InputGroup>
                {error.UserPhone && error_element(error.UserPhone)}
              </FormControl>
              {/* USER PASSWORD */}
              <FormControl fullWidth>
                <InputGroup>
                  <InputGroup.Text style={input_style}>
                    <Password htmlColor="#232" />
                  </InputGroup.Text>
                  <Form.Control
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
              {/* USER TYPE */}
              <FormControl fullWidth sx={{ py: 2 }}>
                <InputGroup>
                  <InputGroup.Text style={input_style}>
                    <Diversity1 htmlColor="#232" />
                  </InputGroup.Text>
                  <Form.Select
                    className="global_input_shadow"
                    onChange={(e) => setUserType(e.target.value)}
                    value={UserType}
                  >
                    <option selected>Select Account Type</option>
                    <option value={"user"}>I am Customer</option>
                    <option value={"advertiser"}>I am advertiser</option>
                    <option value={"vendor"}>I am Vendor</option>
                  </Form.Select>
                </InputGroup>
                {error.UserType && error_element(error.UserType)}
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
                <NeuButton onClick={register} depressed={true}>
                  Submit
                </NeuButton>
                <small
                  style={{
                    padding: "10px 0",
                    textTransform: "capitalize",
                    fontSize: "14px",
                  }}
                >
                  already have account? <NavLink to="/signin">login</NavLink>
                </small>
              </FormControl>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
