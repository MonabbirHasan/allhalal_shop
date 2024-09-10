import React, { lazy } from "react";
import "./home_page.css";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import {
  Avatar,
  Card,
  Carousel as NeuMorCarousel,
  CarouselItem,
  Button,
} from "ui-neumorphism";
import PageTitle from "../../../../../../components/page_title/PageTitle";
import ClothCard from "../../components/cloth_card/ClothCard";
import { Refresh } from "@mui/icons-material";
const Header = lazy(() =>
  import("../../../../../components/common/header/Header")
);
const Footer = lazy(() =>
  import("../../../../../components/common/footer/Footer")
);
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
const HomePage = () => {
  return (
    <>
      <Header />
      <div className="cloth_home_page">
        <Container>
          <div className="cloth_home_page_wrapper">
            {/* SLIDER SECTION START HERE */}
            <section className="cloth_banner_slider">
              <Card style={{ padding: 10 }}>
                <NeuMorCarousel showArrows showArrowsOnHover>
                  <CarouselItem>
                    <img
                      src="https://img.lazcdn.com/us/domino/763da57d-b65a-415e-b0d1-b36ac453e3c3_BD-1976-688.jpg_1200x1200q80.jpg_.webp"
                      alt=""
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src="https://img.lazcdn.com/us/domino/d0d806e0-bfb2-4c53-be85-83e777c5cf59_BD-1976-688.jpg_1200x1200q80.jpg_.webp"
                      alt=""
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src="https://img.lazcdn.com/us/domino/806923d7-dba0-4874-b0ac-e02d6831d0cc_BD-1976-688.jpg_1200x1200q80.jpg_.webp"
                      alt=""
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src="https://img.lazcdn.com/us/domino/3bc70cb2-0f02-417b-a5bd-067c21e08b5c_BD-1976-688.jpg_1200x1200q80.jpg_.webp"
                      alt=""
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src="https://img.lazcdn.com/us/domino/a71afc9c-5528-49b2-81b5-5a96f2acbd74_BD-1976-688.jpg_1200x1200q80.jpg_.webp"
                      alt=""
                    />
                  </CarouselItem>
                </NeuMorCarousel>
              </Card>
            </section>
            {/* PRODUCT CATEGORY SECTION START HERE */}
            <section className="cloth_category">
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
                title="Our vendors"
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
            {/* PINNED PRODUCT LISTING START HERE */}
            <section className="cloth_pinned_product">
              <PageTitle
                style={{
                  color: "#232",
                  textTransform: "capitalize",
                  fontSize: 20,
                  fontWeight: "500",
                  padding: 10,
                  textAlign: "left",
                  marginTop: 20,
                }}
                title="Most Popular"
              />
              <div className="cloth_product_grid">
                {Array.from({ length: 20 }).map((item) => {
                  return (
                    <ClothCard
                      key={item}
                      thumbnail="https://img.drz.lazcdn.com/static/bd/p/413185ef96fa8b8073b85e1c2c157885.png_720x720q80.png_.webp"
                      title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, officiis."
                      price="230"
                      discount="50"
                      rating="2.5"
                      rating_count="20"
                      isloved={true}
                      iscart={false}
                    />
                  );
                })}
              </div>
            </section>
            {/* PRODUCT LISTING START HERE */}
            <section className="cloth_product_list">
              <PageTitle
                style={{
                  color: "#232",
                  textTransform: "capitalize",
                  fontSize: 20,
                  fontWeight: "500",
                  padding: 10,
                  textAlign: "left",
                  marginTop: 20,
                }}
                title="Just For You"
              />
              <div className="cloth_product_grid">
                {Array.from({ length: 20 }).map((item) => {
                  return (
                    <ClothCard
                      key={item}
                      thumbnail="https://img.drz.lazcdn.com/g/kf/S3483cca961914ef9bfa31a61fd0081d7b.jpg_720x720q80.jpg_.webp"
                      title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, officiis."
                      price="230"
                      discount="50"
                      rating="2.5"
                      rating_count="20"
                      isloved={true}
                      iscart={false}
                    />
                  );
                })}
              </div>
            </section>
            {/* PRODUCT PAGINATION START HERE */}
            <section className="cloth_pagination">
              <div className="load_more_data">
                <Button depressed={true}>
                  <Refresh htmlColor="green" />
                  <span> load more</span>
                </Button>
              </div>
            </section>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
