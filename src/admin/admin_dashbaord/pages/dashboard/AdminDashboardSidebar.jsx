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
  Category,
  CloseSharp,
  CommentSharp,
  DashboardSharp,
  Diversity1Rounded,
  Diversity2,
  Diversity3Sharp,
  FilterFrames,
  Home,
  Logout,
  Payment,
  PostAddSharp,
  RssFeed,
  Security,
  Settings,
  VisibilitySharp,
} from "@mui/icons-material";
import {
  AdminDashboard,
  BlogManagement,
  BlogCategoryManagement,
  BlogCommentManagement,
  BlogViewsManagement,
} from "../../index";
import { shopes } from "../../../../utils/static/shopes";
import { AuthContext } from "../../../../context/AuthContext";
const AdminDashboardSidebar = () => {
  const navigate = useNavigate();
  const { isAuthenticate, logout } = useContext(AuthContext);
  const [OpenBlogs, setOpenBlogs] = useState(false);
  const [StatePage, setStatePage] = useState("admin_dashboard");
  const [OpenAdminDrawer, setOpenAdminDrawer] = useState(false);
  //SAVE PAGE STATE TO LOCAL STORAGE
  const SaveState = (pages) => {
    localStorage.setItem("all_halal_admin_page", JSON.stringify(pages));
    HandleOpenDrawer();
  };
  useEffect(() => {
    setStatePage(JSON.parse(localStorage.getItem("all_halal_admin_page")));
    if (!isAuthenticate) {
      navigate("/signin");
    }
  }, [StatePage, isAuthenticate]);
  //HANDLE OPEN DRAWER FUNCTION
  const HandleOpenDrawer = () => {
    OpenAdminDrawer == false
      ? setOpenAdminDrawer(true)
      : setOpenAdminDrawer(false);
  };
  //MENU STYLE
  const styles = {
    menu_style: {
      fontSize: 13,
    },
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
            Admin dashboard
          </Typography>
          <Box>
            <IconButton
              onClick={() => {
                alert("welcome admin dashboard");
              }}
            >
              <Avatar
                sx={{
                  textTransform: "uppercase",
                  border: "2px dashed white",
                  background: "#232",
                }}
              >
                AD
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* SIDEBAR DRAWER */}
      <Drawer
        variant="temporary"
        open={OpenAdminDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 330,
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
          <Box
            style={{
              padding: 20,
              background: "#232",
              borderRadius: 5,
              marginTop: 4,
            }}
          >
            <p style={{ color: "white" }}>welcome to sidebar banner ads</p>
          </Box>
          {/* USERS DASHBOARD SIDEBAR MENU START HERE */}
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => {
                setStatePage("admin_dashboard");
                SaveState("admin_dashboard");
              }}
            >
              <Typography mr={1}>
                <DashboardSharp fontSize="small" />
              </Typography>
              <Typography style={styles.menu_style}>Dashboard</Typography>
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
                <FilterFrames fontSize="small" htmlColor="#232" />
              </Typography>
              <Typography style={styles.menu_style}>Blog Management</Typography>
              <ArrowDropDown />
            </ListItemButton>
          </ListItem>
          <Collapse in={OpenBlogs}>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setStatePage("blog_management");
                  SaveState("blog_management");
                }}
              >
                <Typography mr={1}>
                  <PostAddSharp htmlColor="#232" />
                </Typography>
                <Typography style={styles.menu_style}>Posts</Typography>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setStatePage("blog_category_management");
                  SaveState("blog_category_management");
                }}
              >
                <Typography mr={1}>
                  <Category htmlColor="#232" />
                </Typography>
                <Typography style={styles.menu_style}>Category</Typography>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setStatePage("blog_view_management");
                  SaveState("blog_view_management");
                }}
              >
                <Typography mr={1}>
                  <VisibilitySharp htmlColor="#232" />
                </Typography>
                <Typography style={styles.menu_style}>Views</Typography>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setStatePage("blog_comment_management");
                  SaveState("blog_comment_management");
                }}
              >
                <Typography mr={1}>
                  <CommentSharp htmlColor="#232" />
                </Typography>
                <Typography style={styles.menu_style}>Comments</Typography>
              </ListItemButton>
            </ListItem>
          </Collapse>
          {/* BLOGS MENU END HERE */}
          <ListItem disableGutters>
            <ListItemButton>
              <Typography mr={1}>
                <Payment fontSize="small" />
              </Typography>
              <Typography style={styles.menu_style}>
                Payment Management
              </Typography>
              <ArrowDropDown />
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton>
              <Typography mr={1}>
                <Diversity3Sharp fontSize="small" />
              </Typography>
              <Typography style={styles.menu_style}>
                Vendor Management
              </Typography>
              <ArrowDropDown />
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton>
              <Typography mr={1}>
                <Diversity2 fontSize="small" />
              </Typography>
              <Typography style={styles.menu_style}>
                Advertisor Management
              </Typography>
              <ArrowDropDown />
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton>
              <Typography mr={1}>
                <RssFeed fontSize="small" />
              </Typography>
              <Typography style={styles.menu_style}>
                Request Management
              </Typography>
              <ArrowDropDown />
            </ListItemButton>
          </ListItem>
          <Divider>Marketplace</Divider>
          {/* MARKETPLACE MENU START HERE */}
          <Box>
            {shopes.map((menus) => (
              <ListItem disableGutters>
                <ListItemButton onClick={menus.onClick}>
                  <Typography mr={1}>{menus.left_icon}</Typography>
                  <Typography
                    style={styles.menu_style}
                    textTransform={"capitalize"}
                  >
                    {menus.name}
                  </Typography>
                  <ArrowDropDown />
                </ListItemButton>
              </ListItem>
            ))}
          </Box>
          {/* MARKETPLACE MENU END HERE */}
          <ListItem disableGutters>
            <ListItemButton>
              <Typography mr={1}>
                <Diversity1Rounded fontSize="small" />
              </Typography>
              <Typography style={styles.menu_style}>
                Users Management
              </Typography>
              <ArrowDropDown />
            </ListItemButton>
          </ListItem>

          <ListItem disableGutters>
            <ListItemButton>
              <Typography mr={1}>
                <Security fontSize="small" htmlColor="#232" />
              </Typography>
              <Typography style={styles.menu_style}>
                Security Management
              </Typography>
              <ArrowDropDown />
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton>
              <Typography mr={1}>
                <Settings fontSize="small" htmlColor="#232" />
              </Typography>
              <Typography style={styles.menu_style}>
                Setting Management
              </Typography>
              <ArrowDropDown />
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              onClick={logout}
              sx={{
                border: "1px solid #232",
                color: "#232",
                borderRadius: 2,
                transition: ".5s",
                "&:hover": {
                  backgroundColor: "#232",
                  color: "white",
                },
              }}
            >
              <Typography mr={1}>
                <Logout fontSize="small" />
              </Typography>
              <Typography style={styles.menu_style}>Logout</Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      {/* RANDER ALL DASHBOARD PAGE HERE */}
      {StatePage === "admin_dashboard" ? (
        <AdminDashboard />
      ) : StatePage === "blog_management" ? (
        <BlogManagement />
      ) : StatePage === "blog_category_management" ? (
        <BlogCategoryManagement />
      ) : StatePage === "blog_comment_management" ? (
        <BlogCommentManagement />
      ) : StatePage === "blog_view_management" ? (
        <BlogViewsManagement />
      ) : (
        "page not found"
      )}
    </div>
  );
};

export default AdminDashboardSidebar;
