import { Box } from "@mui/system";
import React, { Fragment, useState } from "react";
import { Typography } from "@mui/material";
import Explore from "../Explore";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const AvatarStyle: React.CSSProperties = {
    fontFamily: "Inter",
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "26px",
    textAlign: "center",
    color: "#FDFAFA",
    paddingTop: "6px",
  };

  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "86px",
        }}
      >
        <Box
          component="img"
          src="images/Blinklist 1.png"
          alt="logo"
          sx={{ paddingLeft: "250px", height: "26px" }}
          onClick={() => handleClick()}
        ></Box>

        <Box
          component="img"
          src="images/Vector.png"
          alt="logo"
          sx={{ paddingLeft: "42.91px", height: "20.31px" }}
        ></Box>
        <Typography variant="body1" sx={{ paddingLeft: "41px" }}>
          Explore
        </Typography>
        <Box
          component="img"
          src="images/Vector1.png"
          alt="arrow"
          sx={{ paddingLeft: "6.7px", height: "6px", width: "10.61px" }}
          onClick={() => setIsOpen(!isOpen)}
        ></Box>
        <Typography variant="body1" sx={{ paddingLeft: "40.7px" }}>
          My Library
        </Typography>
        <Box
          sx={{
            marginLeft: "456px",
            background: "#69A6E3",
            borderRadius: "19px",
            height: "40px",
            width: "40px",
          }}
        >
          <Typography sx={AvatarStyle}>A</Typography>
        </Box>
        <Box
          component="img"
          src="images/Vector1.png"
          alt="arrow"
          sx={{ paddingLeft: "6.7px", height: "6px", width: "10.61px" }}
        ></Box>
      </Box>
      <Explore Open={isOpen} />
    </Fragment>
  );
};

export default HeaderComponent;
