import React, { lazy } from "react";
import "./contact.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Box, FormControl, Stack } from "@mui/material";
import { Card, Button, TextField, TextArea, Typography } from "ui-neumorphism";
import { Email, LocationCity, Phone, Web } from "@mui/icons-material";
const Header = lazy(() => import("../../components/common/header/Header"));
const Footer = lazy(() => import("../../components/common/footer/Footer"));
const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact_page">
        <Container>
          <div className="contact_wrapper">
            <Row>
              <Col>
                <Card inset={true} style={{ padding: 10 }}>
                  <div className="contact_left">
                    <h3>contact us</h3>
                    <FormControl fullWidth>
                      <TextField width={450} placeholder="Enter Your Name" />
                    </FormControl>
                    <FormControl fullWidth sx={{ my: 1 }}>
                      <TextField width={450} placeholder="Enter Your Email" />
                    </FormControl>
                    <FormControl fullWidth>
                      <TextField width={450} placeholder="Enter Your Phone" />
                    </FormControl>
                    <FormControl fullWidth sx={{ my: 1 }}>
                      <TextField width={450} placeholder="Enter The Subject" />
                    </FormControl>
                    <FormControl fullWidth>
                      <TextArea
                        dense
                        autoExpand
                        height={200}
                        width={450}
                        laceholder="Enter The message"
                      />
                    </FormControl>
                    <FormControl sx={{ mt: 2 }}>
                      <Button variant="contained" size="medium">
                        submit
                      </Button>
                    </FormControl>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card inset={true} style={{ padding: 10 }}>
                  <div className="contact_right">
                    <div style={{ height: "50vh" }}>
                      <iframe
                        width={"100%"}
                        height={"100%"}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456.2158434414917!2d90.36412024204265!3d23.828313942115678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c139f78a8653%3A0x823d18dd4320d2b1!2s4%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1689914050252!5m2!1sen!2sbd"
                        allowFullScreen="true"
                        loading="lazy"
                        frameborder="0"
                      ></iframe>
                    </div>
                  </div>
                </Card>
                <div className="contact_info mt-2">
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                    sx={{ background: "#fff", padding: 1, borderRadius: 10 }}
                  >
                    <Box>
                      <Phone />
                    </Box>
                    <Box>
                      <p style={{ margin: 0 }}>Phone</p>
                      <p style={{ margin: 0 }}>+8801743714489</p>
                    </Box>
                  </Stack>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                    sx={{ background: "#fff", padding: 1, borderRadius: 10 }}
                  >
                    <Box>
                      <Email />
                    </Box>
                    <Box>
                      <p style={{ margin: 0 }}>Email</p>
                      <p style={{ margin: 0 }}>phpjsmonabbirhasan@gmail.com</p>
                    </Box>
                  </Stack>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                    sx={{ background: "#fff", padding: 1, borderRadius: 10 }}
                  >
                    <Box>
                      <LocationCity />
                    </Box>
                    <Box>
                      <p style={{ margin: 0 }}>Address</p>
                      <p style={{ margin: 0 }}>32, block, jl, Dhaka,Bangladesh</p>
                    </Box>
                  </Stack>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                    sx={{ background: "#fff", padding: 1, borderRadius: 10 }}
                  >
                    <Box>
                      <Web />
                    </Box>
                    <Box>
                      <p style={{ margin: 0 }}>Website</p>
                      <p style={{ margin: 0 }}>https://lenexit.com</p>
                    </Box>
                  </Stack>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
