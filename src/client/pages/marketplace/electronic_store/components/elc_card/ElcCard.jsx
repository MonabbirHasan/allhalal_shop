import React from "react";
import "./elc_card.css";
import { Button, Card, Divider, IconButton } from "ui-neumorphism";
import {
  CheckCircleRounded,
  Favorite,
  FavoriteBorder,
  LineWeight,
  Maximize,
  ProductionQuantityLimits,
  ShoppingBag,
  ShoppingBagOutlined,
  Star,
  StarBorder,
  Visibility,
} from "@mui/icons-material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Stack } from "@mui/material";
const ElcCard = () => {
  return (
    <Card className="elc_card">
      <div className="elc_card_thumbnail">
        <div className="elc_card_price_badge">
          <p>
            $100{" "}
            <sub>
              <del>$400</del>
            </sub>
          </p>
        </div>
        <LazyLoadImage
          className="card_thumbnail"
          src="https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg"
        />
      </div>
      <div className="elc_card_title">
        <h3>✨✨Lorem ipsum dolor sit amet consectetur🎁🎁</h3>
      </div>
      <div className="elc_card_details">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          veritatis, numquam voluptatem provident facere officiis qui maxime
          eligendi recusandae impedit!
        </p>
      </div>
      <Divider />
      <div className="elc_card_action">
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <IconButton rounded={true}>
            <FavoriteBorder htmlColor="orangered" />
          </IconButton>
          <IconButton rounded={true}>
            <ShoppingBagOutlined />
          </IconButton>
          <IconButton rounded={true}>
            <Visibility />
          </IconButton>
        </Stack>
        <Button
          style={{
            width: "100%",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            textAlign: "center",
            textTransform: "capitalize",
          }}
          depressed={true}
        >
          Buy Now
        </Button>
      </div>
    </Card>
  );
};

export default ElcCard;
