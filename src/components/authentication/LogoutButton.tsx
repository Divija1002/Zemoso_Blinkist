import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface LogoutButtonType {
  LogoutOpen: boolean;
}

const LogoutButton = ({ LogoutOpen }: LogoutButtonType) => {
  const { logout } = useAuth0();

  if (!LogoutOpen) return null;

  return (
    <button onClick={() => logout({ returnTo: "http://localhost:8080/" })}>
      Log Out
    </button>
  );
};

export default LogoutButton;
