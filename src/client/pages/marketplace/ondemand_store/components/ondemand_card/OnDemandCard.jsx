import React from "react";
import "./ondemand_card.css";
import { Card, IconButton } from "ui-neumorphism";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  DrawOutlined,
  FavoriteBorder,
  ShoppingBagOutlined,
  Visibility,
} from "@mui/icons-material";
const OnDemandCard = () => {
  return (
    <div className="ondemand_card">
      <Card
        style={{
          display: "inline-block",
          width: 250,
          border: "1px solid #fff",
          background: "#E4EBF5",
        }}
      >
        <div className="ondemand_card_thumbnail">
          <div className="badges position-absolute mt-2">
            <small>50% Off</small>
          </div>
          <LazyLoadImage src="https://printspace.harutheme.com/tshirt/wp-content/uploads/sites/6/2023/07/p54.3.jpg" />
          <div className="ondmand_card_action">
            <IconButton size="small" rounded={true}>
              <FavoriteBorder fontSize="small" titleAccess="Add To Favorite" />
            </IconButton>
            <IconButton size="small" rounded={true}>
              <ShoppingBagOutlined fontSize="small" titleAccess="Add To Cart" />
            </IconButton>
            <IconButton size="small" rounded={true}>
              <Visibility fontSize="small" titleAccess="Quick View" />
            </IconButton>
            <IconButton size="small" rounded={true}>
              <DrawOutlined fontSize="small" titleAccess="Customize" />
            </IconButton>
          </div>
        </div>
        <div className="ondemand_card_title">
          <p>All-Over-Print Hoodie</p>
        </div>
        <div className="ondemand_card_price">
          <p>
            $23.00{" "}
            <sub>
              <del> $33.00</del>
            </sub>
          </p>
        </div>
        <div className="ondemand_card_color_palat">
          <p className="color_veriation" style={{ "--i": "#000000" }} />
          <p className="color_veriation" style={{ "--i": "#ff0" }} />
          <p className="color_veriation" style={{ "--i": "#1F3A93" }} />
          <p className="color_veriation" style={{ "--i": "#4B4B4B" }} />
          <p className="color_veriation" style={{ "--i": "#DC143C" }} />
          <p className="color_veriation" style={{ "--i": "#228B22" }} />
          <p className="color_veriation" style={{ "--i": "#6A0DAD" }} />
        </div>
      </Card>
    </div>
  );
};

export default OnDemandCard;
