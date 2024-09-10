import React, { lazy } from "react";
import "./home_page.css";
import { Col, Container, Row } from "react-bootstrap";
import {
  Button,
  Carousel as NeuMorpCarousel,
  CarouselItem,
} from "ui-neumorphism";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TopApp from "../../components/top_app/TopApp";
import {
  LocalShipping,
  PhoneAndroid,
  Tablet,
  Tv,
  Watch,
} from "@mui/icons-material";
import AppGameCard from "../../components/app_game_card/AppGameCard";
import Carousel from "react-multi-carousel";
import SectionTitle from "../../components/section_title/SectionTitle";
import PaidAppCard from "../../components/paid_app_card/PaidAppCard";
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
      items: 5,
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
      <div className="app_home_page">
        <Container>
          <div className="app_home_wrapper">
            {/* APP BANNER SECTION */}
            <section className="app_store_banner_slider">
              <Row>
                <Col lg={8}>
                  <div className="app_left">
                    <NeuMorpCarousel>
                      <CarouselItem>
                        <LazyLoadImage
                          className="app_store_banner_slider_img rounded-3"
                          src="https://bsmedia.business-standard.com/_media/bs/img/article/2023-07/13/full/1689271023-7627.jpg?im=FitAndFill=(826,465)"
                        />
                      </CarouselItem>
                      <CarouselItem>
                        <LazyLoadImage
                          className="app_store_banner_slider_img rounded-3"
                          src="https://bsmedia.business-standard.com/_media/bs/img/article/2023-07/13/full/1689271023-7627.jpg?im=FitAndFill=(826,465)"
                        />
                      </CarouselItem>
                      <CarouselItem>
                        <LazyLoadImage
                          className="app_store_banner_slider_img rounded-3"
                          src="https://bsmedia.business-standard.com/_media/bs/img/article/2023-07/13/full/1689271023-7627.jpg?im=FitAndFill=(826,465)"
                        />
                      </CarouselItem>
                      <CarouselItem>
                        <LazyLoadImage
                          className="app_store_banner_slider_img rounded-3"
                          src="https://bsmedia.business-standard.com/_media/bs/img/article/2023-07/13/full/1689271023-7627.jpg?im=FitAndFill=(826,465)"
                        />
                      </CarouselItem>
                    </NeuMorpCarousel>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="app_right">
                    <h3>Top App</h3>
                    <div className="top_app">
                      {Array.from({ length: 4 }).map((iteme) => {
                        return <TopApp />;
                      })}
                    </div>
                  </div>
                </Col>
              </Row>
            </section>
            {/* APP CATEGORY SECTION */}
            <section className="app_category">
              <Button depressed={true} rounded={true}>
                <PhoneAndroid fontSize="small" />{" "}
                <span style={{ paddingLeft: 5 }}>Phone</span>
              </Button>
              <Button depressed={true} rounded={true}>
                <Watch fontSize="small" />{" "}
                <span style={{ paddingLeft: 5 }}>Watch</span>
              </Button>
              <Button depressed={true} rounded={true}>
                <Tablet fontSize="small" />{" "}
                <span style={{ paddingLeft: 5 }}>Tablet</span>
              </Button>
              <Button depressed={true} rounded={true}>
                <Tv fontSize="small" />{" "}
                <span style={{ paddingLeft: 5 }}>TV</span>
              </Button>
              <Button depressed={true} rounded={true}>
                <LocalShipping fontSize="small" />{" "}
                <span style={{ paddingLeft: 5 }}>Care</span>
              </Button>
            </section>
            {/* ALL APPS SECTION */}
            <section className="app_popular_app">
              <SectionTitle text="popular app" />
              <div className="popular_app_grid">
                {Array.from({ length: 20 }).map((iteme) => {
                  return <TopApp />;
                })}
              </div>
            </section>
            {/* POPULAR GAMES APPS SECTION */}
            <section className="app_popular_game">
              <SectionTitle text="popular games" />
              <Carousel
                responsive={responsive}
                draggable={true}
                swipeable={true}
                autoPlay={true}
                transitionDuration={3000}
                rewindWithAnimation
              >
                {Array.from({ length: 20 }).map((items) => {
                  return <AppGameCard />;
                })}
              </Carousel>
            </section>
            {/* PAID APPS SECTION */}
            <section className="app_paid_app">
              <SectionTitle text="paid app" />
              <div className="app_paid_app_grid">
                {Array.from({ length: 20 }).map((items) => {
                  return <PaidAppCard />;
                })}
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
