import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import { useAuth } from "../context/authContext";
import { Avatar, Button } from "@mui/material";
import { useRouter } from "next/router";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const NavBar = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const tryLogout = () => {
    try {
      logout()
        .then(() => {
          setAnchorEl(null);
          router.push("/login");
        })
        .catch((err) => {
          console.log("error", err);
        });
    } catch (error) {
      console.log("Error = ", error);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Grid container direction="row">
        <Grid item xs={6} md={3}>
          <h1>Logo</h1>
        </Grid>
        <Grid item xs={6} md={9}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              height: "100%",
              gap: 10 + "px",
              marginRight: 20 + "px",
            }}
          >
            {user ? (
              <>
                <Avatar
                  alt={user.displaName}
                  src={user.photoURL}
                  onClick={handleClick}
                />
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  style={{ marginTop: 50 + "px" }}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>Settings</MenuItem>
                  <MenuItem onClick={() => tryLogout()}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <span>
                  <a href="/signup">Sign-up</a>
                </span>
                <span>
                  <a href="/login">Login</a>
                </span>
              </>
            )}
          </div>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default NavBar;
