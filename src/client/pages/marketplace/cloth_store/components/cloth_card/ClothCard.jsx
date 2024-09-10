import React from "react";
import "./cloth_card.css";
import { Rating, Stack } from "@mui/material";
import { Button, IconButton, Card } from "ui-neumorphism";
import {
  Favorite,
  FavoriteBorderOutlined,
  ShoppingBag,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import ProductRating from "../product_ratings/ProductRating";
const ClothCard = ({
  thumbnail,
  title,
  price,
  discount,
  rating,
  rating_count,
  isloved,
  iscart,
}) => {
  const navigation = useNavigate();
  const route_controller = (e) => {
    alert("card clicked", e);
  };
  return (
    <Card className="cloth_card" outlined={true} bordered={true}>
      <div onClick={() => route_controller()}>
        {/* CARD BODY */}
        <div className="cloth_card_body">
          {/* CARD THUMBNAIL */}
          <div className="cloth_card_thumbnail">
            <LazyLoadImage className="card_thumbnail" src={thumbnail} />
            {/* CARD PRICE BOX */}
            <div className="price_box">
              <span>${price}</span>
              <sub>-{discount}%</sub>
            </div>
            {/* CARD RATING BOX */}
            <div className="rating_box">
              <ProductRating rating={rating} count={rating_count} />
            </div>
          </div>
          {/* CARD TITLE */}
          <div className="cloth_card_title">
            <h4>{title}</h4>
          </div>
        </div>
        {/* CARD FOOTER ACTION */}
        <div className="cloth_card_footer">
          <Stack
            direction={"row"}
            spacing={1}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Card style={{ borderRadius: 30 }}>
              <IconButton size="medium" active={iscart} rounded={true}>
                {iscart == true ? (
                  <ShoppingBag htmlColor="black" />
                ) : (
                  <ShoppingBagOutlined htmlColor="black" />
                )}
              </IconButton>
            </Card>
            <Card style={{ borderRadius: 30 }}>
              <IconButton size="medium" active={isloved} rounded={true}>
                {isloved == true ? (
                  <Favorite htmlColor="orangered" />
                ) : (
                  <FavoriteBorderOutlined htmlColor="orangered" />
                )}
              </IconButton>
            </Card>
            <Button
              depressed={true}
              color="black"
              style={{ borderTopLeftRadius: 30, width: 125 }}
            >
              By Now
            </Button>
          </Stack>
        </div>
        {/* CARD END */}
      </div>
    </Card>
  );
};

export default ClothCard;
