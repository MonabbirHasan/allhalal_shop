import React from "react";
import "./home_page.css";
import { Container, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Card, Carousel, CarouselItem } from "ui-neumorphism";
const HomePage = () => {
  return (
    <div className="book_home_page">
      <Container>
        <div className="book_wrapper">
          {/* BANNER SLIDER */}
          <section className="book_banner_slider">
            <Card style={{padding:10}}>
              <Carousel
                continuous={true}
                showArrows={true}
                showArrowsOnHover={true}
              >
                <CarouselItem style={{ borderRadius: 10 }}>
                  <LazyLoadImage
                    className="book_banner_slider_img"
                    src="/assets/img/book_store/book_store_slider1.jpg"
                  />
                </CarouselItem>
                <CarouselItem style={{ borderRadius: 10 }}>
                  <LazyLoadImage
                    className="book_banner_slider_img"
                    src="/assets/img/book_store/book_store_slider2.jpg"
                  />
                </CarouselItem>
                <CarouselItem style={{ borderRadius: 10 }}>
                  <LazyLoadImage
                    className="book_banner_slider_img"
                    src="/assets/img/book_store/book_store_slider3.jpg"
                  />
                </CarouselItem>
                <CarouselItem style={{ borderRadius: 10 }}>
                  <LazyLoadImage
                    className="book_banner_slider_img"
                    src="/assets/img/book_store/book_store_slider4.jpg"
                  />
                </CarouselItem>
                <CarouselItem style={{ borderRadius: 10 }}>
                  <LazyLoadImage
                    className="book_banner_slider_img"
                    src="/assets/img/book_store/book_store_slider5.jpg"
                  />
                </CarouselItem>
              </Carousel>
            </Card>
          </section>
          {/*  */}
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
