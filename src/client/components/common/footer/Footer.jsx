import React from "react";
import "./footer.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Button, IconButton } from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Mail,
  Twitter,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const opne_social_window = (url) => {
    window.open(url);
  };
  const opne_mail_window = (mail) => {};
  return (
    <div className="front_footer">
      <footer>
        <Container fluid>
          <Row lg={4}>
            <Col lg={3}>
              <div className="footer_logo">
                <h3>blogs</h3>
                <p>
                  We offer innovative services like web and mobile app
                  development, SEO, UI/UX design, and penetration testing. Our
                  exceptional support ensures ongoing assistance and guidance,
                  building lasting client relationships for continued success.
                </p>
              </div>
              <div className="footer_social">
                <span>
                  <IconButton
                    onClick={() =>
                      opne_social_window(`https://www.facebook.com/itlenex`)
                    }
                  >
                    <Facebook htmlColor="white" />
                  </IconButton>
                </span>
                <span>
                  <IconButton
                    onClick={() =>
                      opne_social_window(`https://twitter.com/itLenex`)
                    }
                  >
                    <Twitter htmlColor="white" />
                  </IconButton>
                </span>
                <span>
                  <IconButton
                    onClick={() => opne_mail_window(`itlenex@gmail.com`)}
                  >
                    <a
                      href="mailto:itlenex@gmail.com"
                      style={{ marginBottom: "6px", display: "inline-block" }}
                    >
                      <Mail htmlColor="white" />
                    </a>
                  </IconButton>
                </span>
                <span>
                  <IconButton
                    onClick={() =>
                      opne_social_window(`https://www.instagram.com/lenex.it`)
                    }
                  >
                    <Instagram htmlColor="white" />
                  </IconButton>
                </span>
                <span>
                  <IconButton
                    onClick={() =>
                      opne_social_window(
                        `https://www.linkedin.com/company/lenexit`
                      )
                    }
                  >
                    <LinkedIn htmlColor="white" />
                  </IconButton>
                </span>
              </div>
            </Col>
            <Col lg={2}>
              <div className="footer_nav">
                <h3>Quick Menu</h3>
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/apps_store">Apps store</NavLink>
                  </li>
                  <li>
                    <NavLink to="/news_blog">news blogs</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact Us</NavLink>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={4}>
              <div className="footer_tags">
                <h3>Services</h3>
                <p>app store</p>
                <p>art store</p>
                <p>book store</p>
                <p>cloth store</p>
                <p>donations</p>
                <p>electronics</p>
                <p>grocary store</p>
                <p>home sevice</p>
                <p>hire me</p>
                <p>pharmacy store</p>
                <p>meet doctor</p>
                <p>money storage</p>
                <p>print store</p>
                <p>social network</p>
              </div>
            </Col>
            <Col lg={3}>
              <div className="footer_news_letter">
                <h3>newsletter</h3>
                <p>subscribe to join our newsletter teams</p>
                <Form.Control placeholder="Enter Your Email!" />
                <Button variant="outlined" color="error" sx={{ mt: 1 }}>
                  subscribe
                </Button>
              </div>
            </Col>
          </Row>
          <div className="footer_iland">
            <Row>
              {/* <a style={{ color: "#898888", }} href='https://lenexit.com'></a> */}
              <Col lg={6}>
                <p
                  style={{
                    textTransform: "capitalize",
                    color: "white",
                    fontSize: "14px",
                    marginTop: "20px",
                  }}
                >
                  Copyright @ 2023-2024 (all Halal) All Rights Reserved
                </p>
              </Col>
              <Col lg={6}>
                <div className="footer_iland_nav">
                  <ul>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink>Advertise</NavLink>
                    </li>
                    <li>
                      <NavLink to="/help_support">Help & Support</NavLink>
                    </li>
                    <li>
                      <NavLink to="/faq">FAQ</NavLink>
                    </li>
                    <li>
                      <NavLink to="/privacy_policy">Privacy & Terms</NavLink>
                    </li>
                    <li>
                      <NavLink to="/cookie_policy">Cookie Privacy</NavLink>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
