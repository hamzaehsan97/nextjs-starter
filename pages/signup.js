import React, { useState } from "react";
import { TextField, InputLabel, Input, Button } from "@mui/material";
import { useAuth } from "../context/authContext";
import { useRouter } from "next/router";

const Signup = () => {
  const { user, signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSignup = async () => {
    try {
      await signup(email, password);
      router.push("/dashboard");
    } catch (error) {
      console.log("Error = ", error);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form>
        <div
          style={{
            display: "flex",
            gap: 10 + "px",
            flexDirection: "column",
            width: 50 + "%",
          }}
        >
          <TextField
            label="Email"
            variant="filled"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            variant="filled"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleSignup()}
          >
            Signup
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
