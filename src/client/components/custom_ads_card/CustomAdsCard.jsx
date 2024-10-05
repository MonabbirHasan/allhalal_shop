import React from "react";
import "./custom_ads_card.css";
import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardHeader,
  IconButton,
} from "ui-neumorphism";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Lock } from "@mui/icons-material";
import { Stack } from "@mui/material";
const CustomAdsCard = () => {
  return (
    <div className="custom_ads_card">
      <Card bordered={true} rounded={true} style={{ display: "inline-block" }}>
        <CardHeader>
          <Stack pt={1} direction={"row"} justifyContent="space-between">
            <IconButton size="small" active={true} rounded={true}>
              <Lock htmlColor="gray" fontSize="small" />
            </IconButton>
            <Button size="small" rounded={true} depressed={true} active={true}>
              <img
                width="22"
                height="22"
                src="https://img.icons8.com/fluency/48/stack-of-coins.png"
                alt="stack-of-coins"
              />
              <span style={{ marginLeft: 5 }}>40</span>
            </Button>
          </Stack>
        </CardHeader>
        <CardContent>
          <LazyLoadImage
            className="custom_ads_thumbnail"
            src="https://images-cdn.ubuy.co.in/642aa45523af200eea0b32f7-men-039-s-watches-waterproof-luminous.jpg"
          />
          <h3 className="custom_ads_title">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h3>
        </CardContent>
        <CardAction>
          <Button
            size="small"
            rounded={true}
            className="custom_ads_btn"
            depressed={true}
          >
            visit now
          </Button>
        </CardAction>
      </Card>
    </div>
  );
};

export default CustomAdsCard;
