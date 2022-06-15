import react, { useState, useEffect, useRef } from "react";
import { useAuth } from "../../context/authContext";

const Settings = () => {
  const { changeProfilePhoto } = useAuth();
  const ref = useRef(null);

  const [file, setFile] = useState(null);

  const onChange = (e) => {
    console.log(ref.current.value);
    setFile(e.target.files[0]);
  };

  const handleProfilePhotoChange = async (event) => {
    changeProfilePhoto(file);
  };
  return (
    <div>
      <h1>Settings</h1>

      <div>
        <h1>Dashboard</h1>
        <input ref={ref} type="file" defaultValue={null} onChange={onChange} />
        <button onClick={handleProfilePhotoChange}>Upload</button>
      </div>
    </div>
  );
};

export default Settings;
