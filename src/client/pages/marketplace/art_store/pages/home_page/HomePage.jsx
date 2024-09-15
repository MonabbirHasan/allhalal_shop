import React, { lazy, useState } from "react";
import "./home_page.css";
import { Col, Container, Row } from "react-bootstrap";
import {
  Avatar,
  Card,
  Carousel,
  CarouselItem,
  Tab,
  Tabs,
} from "ui-neumorphism";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SectionTitle from "../../components/section_title/SectionTitle";
import ArtCard from "../../components/art_card/ArtCard";
import { Stack, Typography } from "@mui/material";
const Header = lazy(() =>
  import("../../../../../components/common/header/Header")
);
const Footer = lazy(() =>
  import("../../../../../components/common/footer/Footer")
);
const HomePage = () => {
  const [TabValue, setTabValue] = useState(1);
  const art_category = [
    {
      name: "table decor",
      img: "https://img.icons8.com/pieces/64/round-table.png",
    },
    { name: "floor carpet", img: "https://img.icons8.com/color/48/carpet.png" },
    { name: "bag", img: "https://img.icons8.com/color/48/bag-front-view.png" },
    {
      name: "handmade cub",
      img: "https://img.icons8.com/color/48/cup--v1.png",
    },
    {
      name: "candle light",
      img: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/48/external-candle-light-winery-flaticons-lineal-color-flat-icons.png",
    },
    { name: "mug set", img: "https://img.icons8.com/arcade/48/travel-mug.png" },
    {
      name: "glassh set",
      img: "https://img.icons8.com/office/48/wine-glass.png",
    },
    {
      name: "glassh set",
      img: "https://img.icons8.com/office/48/wine-glass.png",
    },
    {
      name: "glassh set",
      img: "https://img.icons8.com/office/48/wine-glass.png",
    },
    {
      name: "glassh set",
      img: "https://img.icons8.com/office/48/wine-glass.png",
    },
    {
      name: "glassh set",
      img: "https://img.icons8.com/office/48/wine-glass.png",
    },
    { name: "plat set", img: "https://img.icons8.com/color/48/meal--v1.png" },
  ];
  return (
    <>
      <Header />
      <div className="art_store_page">
        <Container>
          <div className="art_store_wrapper">
            {/* BANNER SLIDER */}
            <section className="art_banner_slider">
              <Row>
                <Col lg={8}>
                  <Carousel
                    continuous={true}
                    showArrows={true}
                    showArrowsOnHover={true}
                  >
                    <CarouselItem style={{ borderRadius: 10 }}>
                      <LazyLoadImage
                        className="art_banner_slider_img"
                        src="/assets/img/art_store/art_slider1.jpg"
                      />
                    </CarouselItem>
                    <CarouselItem style={{ borderRadius: 10 }}>
                      <LazyLoadImage
                        className="art_banner_slider_img"
                        src="/assets/img/art_store/art_slider2.jpg"
                      />
                    </CarouselItem>
                    <CarouselItem style={{ borderRadius: 10 }}>
                      <LazyLoadImage
                        className="art_banner_slider_img"
                        src="/assets/img/art_store/art_slider3.jpg"
                      />
                    </CarouselItem>
                    <CarouselItem style={{ borderRadius: 10 }}>
                      <LazyLoadImage
                        className="art_banner_slider_img"
                        src="/assets/img/art_store/art_slider4.jpg"
                      />
                    </CarouselItem>
                    <CarouselItem style={{ borderRadius: 10 }}>
                      <LazyLoadImage
                        className="art_banner_slider_img"
                        src="/assets/img/art_store/art_slider5.jpg"
                      />
                    </CarouselItem>
                  </Carousel>
                </Col>
                {/* banner slider right img */}
                <Col lg={4}>
                  <div className="art_banner_slider_right">
                    <LazyLoadImage
                      className="art_banner_slider_right_img"
                      src="/assets/img/art_store/art_slider_right1.jpg"
                    />
                    <div className="art_banner_slider_right_txt_box">
                      <i className="art_banner_slider_right_title">
                        Random Art
                      </i>
                      <h5 className="art_banner_slider_right_subtitle">
                        New Modern & Stylist Crafts
                      </h5>
                    </div>
                  </div>
                  <div className="art_banner_slider_right">
                    <LazyLoadImage
                      className="art_banner_slider_right_img"
                      src="/assets/img/art_store/art_slider_right2.jpg"
                    />
                    <div className="art_banner_slider_right_txt_box">
                      <i className="art_banner_slider_right_title">View Art</i>
                      <h5 className="art_banner_slider_right_subtitle">
                        Energy with our newest collection
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </section>
            {/* TOP CATEGORY SECTION */}
            <section className="art_category">
              <SectionTitle text="Top category" />
              <div className="art_category_item_grid">
                {art_category.map((item) => (
                  <Card
                    className="global_card_border art_category_card"
                    elevation={1}
                    bordered={true}
                  >
                    <Avatar style={{ margin: "auto" }} src={item.img} />
                    <p>{item.name}</p>
                  </Card>
                ))}
              </div>
            </section>
            {/* POPULAR PRODUCT SECTION */}
            <section className="art_product">
              <SectionTitle text="Art For You" />
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography></Typography>
                <Tabs
                  value={TabValue}
                  color={
                    TabValue == 0
                      ? "green"
                      : TabValue == 1
                      ? "tomato"
                      : TabValue == 2
                      ? "indigo"
                      : TabValue == 3
                      ? "purple"
                      : "dodgerblue"
                  }
                  rounded={true}
                  onChange={(e) => setTabValue(e.active)}
                >
                  <Tab>All</Tab>
                  <Tab>Popular</Tab>
                  <Tab>On Sale</Tab>
                  <Tab>Best Rated</Tab>
                </Tabs>
              </Stack>
              <div className="art_product_grid">
                {TabValue == 1
                  ? Array.from({ length: 10 }).map((item) => {
                      return <ArtCard key={item} />;
                    })
                  : TabValue == 2
                  ? Array.from({ length: 10 }).map((item) => {
                      return <ArtCard key={item} />;
                    })
                  : TabValue == 3
                  ? Array.from({ length: 10 }).map((item) => {
                      return <ArtCard key={item} />;
                    })
                  : Array.from({ length: 10 }).map((item) => {
                      return <ArtCard key={item} />;
                    })}
              </div>
            </section>
            {/* ADS SECTION */}
            {/* SOME IMAGES SECTION */}
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
