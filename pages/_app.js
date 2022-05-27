import NavBar from "../components/NavBar";
import { AuthContextProvider, useAuth } from "../context/authContext";
import { useRouter } from "next/router";
import "../styles/globals.scss";
import ProtectedRoutes from "../components/ProtectedRoutes";
import UnProtectedandLoggedIn from "../components/UnProtectedandLoggedIn";

function MyApp({ Component, pageProps }) {
  //Add all unprotected routes here
  const unProtectedRoutes = ["/login", "/signup", "/"];
  const router = useRouter();
  const user = useAuth();
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        {/* Check for path type and route accordingly */}
        {unProtectedRoutes.includes(router.pathname) ? (
          <>
            {user ? (
              <UnProtectedandLoggedIn>
                {" "}
                <Component {...pageProps} />{" "}
              </UnProtectedandLoggedIn>
            ) : (
              <Component {...pageProps} />
            )}
          </>
        ) : (
          <ProtectedRoutes>
            <Component {...pageProps} />
          </ProtectedRoutes>
        )}
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
