import {
  AppBar,
  Avatar,
  Box,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AddBox,
  Analytics,
  ArrowDropDown,
  CloseSharp,
  CommentSharp,
  DashboardSharp,
  FilterFrames,
  Home,
  Logout,
  MonetizationOn,
  Payment,
  Person,
  PostAddSharp,
  Settings,
  Store,
  Subscriptions,
  VisibilitySharp,
} from "@mui/icons-material";
import { VendorDashboard } from "../../index";
import { vendro_shopes } from "../../../../utils/static/vendro_shopes";
import { AuthContext } from "../../../../context/AuthContext";

const VendorDashboardSidebar = () => {
  const navigate = useNavigate();
  const { isAuthenticate, logout } = useContext(AuthContext);
  const [OpenMarket, setOpenMarket] = useState(false);
  const [OpenBlogs, setOpenBlogs] = useState(false);
  const [StatePage, setStatePage] = useState("vendor_dashboard");
  const [OpenVendorDrawer, setOpenVendorDrawer] = useState(false);
  //SAVE PAGE STATE TO LOCAL STORAGE
  const SaveState = (pages) => {
    localStorage.setItem("all_halal_vendor_page", JSON.stringify(pages));
    HandleOpenDrawer();
  };
  useEffect(() => {
    setStatePage(JSON.parse(localStorage.getItem("all_halal_vendor_page")));
    if (!isAuthenticate) {
      navigate("/signin");
    }
  }, [StatePage, isAuthenticate]);
  //HANDLE OPEN DRAWER FUNCTION
  const HandleOpenDrawer = () => {
    OpenVendorDrawer == false
      ? setOpenVendorDrawer(true)
      : setOpenVendorDrawer(false);
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#232" }}>
          <IconButton
            onClick={HandleOpenDrawer}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <DashboardSharp />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            vendor dashboard
          </Typography>
          <Box>
            <IconButton
              onClick={() => {
                alert("welcome vendor dashboard");
              }}
            >
              <Avatar
                sx={{
                  textTransform: "uppercase",
                  border: "2px dashed white",
                  background: "#232",
                }}
              >
                VD
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* SIDEBAR DRAWER */}
      <Drawer
        variant="temporary"
        open={OpenVendorDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 290,
            padding: 1,
          },
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton onClick={() => navigate("/")}>
            <Home htmlColor="#232" />
          </IconButton>
          <IconButton onClick={HandleOpenDrawer} color="error">
            <CloseSharp />
          </IconButton>
        </div>
        <List>
          <ListItem disableGutters>
            <Box style={{ padding: 20, background: "#232", borderRadius: 5 }}>
              <p style={{ color: "white" }}>welcome to sidebar banner ads</p>
            </Box>
          </ListItem>
          {/* USERS DASHBOARD SIDEBAR MENU START HERE */}
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("vendor_dashboard");
                SaveState("vendor_dashboard");
              }}
            >
              <Typography mr={1}>
                <DashboardSharp />
              </Typography>
              <Typography>Dashboard</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("vendor_store");
                SaveState("vendor_store");
              }}
            >
              <Typography mr={1}>
                <Person />
              </Typography>
              <Typography>My Profile</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("vendor_store");
                SaveState("vendor_store");
              }}
            >
              <Typography mr={1}>
                <Store />
              </Typography>
              <Typography>My Store</Typography>
            </ListItemButton>
          </ListItem>
          {/* BLOGS MENU START HERE */}
          <ListItem disableGutters>
            <ListItemButton
              onClick={() =>
                OpenBlogs == false ? setOpenBlogs(true) : setOpenBlogs(false)
              }
            >
              <Typography mr={1}>
                <FilterFrames htmlColor="#232" />
              </Typography>
              <Typography>My Blogs</Typography>
              <ArrowDropDown />
            </ListItemButton>
          </ListItem>
          <Collapse in={OpenBlogs}>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setStatePage("user_blogs");
                  SaveState("user_blogs");
                }}
              >
                <Typography mr={1}>
                  <PostAddSharp htmlColor="#232" />
                </Typography>
                <Typography>Posts</Typography>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setStatePage("user_blogs_view");
                  SaveState("user_blogs_view");
                }}
              >
                <Typography mr={1}>
                  <VisibilitySharp htmlColor="#232" />
                </Typography>
                <Typography>Views</Typography>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setStatePage("user_blogs_comment");
                  SaveState("user_blogs_comment");
                }}
              >
                <Typography mr={1}>
                  <CommentSharp htmlColor="#232" />
                </Typography>
                <Typography>Comments</Typography>
              </ListItemButton>
            </ListItem>
          </Collapse>
          {/* BLOGS MENU END HERE */}
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("vendor_analytics");
                SaveState("vendor_analytics");
              }}
            >
              <Typography mr={1}>
                <Analytics />
              </Typography>
              <Typography>Analytics</Typography>
            </ListItemButton>
          </ListItem>
          {/* MARKETPLACE START HERE */}
          <ListItem disableGutters>
            <ListItemButton
              onClick={() =>
                OpenMarket == false ? setOpenMarket(true) : setOpenMarket(false)
              }
            >
              <Typography mr={1}>
                <AddBox />
              </Typography>
              <Typography>My Product</Typography>
              <ArrowDropDown />
            </ListItemButton>
          </ListItem>
          <Collapse in={OpenMarket}>
            {vendro_shopes.map((menus) => (
              <ListItem>
                <ListItemButton onClick={menus.onClick}>
                  <Typography mr={1}>{menus.left_icon}</Typography>
                  <Typography textTransform={"capitalize"}>
                    {menus.name}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </Collapse>
          {/* MARKETPLACE END HERE */}
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("vendor_financial");
                SaveState("vendor_financial");
              }}
            >
              <Typography mr={1}>
                <MonetizationOn />
              </Typography>
              <Typography>Financial</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("vendor_pay_method");
                SaveState("vendor_pay_method");
              }}
            >
              <Typography mr={1}>
                <Payment />
              </Typography>
              <Typography>Payment Method</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("vendor_subscription");
                SaveState("vendor_subscription");
              }}
            >
              <Typography mr={1}>
                <Subscriptions />
              </Typography>
              <Typography>Subscription</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("vendor_settings");
                SaveState("vendor_settings");
              }}
            >
              <Typography mr={1}>
                <Settings />
              </Typography>
              <Typography>Settings</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={logout}
              sx={{
                border: "1px solid #232",
                color: "#232",
                borderRadius: 2,
                transition: "1s",
                "&:hover": {
                  backgroundColor: "#232",
                  color: "white",
                },
              }}
            >
              <Typography mr={1}>
                <Logout />
              </Typography>
              <Typography>Logout</Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      {/* RANDER ALL DASHBOARD PAGE HERE */}
      {StatePage === "vendor_dashboard" ? (
        <VendorDashboard />
      ) : (
        "page not found"
      )}
    </div>
  );
};

export default VendorDashboardSidebar;
