import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import { useAuth } from "../context/authContext";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
const NavBar = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const tryLogout = () => {
    try {
      logout()
        .then(() => {
          router.push("/login");
        })
        .catch((err) => {
          console.log("error", err);
        });
    } catch (error) {
      console.log("Error = ", error);
    }
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
              <Button
                variant="contained"
                color="primary"
                onClick={() => tryLogout()}
              >
                Log out
              </Button>
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
