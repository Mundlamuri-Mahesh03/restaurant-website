import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Link } from "react-router-dom";
import "../../styles/headerstyle.css";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  //handel memu click
  const handelDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //drawer
  const drawer = (
    <Box onClick={handelDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        varient="h6"
        component="div"
        sx={{ flexGrow: 1, my:2 }}
      >
         <FastfoodIcon/>
        My Resturant
      </Typography>
      <Divider/>
      <ul className="mobile-navigation">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open-drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" }, "& .MuiDrawer-paper":{
                boxSizing :'border-box',
                width: '240px',
              } }}
              onClick={handelDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              varient="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            varient="temporary"
            open={mobileOpen}
            onClose={handelDrawerToggle}
            sx={{ dispaly: { xs: "block", sm: "none" } }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box >

        </Box>
        <Toolbar/>
      </Box>
    </>
  );
};

export default Header;
