import React, { lazy } from "react";
import "./application_main.css";
import { Container } from "react-bootstrap";
import PageTitle from "../../../components/page_title/PageTitle";
import halal_label from "../../../assets/img/halal-label-logo-vector.png";
const Header = lazy(() => import("../../components/common/header/Header"));
import { front_shopes } from "../../../utils/static/front_shopes";
import { Avatar, Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Body2,
  Button,
  Card,
  CardAction,
  CardContent,
  H3,
  H5,
  Subtitle2,
} from "ui-neumorphism";
import { ArrowForward } from "@mui/icons-material";
const ApplicationMain = () => {
  const navigate = useNavigate();
  //////////////////////////////
  //ROUTING CONTROLLER
  /////////////////////////////
  const routing_controller = (route_name) => {
    return navigate(`${route_name}`, { replace: true });
  };
  return (
    <>
      <Header />
      <div className="ApplicationMain">
        <main>
          <Container>
            <div className="app_main_wrapper">
              <Box>
                <Card
                  width={150}
                  height={150}
                  rounded={true}
                  bordered={true}
                  style={{
                    borderRadius: "100px",
                    margin: "auto",
                    border: "1px solid #ffffff",
                    borderStyle: "groove",
                  }}
                >
                  <Avatar
                    sx={{ width: 150, height: "auto", margin: "auto" }}
                    src={halal_label}
                  />
                </Card>
                <PageTitle
                  title={"welcome to All Halal"}
                  style={{
                    textTransform: "capitalize",
                    textAlign: "center",
                    padding: "5px 0",
                    fontFamily: "fantasy",
                  }}
                />
              </Box>
              {/* store item grid */}
              <div className="shop_item_wrapper">
                {front_shopes.map((items) => (
                  <Card className={"store_item"}>
                    <CardContent>
                      <Subtitle2 secondary style={{ margin: 0, padding: 0 }}>
                        All Halal
                      </Subtitle2>
                      <H5
                        style={{
                          textTransform: "capitalize",
                          fontWeight: "500",
                          color: "#232",
                          margin: 0,
                          padding: 0,
                          fontSize: "16px",
                        }}
                      >
                        {items.name}
                      </H5>
                      <Body2>
                        <Stack
                          direction={"row"}
                          spacing={1}
                          alignItems={"center"}
                          justifyContent={"space-between"}
                          textAlign={'center'}
                        >
                          <H3 style={{ margin: 0, padding: 0,textAlign:'center' }}>
                            {items.left_icon}
                          </H3>
                          <H5
                            style={{
                              margin: 0,
                              padding: 0,
                              fontWeight: "bold",
                              color: "green",
                              display:'none'
                            }}
                          >
                            حلال
                          </H5>
                        </Stack>
                      </Body2>
                    </CardContent>
                    <CardAction>
                      <Button
                        rounded={true}
                        style={{ margin: 0, width: "100%" }}
                        active={true}
                        size="large"
                        onClick={() => routing_controller(items.path)}
                      >
                        <span className="arrow_animation">
                          <ArrowForward />
                        </span>
                        <span className="visit_btn_txt">Visit store</span>
                      </Button>
                    </CardAction>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </main>
      </div>
    </>
  );
};

export default ApplicationMain;
