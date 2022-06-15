import react, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
// import Grid from "@mui/material/Grid";
import { Drawer, Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
import Home from "../components/dashboards/Home";
import Settings from "../components/dashboards/Settings";
const drawerWidth = 240;
const pages = ["home", "dashboard", "profile", "settings"];

const dashboard = () => {
  const [pageView, setPageView] = useState("home");
  const { user } = useAuth();

  useEffect(() => {
    return () => {};
  }, []);

  const DashboardSwitch = () => {
    switch (pageView) {
      case "home":
        return <Home />;
      case "dashboard":
        return "Dashboard";
      case "profile":
        return "Profile";
      case "settings":
        return <Settings />;
      default:
        return <Home />;
    }
  };
  const changeView = (view) => {
    setPageView(view);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ zIndex: 1 }}>
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
              <ul>
                {" "}
                {pages.map((view) => (
                  <div key={view}>
                    <li
                      onClick={() => {
                        changeView(view);
                      }}
                    >
                      {view}
                    </li>
                  </div>
                ))}
              </ul>
            </Box>
          </Drawer>
        </div>
        <div style={{ zIndex: 1 }}>
          <Toolbar />
          <DashboardSwitch pageView={pageView} />
        </div>
      </div>
    </>
  );
};
export default dashboard;
