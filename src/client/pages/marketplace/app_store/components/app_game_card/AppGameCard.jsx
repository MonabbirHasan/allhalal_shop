import React from "react";
import "./app_game_card.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Star } from "@mui/icons-material";
const AppGameCard = () => {
  return (
    <div className="app_game_card">
      <div className="app_game_card_img_box">
        <LazyLoadImage
          className="app_game_card_img"
          src="/img/reels.png"
        />
        <div className="app_game_card_bottom">
          <p>
            3.4 <Star />
          </p>
          <p>Free</p>
        </div>
        <p className="app_game_card_name">Reblox</p>
      </div>
    </div>
  );
};

export default AppGameCard;
