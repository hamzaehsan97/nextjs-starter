import react, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import { getStorage, ref } from "firebase/storage";
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
    <div>
      <h1>Dashboard</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleProfilePhotoChange}>Upload</button>
    </div>
  );
};
export default dashboard;
