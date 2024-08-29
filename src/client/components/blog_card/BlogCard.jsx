import React, { memo } from "react";
import { Image } from "react-bootstrap";
import { Button, Card, H5, Typography } from "ui-neumorphism";
import ads from "../../../assets/img/ads.jpg";
import halal from "../../../assets/img/halal-label-logo-vector.png";
import { Stack, Avatar, Divider } from "@mui/material";
import "./blog_card.css";
import { AccessTime, Category, LockClock, PunchClock, Timelapse, Timeline, Visibility, Watch } from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";
const BlogCard = memo((props) => {
  const navigate = useNavigate();
  /*********************
   * GENERATE SLUGS
   *********************/
  const slug_generate = (text, route_name, options) => {
    const t = text.replaceAll(" ", "-");
    return navigate("/" + route_name + "/" + t + `?id=${options.post_id}`);
  };
  return (
    <div className="blog_card_item">
      <Card style={{ padding: 10, height: 500 }}>
        <div className="blog_thumb">
          <Image src={props.thumbnail} />
        </div>
        <div className="blog_summary">
          <div className="blog_summary_wrap">
            <Button active={true} rounded={true} size="small">
              <Category htmlColor="gray" fontSize="small" />
              <small>{props.category}</small>
            </Button>

            <Button active={true} rounded={true} size="small">
              <AccessTime htmlColor="gray" fontSize="small" />
              <small>{props.published}</small>
            </Button>

            <Button active={true} rounded={true} size="small">
              <Visibility htmlColor="gray" fontSize="small" />
              <small>{props.views}</small>
            </Button>
          </div>
          <Divider />
        </div>
        <div className="blog_title">
          <h5
            onClick={() => {
              slug_generate(props.title, "news_blog", {
                post_id: props.post_id,
              });
            }}
          >
            {props.title}
          </h5>
        </div>
        <div className="blog_details">
          <p>{props.details}</p>
        </div>
        <div className="blog_author">
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <Card inset={true} rounded={true}>
              <Avatar
                style={{ textTransform: "uppercase", background: "#232" }}
                sizes={30}
              >
                {props?.author_img[0]}
              </Avatar>
            </Card>
            <Typography style={{ textTransform: "capitalize" }}>
              {props?.author_name}
            </Typography>
          </Stack>
        </div>
      </Card>
    </div>
  );
});

export default BlogCard;
