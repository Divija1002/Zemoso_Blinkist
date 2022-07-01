import { Typography, Box } from "@mui/material";
import React, { Fragment } from "react";
import LoginButton from "../../components/authentication/LoginButton";

const Login = () => {
  return (
    <Fragment>
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        You are Logged Out
      </Typography>
      <Box sx={{ paddingX: "800px", paddingTop: "10px" }}>
        <LoginButton />
      </Box>
    </Fragment>
  );
};

export default Login;
