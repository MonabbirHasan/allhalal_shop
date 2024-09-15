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
import { LazyLoadImage } from "react-lazy-load-image-component";
const Header = lazy(() =>
  import("../../../../../components/common/header/Header")
);
const Footer = lazy(() =>
  import("../../../../../components/common/footer/Footer")
);
// CATEGORY
const category = [
  {
    id: 1,
    name: "Skirts",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSz3Ual5harhRrLs9dTm8twxrq-JwCyI1cIg&s",
  },
  {
    id: 2,
    name: "Tops and Blouses",
    img: "https://poshgarments.com/wp-content/uploads/2021/10/Blouse-Tops-WWBT0005-450x450.jpg",
  },
  {
    id: 3,
    name: "Pinafores",
    img: "https://i.etsystatic.com/6811060/r/il/13d79a/4021321865/il_570xN.4021321865_jz3z.jpg",
  },
  {
    id: 5,
    name: "lagenga",
    img: "https://images.bestsellerclothing.in/data/vero-moda/03-feb-2024/171196401_g0.jpg?width=397&height=526&mode=fill&fill=blur&format=auto&dpr=1.2",
  },
  {
    id: 6,
    name: "Tunics",
    img: "https://img.drz.lazcdn.com/static/bd/p/cedc6ec1f1d7eb73bc87077485263eb4.jpg_720x720q80.jpg",
  },
  {
    id: 8,
    name: "Shorts ",
    img: "https://i5.walmartimages.com/seo/George-Men-s-and-Big-Men-s-100-Cotton-5-Pocket-Jean-Shorts_6c94a20e-72e5-468c-86a4-6ced209f77ae_1.183b00009fcebfd542f4395d6b5aa8f5.jpeg",
  },
  {
    id: 9,
    name: "Cardigans",
    img: "https://m.media-amazon.com/images/I/81s96xZmp4L._AC_SY550_.jpg",
  },
];
const HomePage = () => {
  return (
    <>
      <Header />
      <div className="handmade_store">
        <Container>
          <div className="handmade_wrapper">
            {/* BANNER SLIDER SECTIONS */}
            <section className="handmade_banner_slider">
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
                      Your Requirements
                    </H3>
                  </CarouselItem>
                  <CarouselItem
                    style={{ background: "var(--info)", borderRadius: 10 }}
                  >
                    <H3 style={{ color: "white", textTransform: "capitalize" }}>
                      Our labor
                    </H3>
                  </CarouselItem>
                  <CarouselItem
                    style={{ background: "var(--warning)", borderRadius: 10 }}
                  >
                    <H3 style={{ color: "white", textTransform: "capitalize" }}>
                      for Bangoli Girl
                    </H3>
                  </CarouselItem>
                  <CarouselItem
                    style={{ background: "var(--success)", borderRadius: 10 }}
                  >
                    <H3 style={{ color: "white", textTransform: "capitalize" }}>
                      design your own With our Hand
                    </H3>
                  </CarouselItem>
                </NueCarousel>
                {/* <div className="ondemand_slider_desc">
                  <p>design your own alinone print on demand</p>
                </div> */}
              </Card>
            </section>
            {/* HANDMADE CATEGORY SECTION */}
            <section className="handmade_category">
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
              <div className="handmade_category_grid">
                {category.map((items) => (
                  <Card inset={true} className="handmade_category_grid_item">
                    <LazyLoadImage src={items.img} />
                    <p>{items.name}</p>
                  </Card>
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
