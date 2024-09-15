import React, { lazy } from "react";
import "./home_page.css";
import { Container } from "react-bootstrap";
import {
  Card,
  Carousel as NueCarousel,
  CarouselItem,
  H3,
} from "ui-neumorphism";
import { Avatar, Stack, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import PageTitle from "../../../../../../components/page_title/PageTitle";
import OnDemandCard from "../../components/ondemand_card/OnDemandCard";
const Header = lazy(() =>
  import("../../../../../components/common/header/Header")
);
const Footer = lazy(() =>
  import("../../../../../components/common/footer/Footer")
);
const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Header />
      <div className="ondemand_store">
        <Container>
          <div className="ondemand_wrapper">
            {/* BANNER SLIDER SECTIONS */}
            <section className="ondemand_banner_slider">
              <Card elevation={1} style={{ padding: 10 }}>
                <NueCarousel
                  continuous={true}
                  showArrows={true}
                  showArrowsOnHover={true}
                >
                  <CarouselItem
                    style={{ background: "var(--error)", borderRadius: 10 }}
                  >
                    <H3 style={{ color: "white", textTransform: "capitalize" }}>
                      T-shirt printing made easy.
                    </H3>
                  </CarouselItem>
                  <CarouselItem
                    style={{ background: "var(--info)", borderRadius: 10 }}
                  >
                    <H3 style={{ color: "white", textTransform: "capitalize" }}>
                      Bring your idea to life in minutes.
                    </H3>
                  </CarouselItem>
                  <CarouselItem
                    style={{ background: "var(--warning)", borderRadius: 10 }}
                  >
                    <H3 style={{ color: "white", textTransform: "capitalize" }}>
                      T-Shirt printing for everyone
                    </H3>
                  </CarouselItem>
                  <CarouselItem
                    style={{ background: "var(--success)", borderRadius: 10 }}
                  >
                    <H3 style={{ color: "white", textTransform: "capitalize" }}>
                      design your own
                    </H3>
                  </CarouselItem>
                </NueCarousel>
                {/* <div className="ondemand_slider_desc">
                  <p>design your own alinone print on demand</p>
                </div> */}
              </Card>
            </section>
            {/* OUR STARATIGY SECTION */}
            <section className="stratigy_tags">
              <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/globe--v1.png"
                  alt="globe--v1"
                />
                <Typography>World Wide Shipping</Typography>
              </Stack>
              <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/t-shirt--v1.png"
                  alt="t-shirt--v1"
                />
                <Typography>Premium quality shirts</Typography>
              </Stack>
              <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/dotty/50/like.png"
                  alt="like"
                />
                <Typography>Support agood causes</Typography>
              </Stack>
              <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/credit-card-front.png"
                  alt="credit-card-front"
                />
                <Typography>Safe online payment</Typography>
              </Stack>
            </section>
            {/* CATEGORY SECTION */}
            <section className="ondemand_category">
              <PageTitle
                style={{
                  color: "#231",
                  textTransform: "capitalize",
                  fontSize: 20,
                  fontWeight: "bold",
                  padding: 10,
                  textAlign: "center",
                  marginTop: 20,
                }}
                title="verity of Categories"
              />
              <Carousel
                draggable={true}
                swipeable={true}
                responsive={responsive}
                autoPlay={true}
                transitionDuration={2000}
              >
                {Array.from([
                  { name: "T-SHIRT" },
                  { name: "SWEATSHIRT" },
                  { name: "HOODIE" },
                  { name: "Cap" },
                  { name: "Pant" },
                  { name: "mug" },
                  { name: "tyni" },
                  { name: "TANK TOP" },
                  { name: "LONG_SLEEVES" },
                ]).map((item) => (
                  <div style={{ margin: 10 }} className="carusal_item">
                    <Card
                      width={150}
                      height={100}
                      elevation={1}
                      style={{ padding: 10, borderRadius: 5 }}
                      //   inset={true}
                      bordered={true}
                    >
                      <Avatar
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2FLda_j5sZZL39T7uT0XVH_LAPZUUe8hlQ&s"
                        style={{ margin: "auto" }}
                      />
                      <p style={{ textAlign: "center" }}>{item.name}</p>
                    </Card>
                  </div>
                ))}
              </Carousel>
            </section>
            {/* TOP PRODUCT SECTIONS */}
            <section className="ondemand_topproduct">
              <PageTitle
                style={{
                  color: "#231",
                  textTransform: "capitalize",
                  fontSize: 20,
                  fontWeight: "bold",
                  padding: 10,
                  textAlign: "left",
                  marginTop: 20,
                }}
                title="Top For You"
              />
              <div className="ondemand_item_grid">
                {Array.from({ length: 10 }).map((item) => {
                  return <OnDemandCard />;
                })}
              </div>
            </section>
            {/* PRODUCT SECTIONS */}
            <section className="ondemand_product">
              <PageTitle
                style={{
                  color: "#231",
                  textTransform: "capitalize",
                  fontSize: 20,
                  fontWeight: "bold",
                  padding: 10,
                  textAlign: "left",
                  marginTop: 20,
                }}
                title="Best For You"
              />
              <div className="ondemand_item_grid">
                {Array.from({ length: 20 }).map((item) => {
                  return <OnDemandCard />;
                })}
              </div>
            </section>
            {/* BANNER ADS SECTION */}
            <section className="ondemand_banner_ads"></section>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
