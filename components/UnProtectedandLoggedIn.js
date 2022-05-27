import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/authContext";

const UnProtectedandLoggedIn = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [router, user]);
  return <>{!user ? children : null}</>;
};

export default UnProtectedandLoggedIn;
