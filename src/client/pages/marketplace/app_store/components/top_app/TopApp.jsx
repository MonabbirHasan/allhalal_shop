import React from "react";
import "./top_app.css";
import { Box, Stack } from "@mui/material";
import { Download, Star } from "@mui/icons-material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button, Card } from "ui-neumorphism";
const TopApp = () => {
  return (
    <Card className="top_app_card global_card_border">
      <Stack spacing={1} direction={"row"} alignItems="center">
        <LazyLoadImage
          className="top_app_card_img"
          src="https://play-lh.googleusercontent.com/ZU9cSsyIJZo6Oy7HTHiEPwZg0m2Crep-d5ZrfajqtsH-qgUXSqKpNA2FpPDTn-7qA5Q=s64-rw"
        />
        <Box>
          <p className="top_app_card_name">Telegram</p>
          <p className="top_app_card_category">communication</p>
          <p className="top_app_card_ratings">
            3.5 <Star />
          </p>
        </Box>
      </Stack>
      <Box>

        <Button className="app_download_btn" depressed={true}>
          <Download />
        </Button>
      </Box>
    </Card>
  );
};

export default TopApp;
