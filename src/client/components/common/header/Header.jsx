import React, { useContext, useEffect, useRef, useState } from "react";
import "./header.css";
import {
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Overlay,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { Avatar, Badge, Box, IconButton, MenuItem, Stack } from "@mui/material";
import { Card, Button, Divider } from "ui-neumorphism";
import {
  ContactPage,
  DarkMode,
  DashboardOutlined,
  Download,
  InfoOutlined,
  LanguageRounded,
  MonetizationOn,
  Newspaper,
  Notifications,
  Person,
  PersonOutline,
  SettingsOutlined,
  TollOutlined,
} from "@mui/icons-material";
import { AuthContext } from "../../../../context/AuthContext";
import { AbbreviateNumber } from "../../../../utils/AbbreviateNumber";
import ApiClient from "../../../../utils/apiClient/ApiClient";
const Header = () => {
  const navigation = useNavigate();
  const { AuthUser, isAuthenticate, logout } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [UserCoin, setUserCoin] = useState({});
  const target = useRef(null);
  const [coinLoader, setCoinLoader] = useState(false);
  /////////////////////////////////
  // INITIALIZE CLIENT API ROOT
  /////////////////////////////////
  const ClientApi = new ApiClient(import.meta.env.VITE_API_ROOT_URI);
  //////////////////////////
  // UPDATE USER COINS
  /////////////////////////
  const fetch_user_coin = async () => {
    try {
      setCoinLoader(true);
      const response = await ClientApi.read(
        `api/earning/user_coin/user_coin/${AuthUser.data.user.user_id}`,
        import.meta.env.VITE_API_ACCESS_KEY
      );
      if (response.status === 200) {
        setCoinLoader(false);
        setUserCoin(response.data);
      }
    } catch (error) {
      setCoinLoader(false);
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetch_user_coin();
  }, []);
  return (
    <div className="ui_header">
      <header>
        <Card inset={false}>
          <Navbar expand="lg" className="">
            <Container>
              <Navbar.Brand>
                <div className="front_logo" onClick={() => navigation("/")}>
                  <h3>
                    Maheeb<span>Mart</span>
                  </h3>
                </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto front_navigation">
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
                    <NavLink to="/earning">
                      <MonetizationOn />
                      Earning
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
                  {isAuthenticate ? (
                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                      {/* <IconButton onClick={() => navigation("/my_dashboard")}>
                        <Avatar
                          sx={{
                            backgroundColor: "#233",
                            textTransform: "uppercase",
                            fontWeight: "normal",
                          }}
                        >
                          M
                        </Avatar>
                        </IconButton> */}
                      <Button depressed={true} active={true} size="small">
                        <span style={{ marginRight: 5 }}>
                          <img
                            width="22"
                            height="22"
                            src="https://img.icons8.com/fluency/48/stack-of-coins.png"
                            alt="stack-of-coins"
                          />
                        </span>{" "}
                        <span>
                          {coinLoader
                            ? "loading..."
                            : AbbreviateNumber(UserCoin?.user_coin)}
                        </span>
                      </Button>
                      <IconButton ref={target} onClick={() => setShow(!show)}>
                        <Person />
                      </IconButton>
                      <Overlay
                        target={target.current}
                        show={show}
                        style={{ margin: 0 }}
                        flip
                        placement="bottom"
                      >
                        {(props) => (
                          <Tooltip id="overlay-example" {...props}>
                            {/* <Stack
                              justifyContent={"center"}
                              direction={"row"}
                              spacing={3}
                            >
                              <span>Total Coins:</span>
                              <span>{AbbreviateNumber(5230)}</span>
                            </Stack> */}
                            <Stack
                              justifyContent={"center"}
                              direction={"row"}
                              spacing={3}
                              padding={1}
                            >
                              <span>Total Balance:</span>
                              <span>${AbbreviateNumber(20304)}</span>
                            </Stack>
                            <Divider
                              style={{ margin: 0 }}
                              dense={true}
                              dark={true}
                            />
                            <MenuItem
                              onClick={() => navigation("/my_dashboard")}
                            >
                              <span>
                                <DashboardOutlined />
                              </span>
                              <span>Dashboard</span>
                            </MenuItem>
                            <MenuItem>
                              <span>
                                <PersonOutline />
                              </span>
                              <span>Profile</span>
                            </MenuItem>
                            <MenuItem>
                              <span>
                                <SettingsOutlined />
                              </span>
                              <span>Settings</span>
                            </MenuItem>
                            <Divider
                              style={{ margin: 0 }}
                              dense={true}
                              dark={true}
                            />
                            <MenuItem
                              onClick={() => logout()}
                              sx={{ color: "tomato" }}
                            >
                              Logout
                            </MenuItem>
                          </Tooltip>
                        )}
                      </Overlay>
                      {/* NOTIFICATION ICON */}
                      <IconButton>
                        <Badge
                          badgeContent={3}
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                          color="secondary"
                        >
                          <Notifications />
                        </Badge>
                      </IconButton>
                      {/* APP DOWNLOAD ICON*/}
                      <IconButton>
                        <Download />
                      </IconButton>
                      {/* LANGUAGE ICON */}
                      <IconButton>
                        <LanguageRounded />
                      </IconButton>
                      {/* DARK MODE ICON*/}
                      <IconButton>
                        <DarkMode />
                      </IconButton>
                    </Stack>
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
