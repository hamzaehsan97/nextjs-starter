import react, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import Drawer from "../components/Drawer";
import Grid from "@mui/material/Grid";
import DashProvider from "../context/dashProvider";

const dashboard = () => {
  const { user, changeProfilePhoto } = useAuth();

  useEffect(() => {
    return () => {};
  }, [user]);
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
        <Drawer />
      </Grid>
      <Grid item>
        {/* <div>
          <h1>Dashboard</h1>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <button onClick={handleProfilePhotoChange}>Upload</button>
        </div> */}
        <DashProvider />
      </Grid>
    </Grid>
  );
};
export default dashboard;
