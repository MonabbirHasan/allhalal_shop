import React, { useState } from "react";
import "./header.css";
import { Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { Avatar, Box, IconButton } from "@mui/material";
import { Card, Button } from "ui-neumorphism";
import {
  AbcOutlined,
  Air,
  Biotech,
  ContactPage,
  DetailsOutlined,
  HomeOutlined,
  InfoOutlined,
  Newspaper,
  PanToolSharp,
  Person,
  Power,
  Sick,
  TollOutlined,
} from "@mui/icons-material";
const Header = () => {
  const navigation = useNavigate();
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="ui_header">
      <header>
        <Card inset={false}>
          <Navbar expand="lg" className="">
            <Container>
              <Navbar.Brand>
                <div className="front_logo" onClick={() => navigation("/")}>
                  <h3>
                    All <span>halal</span>
                  </h3>
                </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto front_navigation">
                  <Nav.Link>
                    <NavLink to="/">
                      <HomeOutlined />
                      Market
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink to="/about">
                      <InfoOutlined />
                      About
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink to="/news_blog">
                      <Newspaper />
                      Blogs
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink to="/tools">
                      <TollOutlined />
                      Tools
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink to="/contact">
                      <ContactPage />
                      Contact Us
                    </NavLink>
                  </Nav.Link>
                </Nav>
                {/* USER PROFILE START HERE */}
                <Box>
                  {IsLoggedIn == true ? (
                    <IconButton onClick={() => navigation("/my_dashboard")}>
                      <Avatar
                        sx={{
                          backgroundColor: "#233",
                          textTransform: "uppercase",
                          fontWeight: "normal",
                        }}
                      >
                        M
                      </Avatar>
                    </IconButton>
                  ) : (
                    <Button active={true} onClick={() => navigation("/signup")}>
                      sign up
                    </Button>
                  )}
                </Box>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Card>
      </header>
    </div>
  );
};

export default Header;
