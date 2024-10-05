import React, { lazy } from "react";
import "./home_page.css";
import { Col, Container, Row } from "react-bootstrap";
import {
  Avatar,
  Button,
  Card,
  CarouselItem,
  Carousel as NeuMorCarousel,
} from "ui-neumorphism";
import PageTitle from "../../../../../../components/page_title/PageTitle";
import ElcCard from "../../components/elc_card/ElcCard";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Carousel from "react-multi-carousel";
import { Box } from "@mui/material";
const Header = lazy(() =>
  import("../../../../../components/common/header/Header")
);
const Footer = lazy(() =>
  import("../../../../../components/common/footer/Footer")
);
const HomePage = () => {
  const responsive1 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
      <div className="elc_store">
        <Container>
          <div className="elc_store_wrapper">
            {/* SLIDER SECTION START HERE */}
            <section className="elc_store_banner_slider">
              <Card style={{ padding: 10 }}>
                <NeuMorCarousel showArrows showArrowsOnHover>
                  <CarouselItem>
                    <img
                      className="elc_store_banner_slider_img"
                      src="https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg"
                      alt=""
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      className="elc_store_banner_slider_img"
                      src="https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2021/11/How-to-Save-Money-on-Electronics-in-India.jpg"
                      alt=""
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      className="elc_store_banner_slider_img"
                      src="https://blog.saginfotech.com/wp-content/uploads/2017/06/gst-electronics-discount.jpg"
                      alt=""
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      className="elc_store_banner_slider_img"
                      src="https://2.imimg.com/data2/HX/BG/IMFCP-5740145/images-jaganmetalhomeapplainces.jpg"
                      alt=""
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      className="elc_store_banner_slider_img"
                      src="https://www.shutterstock.com/image-vector/super-sale-header-banner-design-260nw-1663164736.jpg"
                      alt=""
                    />
                  </CarouselItem>
                </NeuMorCarousel>
              </Card>
            </section>
            {/* PRODUCT CARD SECTION START HERE */}
            <section className="elc_store_product">
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
                title="Campaign"
              />
              <div className="elc_store_campaign">
                <Carousel
                  responsive={responsive1}
                  autoPlay={true}
                  swipeable={true}
                  transitionDuration={1000}
                >
                  {Array.from({ length: 9 }).map((items) => (
                    <Card className="elc_store_campaign_item">
                      <LazyLoadImage src="https://www.shutterstock.com/image-vector/super-sale-header-banner-design-260nw-1663164736.jpg" />
                      <Button
                        style={{ marginTop: 10 }}
                        depressed={true}
                        rounded={true}
                        size="small"
                      >
                        Shop Now
                      </Button>
                    </Card>
                  ))}
                </Carousel>
              </div>
            </section>
            {/* PRODUCT CATEGORY SECTION START HERE */}
            <section className="elc_store_category">
              <PageTitle
                style={{
                  color: "#231",
                  textTransform: "capitalize",
                  fontSize: 20,
                  fontWeight: "bold",
                  padding: 10,
                  textAlign: "center",
                  marginTop: 25,
                }}
                title="Trand Category"
              />
              <Carousel
                draggable={true}
                swipeable={true}
                responsive={responsive}
                autoPlay={true}
                transitionDuration={2000}
              >
                {Array.from({ length: 50 }).map((item) => (
                  <div style={{ margin: 10 }}>
                    <Card
                      width={100}
                      height={100}
                      elevation={1}
                      style={{ padding: 10, borderRadius: 100 }}
                      // inset={true}
                      bordered={true}
                    >
                      <Avatar
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2FLda_j5sZZL39T7uT0XVH_LAPZUUe8hlQ&s"
                        style={{ margin: "auto" }}
                      />
                      <p style={{ textAlign: "center" }}>tshirt</p>
                    </Card>
                  </div>
                ))}
              </Carousel>
            </section>
            {/* VENDOR LIST SECTION START HERE */}
            <section className="cloth_vendor_list">
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
                title="Top vendors"
              />
              <Carousel
                draggable={true}
                swipeable={true}
                responsive={responsive}
                slidesToSlide={true}
                autoPlay={true}
                transitionDuration={1500}
              >
                {Array.from({ length: 50 }).map((item) => (
                  <div style={{ margin: 10 }}>
                    <Card elevation={1} style={{ padding: 10 }} bordered={true}>
                      <Avatar
                        src="https://www.lucidadvertising.com/wp-content/uploads/2020/07/Brand_Dev-1.jpg"
                        style={{ margin: "auto" }}
                      />
                      <p style={{ textAlign: "center" }}>Mariana web</p>
                    </Card>
                  </div>
                ))}
              </Carousel>
            </section>
            {/* PRODUCT CARD SECTION START HERE */}
            <section className="elc_store_product">
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
                title="Pinned Product"
              />
              <Carousel responsive={responsive2} swipeable={true}>
                {Array.from({ length: 8 }).map((item) => (
                  <Box sx={{ margin: 3 }}>
                    <ElcCard />
                  </Box>
                ))}
              </Carousel>
            </section>
            {/* PRODUCT SECTIONS */}
            <section className="elc_store_product">
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
                title="All Product"
              />
              <div className="elc_product_grid">
                {Array.from({ length: 48 }).map((item) => (
                  <ElcCard />
                ))}
              </div>
            </section>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
