import React, { useState, useRef } from "react";
import "./reward_ads_card.css";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
} from "ui-neumorphism";
import { Stack } from "@mui/material";
import { Lock } from "@mui/icons-material";

const RewardAdsCard = () => {
  const [reward, setReward] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    // Reward user with 10 points after watching the video
    setReward((prevReward) => prevReward + 10);
  };

  return (
    <Card className="reward_ads_card" style={{ display: "inline-block" }}>
      <CardHeader>
        <Stack direction={"row"} justifyContent="space-between">
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
        <video
          ref={videoRef}
          style={{ width: "100%", height: "auto" }}
          controls
          //   width="320"
          //   height="240"
          preload="metadata"
          loading="lazy"
          onEnded={handleVideoEnd}
          poster=""
        >
          <source src="/video/video_ads.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </CardContent>
      {/* <p>Your Reward Points: {reward}</p> */}
    </Card>
  );
};

export default RewardAdsCard;
