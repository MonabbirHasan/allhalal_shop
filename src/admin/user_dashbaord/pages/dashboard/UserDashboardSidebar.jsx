import {
  AppBar,
  Avatar,
  Box,
  Collapse,
  Divider,
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
  ArrowDropDown,
  BackHand,
  CloseSharp,
  CommentSharp,
  DashboardSharp,
  FavoriteRounded,
  FilterFrames,
  Home,
  JoinFull,
  LocalShipping,
  LocationOn,
  Logout,
  MonetizationOn,
  Person,
  PostAddSharp,
  Settings,
  ShoppingBag,
  StoreOutlined,
  VisibilitySharp,
} from "@mui/icons-material";
import { UserDashboard, UserBlogs, BlogViews, BlogComment } from "../../index";
import { user_shopes } from "../../../../utils/static/user_shopes";
import { LazyLoadImage } from "react-lazy-load-image-component";
import sidebar_ads from "../../../../assets/img/ads.jpg";
import { AuthContext } from "../../../../context/AuthContext";
const UserDashboardSidebar = () => {
  const { login, isAuthenticate, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [OpenMarket, setOpenMarket] = useState(false);
  const [OpenBlogs, setOpenBlogs] = useState(false);
  const [StatePage, setStatePage] = useState("user_dashboard");
  const [OpenUserDrawer, setOpenUserDrawer] = useState(false);
  //SAVE PAGE STATE TO LOCAL STORAGE
  const SaveState = (pages) => {
    localStorage.setItem("all_halal_user_page", JSON.stringify(pages));
    HandleOpenDrawer();
  };
  useEffect(() => {
    setStatePage(JSON.parse(localStorage.getItem("all_halal_user_page")));
    if (!isAuthenticate) {
      navigate("/signin");
    }
  }, [StatePage, isAuthenticate]);

  //////////////////////////////////
  // HANDLE OPEN DRAWER FUNCTION
  //////////////////////////////////
  const HandleOpenDrawer = () => {
    OpenUserDrawer == false
      ? setOpenUserDrawer(true)
      : setOpenUserDrawer(false);
  };
  //////////////////////////////////
  // MARKETPLACE MENU EVENT CONTROL
  /////////////////////////////////
  useEffect(() => {
    // shopes[0].onClick = () => {
    //   // alert(shopes[0].name);
    //   navigate(shopes[0].path);
    // };
    // shopes[1].onClick = () => {
    //   // alert(shopes[1].name);
    //   navigate(shopes[1].path);
    // };
    // shopes[2].onClick = () => {
    //   // alert(shopes[2].name);
    //   navigate(shopes[2].path);
    // };
    // shopes[3].onClick = () => {
    //   // alert(shopes[3].name);
    //   navigate(shopes[3].path);
    // };
    // shopes[4].onClick = () => {
    //   // alert(shopes[4].name);
    //   navigate(shopes[4].path);
    // };
    // shopes[5].onClick = () => {
    //   // alert(shopes[5].name);
    //   navigate(shopes[5].path);
    // };
    // shopes[6].onClick = () => {
    //   // alert(shopes[6].name);
    //   navigate(shopes[6].path);
    // };
    // shopes[7].onClick = () => {
    //   // alert(shopes[7].name);
    //   navigate(shopes[7].path);
    // };
    // shopes[8].onClick = () => {
    //   // alert(shopes[8].name);
    //   navigate(shopes[8].path);
    // };
    // shopes[9].onClick = () => {
    //   // alert(shopes[9].name);
    //   navigate(shopes[9].path);
    // };
    // shopes[10].onClick = () => {
    //   // alert(shopes[10].name);
    //   navigate(shopes[10].path);
    // };
    // shopes[11].onClick = () => {
    //   // alert(shopes[11].name);
    //   navigate(shopes[11].path);
    // };
    // shopes[12].onClick = () => {
    //   // alert(shopes[12].name);
    //   navigate(shopes[12].path);
    // };
    // shopes[13].onClick = () => {
    //   // alert(shopes[13].name);
    //   navigate(shopes[13].path);
    // };
    // shopes[14].onClick = () => {
    //   // alert(shopes[14].name);
    //   navigate(shopes[14].path);
    // };
    // shopes[15].onClick = () => {
    //   // alert(shopes[15].name);
    //   navigate(shopes[15].path);
    // };
    // shopes[16].onClick = () => {
    //   // alert(shopes[16].name);
    //   navigate(shopes[16].path);
    // };
    // shopes[17].onClick = () => {
    //   // alert(shopes[17].name);
    //   navigate(shopes[17].path);
    // };
    // shopes[18].onClick = () => {
    //   // alert(shopes[18].name);
    //   navigate(shopes[18].path);
    // };
  }, []);
  //MENU STYLE
  const styles = {
    menu_style: {
      fontSize: 14,
    },
    fontSize: "medium",
  };
  return (
    <div className="user_dashboard_sidebar">
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textTransform: "capitalize" }}
          >
            my dashboard
          </Typography>
          <Box>
            <IconButton
              onClick={() => {
                alert("welcome user dashboard");
              }}
            >
              <Avatar
                sx={{
                  textTransform: "uppercase",
                  border: "2px dashed white",
                  background: "#232",
                }}
              >
                U
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* SIDEBAR DRAWER */}
      <Drawer
        variant="temporary"
        open={OpenUserDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 290,
            padding: 1,
            scrollbarWidth: 0,
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
          {/* USERS DASHBOARD SIDEBAR ADS START HERE */}
          <section className="sidebar_ads">
            <LazyLoadImage
              style={{ width: "100%", height: "150px", borderRadius: "10px" }}
              src={sidebar_ads}
            />
            <marquee behavior="smoth" direction="rtl">
              (Welcome) Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aperiam voluptates quo reiciendis saepe eius necessitatibus nobis
              dolore neque quis nulla quisquam, iure repudiandae soluta deserunt
              quas, suscipit accusantium recusandae tempora perferendis iusto
              officiis ipsa? Iusto nam necessitatibus esse assumenda odit, illo
              illum quasi, impedit optio inventore itaque voluptate labore
              culpa?
            </marquee>
          </section>
          {/* USERS DASHBOARD SIDEBAR MENU START HERE */}
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("user_dashboard");
                SaveState("user_dashboard");
              }}
            >
              <Typography mr={1}>
                <DashboardSharp fontSize={styles.fontSize} htmlColor="#232" />
              </Typography>
              <Typography style={styles.menu_style}>Dashboard</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("my_profile");
                SaveState("my_profile");
              }}
            >
              <Typography mr={1}>
                <Person fontSize={styles.fontSize} htmlColor="#232" />
              </Typography>
              <Typography style={styles.menu_style}>My Profile</Typography>
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
                <StoreOutlined fontSize={styles.fontSize} htmlColor="#232" />
              </Typography>
              <Typography style={styles.menu_style}>Marketplace</Typography>
              <ArrowDropDown />
            </ListItemButton>
          </ListItem>
          <Collapse in={OpenMarket}>
            {user_shopes.map((menus) => (
              <ListItem>
                <ListItemButton onClick={menus.onClick}>
                  <Typography mr={1}>{menus.left_icon}</Typography>
                  <Typography
                    style={styles.menu_style}
                    textTransform={"capitalize"}
                  >
                    {menus.name}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </Collapse>
          {/* MARKETPLACE END HERE */}
          {/* BLOGS MENU START HERE */}
          <ListItem disableGutters>
            <ListItemButton
              onClick={() =>
                OpenBlogs == false ? setOpenBlogs(true) : setOpenBlogs(false)
              }
            >
              <Typography mr={1}>
                <FilterFrames fontSize={styles.fontSize} htmlColor="#232" />
              </Typography>
              <Typography style={styles.menu_style}>My Blogs</Typography>
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
                  <PostAddSharp fontSize={styles.fontSize} htmlColor="#232" />
                </Typography>
                <Typography style={styles.menu_style}>Posts</Typography>
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
                  <VisibilitySharp
                    fontSize={styles.fontSize}
                    htmlColor="#232"
                  />
                </Typography>
                <Typography style={styles.menu_style}>Views</Typography>
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
                  <CommentSharp fontSize={styles.fontSize} htmlColor="#232" />
                </Typography>
                <Typography style={styles.menu_style}>Comments</Typography>
              </ListItemButton>
            </ListItem>
          </Collapse>
          {/* BLOGS MENU END HERE */}
          <Divider>Main Menu</Divider>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("my_orders");
                SaveState("my_orders");
              }}
            >
              <Typography mr={1}>
                <LocalShipping fontSize={styles.fontSize} htmlColor="#232" />
              </Typography>
              <Typography style={styles.menu_style}>My Orders</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("my_returns");
                SaveState("my_returns");
              }}
            >
              <Typography mr={1}>
                <BackHand fontSize={styles.fontSize} htmlColor="#232" />
              </Typography>
              <Typography style={styles.menu_style}>My Returns</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("my_cart");
                SaveState("my_cart");
              }}
            >
              <Typography mr={1}>
                <ShoppingBag fontSize={styles.fontSize} htmlColor="#232" />
              </Typography>
              <Typography style={styles.menu_style}>My Carts</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("my_favorite");
                SaveState("my_favorite");
              }}
            >
              <Typography mr={1}>
                <FavoriteRounded fontSize={styles.fontSize} htmlColor="#232" />
              </Typography>
              <Typography style={styles.menu_style}>My Favorite</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("my_address");
                SaveState("my_address");
              }}
            >
              <Typography mr={1}>
                <LocationOn fontSize={styles.fontSize} htmlColor="#232" />
              </Typography>
              <Typography style={styles.menu_style}>
                Delivary Address
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("my_financial");
                SaveState("my_financial");
              }}
            >
              <Typography mr={1}>
                <MonetizationOn fontSize={styles.fontSize} htmlColor="#232" />
              </Typography>
              <Typography style={styles.menu_style}>My Financial</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("my_refferal");
                SaveState("my_refferal");
              }}
            >
              <Typography mr={1}>
                <JoinFull fontSize={styles.fontSize} htmlColor="#232" />
              </Typography>
              <Typography style={styles.menu_style}>Reffer Earning</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("my_setting");
                SaveState("my_setting");
              }}
            >
              <Typography mr={1}>
                <Settings fontSize={styles.fontSize} htmlColor="#232" />
              </Typography>
              <Typography style={styles.menu_style}>My Setting</Typography>
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
                <Logout fontSize={styles.fontSize} />
              </Typography>
              <Typography style={styles.menu_style}>Logout</Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      {/* RANDER ALL DASHBOARD PAGE HERE */}
      {StatePage === "user_dashboard" ? (
        <UserDashboard />
      ) : StatePage === "user_blogs" ? (
        <UserBlogs />
      ) : StatePage === "user_blogs_view" ? (
        <BlogViews />
      ) : StatePage === "user_blogs_comment" ? (
        <BlogComment />
      ) : (
        "page not found"
      )}
    </div>
  );
};

export default UserDashboardSidebar;
