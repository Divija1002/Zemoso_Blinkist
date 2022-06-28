import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      style={{ position: "fixed", zIndex: 10, marginLeft: "1150px" }}
    >
      Log In
    </button>
  );
};

export default LoginButton;
