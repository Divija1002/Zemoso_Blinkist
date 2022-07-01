import { Box } from "@mui/system";
import React from "react";
import Typography from "../../atoms/Typography";
import { BANNER_TITLE, BANNER_SUBTITLE } from "../../Constants";

const Banner = () => {
  return (
    <Box
      sx={{
        height: "264px",
        width: "912px",
        backgroundColor: "#F1F6F4",
        marginLeft: "264px",
        marginTop: "32px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              paddingLeft: "45px",
              paddingTop: "45px",
              height: "90px",
              width: "319px",
              color: "#03314B",
            }}
          >
            <Typography variant="h1">{BANNER_TITLE}</Typography>
          </Box>
          <Box
            sx={{
              paddingLeft: "45px",
              paddingTop: "15px",
              height: "69px",
              width: "461px",
              color: "#6D787E",
            }}
          >
            <Typography variant="subtitle2">{BANNER_SUBTITLE}</Typography>
          </Box>
        </Box>
        <Box
          component="img"
          src="images/banner.png"
          alt="banner"
          sx={{
            paddingLeft: "112px",
            width: "249px",
            height: "230px",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Banner;
