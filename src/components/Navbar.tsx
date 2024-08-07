"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { log } from "console";

const pages = ["ITR Filling", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"]; // after login

function Navbar() {
  const [activePage, setActivePage] = useState<Number>(0);
  const handleNavClick = (index: Number) => {
    console.log(index);
  };
  return (
    <AppBar position="relative" color="transparent">
      <Container>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DHANGURUS
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={() => handleNavClick(index)}
                sx={{ my: 2, mx: 2 }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box>
            <Button
              color="inherit"
              onClick={() => console.log("Clicked login")}
            >
              Login
            </Button>
            <Button
              color="inherit"
              onClick={() => console.log("Clicked sign up")}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
