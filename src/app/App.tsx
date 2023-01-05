import React, { useEffect } from "react";
import Confirmation from "../components/ConfirmDialog";
import Alert from "../components/Snackbar";
import { useConfirm } from "../context/Confirmation";

import { useAuth } from "../hooks/useAuth";
import Routers from "../routers";

/**
 * App component
 * @returns
 */
function App() {
  const { checkUserIsLoggedIn } = useAuth();
  const { confirm, onCloseConfirm } = useConfirm();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      checkUserIsLoggedIn();
    }
  }, [checkUserIsLoggedIn]);

  return (
    <>
      <Alert />
      {confirm.open && (
        <Confirmation confirm={confirm} onClose={onCloseConfirm!} />
      )}
      <Routers />
    </>
  );
}

export default App;
