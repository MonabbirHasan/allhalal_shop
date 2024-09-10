import React from "react";
import "./paid_app_card.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Star } from "@mui/icons-material";
import { Button, Card } from "ui-neumorphism";
const PaidAppCard = () => {
  return (
    <Card className="paid_app_card global_card_border">
      <div className="paid_app_card_img_box">
        <LazyLoadImage
          className="paid_app_card_img"
          src="https://cdn6.aptoide.com/imgs/2/1/0/21064b590abc70f0e2c557f6fe88225e_icon.jpg"
        />
      </div>
      <div className="paid_app_card_name">net test speed</div>
      <div className="paid_app_card_footer">
        <div className="ratings">
          <span>4.5</span>
          <span>
            <Star />
          </span>
        </div>
        <div className="price">
          <span>$32</span>
        </div>
      </div>
    </Card>
  );
};

export default PaidAppCard;
