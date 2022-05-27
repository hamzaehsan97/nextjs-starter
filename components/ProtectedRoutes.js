import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/authContext";

const ProtectedRoutes = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [router, user]);
  return <>{user ? children : null}</>;
};

export default ProtectedRoutes;
