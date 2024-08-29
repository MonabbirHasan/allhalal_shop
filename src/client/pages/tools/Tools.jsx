import React, { lazy, useState } from "react";
import "./tools.css";
import { Container } from "react-bootstrap";
import {
  Typography,
  List,
  ListItem,
  ListItemButton,
  IconButton,
} from "@mui/material";
import { Button, Card } from "ui-neumorphism";
import { AirSharp, Home } from "@mui/icons-material";
const Header = lazy(() => import("../../components/common/header/Header"));
const Footer = lazy(() => import("../../components/common/footer/Footer"));
import {
  ChatGptFragment,
  ChatHistoryFragment,
  DownFragment,
  EditorFragment,
  FalAiFragment,
  GeminiFragment,
  ImageGenFragment,
  NotePadeFragment,
  PaintFragment,
  PayFragment,
  PromptFragment,
  RmbgFragment,
  SettingFragment,
  WelcomeFragment,
} from "./fragment/index";
const Tools = () => {
  const [Fragment, setFragment] = useState("welcome");
  const button_style = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 20,
    textTransform: "capitalize",
  };
  const styles = {
    tools_menu: {
      textTransform: "capitalize",
    },
  };
  return (
    <>
      <Header />
      <div className="ai_tools_page">
        <Container fluid>
          <div className="ai_tools_page_wrapper">
            <div className="ai_tool_menu">
              <div className="ai_tool_menu_head "></div>
              <List>
                {/* WELCOME FRAGMENT */}
                <ListItem disableGutters disablePadding>
                  <IconButton
                    onClick={() => {
                      setFragment("welcome");
                    }}
                  >
                    <Home />
                  </IconButton>
                </ListItem>
                {/* CHAT GPT */}
                <ListItem disableGutters disablePadding>
                  <Button
                    onClick={() => {
                      setFragment("chatgpt");
                    }}
                    depressed={true}
                    style={button_style}
                  >
                    <Typography mr={2}>
                      <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/ios/25/chatgpt.png"
                        alt="chatgpt"
                      />
                    </Typography>
                    <Typography sx={styles.tools_menu}>chatgpt</Typography>
                  </Button>
                </ListItem>
                {/* CHAT HISTORY */}
                <ListItem disableGutters disablePadding>
                  <Button
                    depressed={true}
                    onClick={() => {
                      setFragment("chat_history");
                    }}
                    style={button_style}
                  >
                    <Typography mr={2}>
                      <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/ios/50/activity-history.png"
                        alt="chatgpt"
                      />
                    </Typography>
                    <Typography sx={styles.tools_menu}>chat history</Typography>
                  </Button>
                </ListItem>
                {/*  */}
                <ListItem disableGutters disablePadding>
                  <Button
                    depressed={true}
                    onClick={() => {
                      setFragment("watch_video");
                    }}
                    style={button_style}
                  >
                    <Typography mr={2}>
                      <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/ios/50/youtube--v1.png"
                        alt="chatgpt"
                      />
                    </Typography>
                    <Typography sx={styles.tools_menu}>
                      Download video
                    </Typography>
                  </Button>
                </ListItem>
                {/* IMAGE EDITOR */}
                <ListItem disableGutters disablePadding>
                  <Button
                    depressed={true}
                    onClick={() => {
                      setFragment("photo_editor");
                    }}
                    style={button_style}
                  >
                    <Typography mr={2}>
                      <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/ios/50/photo-editor.png"
                        alt="chatgpt"
                      />
                    </Typography>
                    <Typography sx={styles.tools_menu}>photo editor</Typography>
                  </Button>
                </ListItem>
                {/* fall ai */}
                <ListItem disableGutters disablePadding>
                  <Button
                    depressed={true}
                    onClick={() => {
                      setFragment("fal_ai");
                    }}
                    style={button_style}
                  >
                    <Typography mr={2}>
                      <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/wired/64/artificial-intelligence.png"
                        alt="chatgpt"
                      />
                    </Typography>
                    <Typography sx={styles.tools_menu}>Fal Ai</Typography>
                  </Button>
                </ListItem>
                {/* gemini ai */}
                <ListItem disableGutters disablePadding>
                  <Button
                    depressed={true}
                    onClick={() => {
                      setFragment("gemini");
                    }}
                    style={button_style}
                  >
                    <Typography mr={2}>
                      <img
                        width="25"
                        height="25"
                        src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
                        alt="chatgpt"
                      />
                    </Typography>
                    <Typography sx={styles.tools_menu}>gemini</Typography>
                  </Button>
                </ListItem>
                {/* image generations */}
                <ListItem disableGutters disablePadding>
                  <Button
                    depressed={true}
                    onClick={() => {
                      setFragment("img_generator");
                    }}
                    style={button_style}
                  >
                    <Typography mr={2}>
                      <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/cotton/64/image--v1.png"
                        alt="chatgpt"
                      />
                    </Typography>
                    <Typography sx={styles.tools_menu}>Image Gen</Typography>
                  </Button>
                </ListItem>
                {/* DRAW PAINTS */}
                <ListItem disableGutters disablePadding>
                  <Button
                    depressed={true}
                    onClick={() => {
                      setFragment("draw_paint");
                    }}
                    style={button_style}
                  >
                    <Typography mr={2}>
                      <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/ios/50/paint-palette.png"
                        alt="chatgpt"
                      />
                    </Typography>
                    <Typography sx={styles.tools_menu}>Draw Paint</Typography>
                  </Button>
                </ListItem>
                {/* PROMPT STORE */}
                <ListItem disableGutters disablePadding>
                  <Button
                    depressed={true}
                    onClick={() => {
                      setFragment("prompt_store");
                    }}
                    style={button_style}
                  >
                    <Typography mr={2}>
                      <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/ios/50/command.png"
                        alt="chatgpt"
                      />
                    </Typography>
                    <Typography sx={styles.tools_menu}>Prompts</Typography>
                  </Button>
                </ListItem>
                {/* REMOVE IMAGE BACKGROUND */}
                <ListItem disableGutters disablePadding>
                  <Button
                    depressed={true}
                    onClick={() => {
                      setFragment("bg_remover");
                    }}
                    style={button_style}
                  >
                    <Typography mr={2}>
                      <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/ios/50/cleanup-noise.png"
                        alt="chatgpt"
                      />
                    </Typography>
                    <Typography sx={styles.tools_menu}>bg remover</Typography>
                  </Button>
                </ListItem>
                {/* NOTEPADE MENU */}
                <ListItem disableGutters disablePadding>
                  <Button
                    depressed={true}
                    onClick={() => {
                      setFragment("notepade");
                    }}
                    style={button_style}
                  >
                    <Typography mr={2}>
                      <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/external-notepad-shopping-and-commerce-smashingstocks-glyph-smashing-stocks.png"
                        alt="chatgpt"
                      />
                    </Typography>
                    <Typography sx={styles.tools_menu}>note pade</Typography>
                  </Button>
                </ListItem>
                {/* NOTEPADE MENU */}
                <ListItem disableGutters disablePadding>
                  <Button
                    depressed={true}
                    onClick={() => {
                      setFragment("eden_ai");
                    }}
                    style={button_style}
                  >
                    <Typography mr={2}>
                      <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/fluency-systems-filled/50/624324/bot.png"
                        alt="chatgpt"
                      />
                    </Typography>
                    <Typography sx={styles.tools_menu}>
                      Download eden ai
                    </Typography>
                  </Button>
                </ListItem>
                {/* APPLICATION SETTINGS */}
                <ListItem disableGutters disablePadding>
                  <Button
                    depressed={true}
                    onClick={() => {
                      setFragment("app_settings");
                    }}
                    style={button_style}
                  >
                    <Typography mr={2}>
                      <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/ios/50/settings--v1.png"
                        alt="chatgpt"
                      />
                    </Typography>
                    <Typography sx={styles.tools_menu}>App Setting</Typography>
                  </Button>
                </ListItem>
              </List>
            </div>
            <div className="ai_tool_fragment_board">
              {Fragment == "welcome" ? (
                <WelcomeFragment />
              ) : Fragment == "chatgpt" ? (
                <ChatGptFragment />
              ) : Fragment == "chat_history" ? (
                <ChatHistoryFragment />
              ) : Fragment == "watch_video" ? (
                <DownFragment />
              ) : Fragment == "photo_editor" ? (
                <EditorFragment />
              ) : Fragment == "fal_ai" ? (
                <FalAiFragment />
              ) : Fragment == "gemini" ? (
                <GeminiFragment />
              ) : Fragment == "img_generator" ? (
                <ImageGenFragment />
              ) : Fragment == "draw_paint" ? (
                <PaintFragment />
              ) : Fragment == "prompt_store" ? (
                <PromptFragment />
              ) : Fragment == "bg_remover" ? (
                <RmbgFragment />
              ) : Fragment == "notepade" ? (
                <NotePadeFragment />
              ) : Fragment == "app_settings" ? (
                <SettingFragment />
              ) : (
                ""
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Tools;
