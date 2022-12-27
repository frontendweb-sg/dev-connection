import React, { useEffect } from "react";
import Alert from "../components/Snackbar";
import { useAuth } from "../context/Auth";
import Routers from "../routers";

/**
 * App component
 * @returns
 */
function App() {
  const { checkUserIsLoggedIn } = useAuth();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      checkUserIsLoggedIn();
    }
  }, [checkUserIsLoggedIn]);

  return (
    <>
      <Alert />
      <Routers />
    </>
  );
}

export default App;
