import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() => logout({ returnTo: window.location.origin })}
      style={{ position: "fixed", zIndex: 10, marginLeft: "1150px" }}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
