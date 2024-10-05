import {
  AppBar,
  Avatar,
  Box,
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
  AnalyticsSharp,
  Campaign,
  CloseSharp,
  DashboardSharp,
  Home,
  Logout,
  MonetizationOn,
  Person,
  Person2,
  Person3,
  Person4,
  PersonRemove,
  Settings,
  Subscriptions,
} from "@mui/icons-material";
import { AdvertisorDashboard } from "../../index";
import { AuthContext } from "../../../../context/AuthContext";
const AdvertisorDashboardSidebar = () => {
  const navigate = useNavigate();
  const { isAuthenticate, logout, AuthUser } = useContext(AuthContext);
  const [StatePage, setStatePage] = useState("advertisor_dashboard");
  const [OpenAdvertisorDrawer, setOpenAdvertisorDrawer] = useState(false);
  //SAVE PAGE STATE TO LOCAL STORAGE
  const SaveState = (pages) => {
    localStorage.setItem("all_halal_advertisor_page", JSON.stringify(pages));
    HandleOpenDrawer();
  };
  useEffect(() => {
    setStatePage(JSON.parse(localStorage.getItem("all_halal_advertisor_page")));
    if (!isAuthenticate) {
      navigate("/signin");
    }
    const user_data = AuthUser.data.user.role;
    switch (user_data) {
      case "user":
        navigate("/my_dashboard");
        break;
      case "vendor":
        navigate("/vendor_dashboard");
        break;
      case "advertiser":
        navigate("/advertisor_dashboard");
        break;
      case "admin":
        navigate("/admin_dashbaord");
        break;
      default:
        break;
    }
  }, [StatePage, isAuthenticate]);
  //HANDLE OPEN DRAWER FUNCTION
  const HandleOpenDrawer = () => {
    OpenAdvertisorDrawer == false
      ? setOpenAdvertisorDrawer(true)
      : setOpenAdvertisorDrawer(false);
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
            Advertisor Dashboard
          </Typography>
          <Box>
            <IconButton>
              <Avatar
                sx={{
                  textTransform: "uppercase",
                  border: "2px dashed white",
                  background: "#232",
                }}
              >
                A
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* SIDEBAR DRAWER */}
      <Drawer
        variant="temporary"
        open={OpenAdvertisorDrawer}
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
                setStatePage("advertisor_dashboard");
                SaveState("advertisor_dashboard");
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
                setStatePage("advertisor_profile");
                SaveState("advertisor_profile");
              }}
            >
              <Typography mr={1}>
                <Person4 />
              </Typography>
              <Typography>Profile</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("advertisor_campaign");
                SaveState("advertisor_campaign");
              }}
            >
              <Typography mr={1}>
                <Campaign />
              </Typography>
              <Typography>Campaigns</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("advertisor_analytics");
                SaveState("advertisor_analytics");
              }}
            >
              <Typography mr={1}>
                <AnalyticsSharp />
              </Typography>
              <Typography>Analytics</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("advertisor_subscription");
                SaveState("advertisor_subscription");
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
                setStatePage("advertisor_financial");
                SaveState("advertisor_financial");
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
                setStatePage("advertisor_settings");
                SaveState("advertisor_settings");
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
      {StatePage === "advertisor_dashboard" ? (
        <AdvertisorDashboard />
      ) : (
        "page not found"
      )}
    </div>
  );
};

export default AdvertisorDashboardSidebar;
