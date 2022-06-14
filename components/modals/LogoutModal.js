import React from "react";
import Modal from "@mui/material/Modal";
import { useAuth } from "../../context/authContext";
import { Box } from "@mui/system";
const LogoutModal = (props) => {
  const { logout } = useAuth();
  const tryLogout = () => {
    try {
      logout()
        .then(() => {
          props.closeFunc();
         
          router.push("/login");
        })
        .catch((err) => {
          console.log("error", err);
        });
    } catch (error) {
      console.log("Error = ", error);
    }
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={props.open}
      onClose={props.closeFunc}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <button onClick={tryLogout}>LOGOUT</button>
      </Box>
    </Modal>
  );
};

export default LogoutModal;
