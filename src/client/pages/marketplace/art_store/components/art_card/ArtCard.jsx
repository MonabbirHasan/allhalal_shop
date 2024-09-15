import React from "react";
import "./art_card.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button, Card, IconButton } from "ui-neumorphism";
import { FavoriteBorder, ShoppingBag } from "@mui/icons-material";
const ArtCard = () => {
  return (
    <Card className="art_card">
      <div className="art_card_thumbnail">
        <LazyLoadImage
          className="art_card_thumbnail_img"
          src="https://www.roseandgrey.co.uk/cdn/shop/products/orange_retro_swirls_mug.jpg?v=1702098300&width=400"
        />
        <div className="art_card_action">
          <IconButton bgColor="#f1f1f1" rounded={true} active={false}>
            <ShoppingBag htmlColor="black" />
          </IconButton>
          <IconButton bgColor="#f1f1f1" rounded={true} active={false}>
            <FavoriteBorder htmlColor="tomato" />
          </IconButton>
        </div>
        <div className="art_card_price">
          <p>
            $323{" "}
            <span style={{ fontSize: "10px" }}>
              <del>$22</del>
            </span>
          </p>
          <sup>20%</sup>
        </div>
      </div>
      <div className="art_card_text_box">
        <h4 className="art_card_title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          quibusdam corporis vitae!
        </h4>
      </div>
      <Button
        style={{ float: "right", margin: 10, textTransform: "capitalize" }}
        color="black"
        rounded={true}
        depressed={true}
      >
        Buy Now
      </Button>
    </Card>
  );
};

export default ArtCard;
