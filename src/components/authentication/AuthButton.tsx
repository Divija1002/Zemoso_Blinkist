import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

interface AuthButtonType {
  AuthOpen: boolean;
}

const AuthButton = ({ AuthOpen }: AuthButtonType) => {
  const { isAuthenticated } = useAuth0();

  if (!AuthOpen) return null;
  return <>{!isAuthenticated ? <LoginButton /> : <LogoutButton />}</>;
};

export default AuthButton;
