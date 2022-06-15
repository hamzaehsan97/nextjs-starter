import react, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Drawer, Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";

const drawerWidth = 240;
const pages = ["home", "dashboard", "profile", "settings"];

const dashboard = () => {
  const [pageView, setPageView] = useState("home");
  const { user, changeProfilePhoto } = useAuth();

  // useEffect(() => {
  //   return () => {};
  // }, [user]);
  const [file, setFile] = useState(null);

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleProfilePhotoChange = async (event) => {
    changeProfilePhoto(file);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Grid item>
        <Drawer
          variant="permanent"
          className="dash-drawer"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              zIndex: "-1",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto", paddingTop: 20 + "px" }}>
            <List>
              {pages.map((page) => (
                <ListItem key={page} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      setPageView({ page });
                      console.log("Changes were made");
                    }}
                  >
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={page} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Grid>
      <Grid item style={{ marginTop: 300 + "px" }}>
        {/* <div>
          <h1>Dashboard</h1>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <button onClick={handleProfilePhotoChange}>Upload</button>
        </div> */}
        {/* <h1> {pageView}</h1> */}
      </Grid>
    </Grid>
  );
};
export default dashboard;
