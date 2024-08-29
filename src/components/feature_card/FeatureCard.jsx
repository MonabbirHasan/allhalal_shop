import React from "react";
import "./feature_card.css";
import { Button, SpeedDial, SpeedDialAction, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpward,
  FormatLineSpacingOutlined,
  PieChartOutlineSharp,
  StackedLineChartSharp,
  SystemUpdate,
  Traffic,
  Upcoming,
} from "@mui/icons-material";
const FeatureCard = (props) => {
  const navigation = useNavigate();
  return (
    <div className="feature_card">
      <div
        className="feature_card_item"
        style={{ width: props.card_width, height: props.card_height }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <h3>{props.card_title}</h3>
          <small>{props.card_date}</small>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          alignContent={"center"}
          margin={"auto"}
          justifyContent={"space-between"}
          pt={1}
        >
          <span>
            <StackedLineChartSharp
              fontSize={props.chart_size}
              htmlColor={props.chart_color}
            />
            <StackedLineChartSharp
              fontSize={props.chart_size}
              htmlColor={props.chart_color}
            />
          </span>
          <h1 className="feature_card_number">{props.card_number}</h1>
        </Stack>
        {props.has_button == true &&
          props.buttons.map((btn) => {
            return (
              <Button
                onClick={() => navigation(btn.btn_to)}
                sx={{
                  backgroundColor: btn.btn_bgcolor,
                  color: btn.btn_textcolor,
                  "&:hover": {
                    backgroundColor: btn.btn_bgcolor,
                    color: btn.btn_textcolor,
                  },
                }}
                size={btn.btn_size}
                variant={btn.btn_variant}
              >
                {btn.btn_title}
              </Button>
            );
          })}
      </div>
    </div>
  );
};

export default FeatureCard;
