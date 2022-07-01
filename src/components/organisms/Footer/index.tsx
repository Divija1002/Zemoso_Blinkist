import React from "react";
import { Box } from "@mui/material";
import Typography from "../../atoms/Typography";

const Footer = () => {
  const betaSubtitle1: React.CSSProperties = {
    fontFamily: "Cera Pro",
    fontSize: "24px",
    fontWeight: "500",
    lineHeight: "32px",
    textAlign: "left",
    color: "#0365F2",
  };

  const gammaCaption1: React.CSSProperties = {
    fontFamily: "Cera Pro",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "22px",
    textAlign: "left",
    color: "#6D787E",
  };

  const betaBody1: React.CSSProperties = {
    fontFamily: "Cera Pro",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "24px",
    letterSpacing: "0px",
    textAlign: "left",
    color: "#03314B",
  };

  const betaBody2: React.CSSProperties = {
    fontFamily: "Cera Pro",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0px",
    textAlign: "left",
    color: "#6D787E",
  };

  return (
    <Box
      sx={{
        height: "370px",
        marginTop: "111px",
        background: "#F1F6F4",
      }}
    >
      <Box
        sx={{
          paddingLeft: "244px",
          paddingTop: "38px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "350px",
          }}
        >
          <Box
            component="img"
            src="images/Blinklist 1.png"
            alt="logo"
            sx={{ height: "24px" }}
          ></Box>
          <Box
            sx={{
              paddingTop: "32px",
              height: "64px",
            }}
          >
            <Typography sx={betaSubtitle1}>
              Big ideas in small packages Start learnign now
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            marginLeft: "32px",
            width: "214px",
            display: "flex",
            flexDirection: "column",
            rowGap: "16px",
          }}
        >
          <Typography sx={betaBody1}>Editorial</Typography>
          <Typography sx={betaBody2}>Book lists</Typography>
          <Typography sx={betaBody2}>What is Nonfiction?</Typography>
          <Typography sx={betaBody2}>What to read next?</Typography>
          <Typography sx={betaBody2}>Benefits of reading</Typography>
        </Box>
        <Box
          sx={{
            marginLeft: "32px",
            width: "214px",
            display: "flex",
            flexDirection: "column",
            rowGap: "16px",
          }}
        >
          <Typography sx={betaBody1}>Useful links</Typography>
          <Typography sx={betaBody2}>Pricing</Typography>
          <Typography sx={betaBody2}>Blinkist business</Typography>
          <Typography sx={betaBody2}>Gift cards</Typography>
          <Typography sx={betaBody2}>Blinkist magaine</Typography>
          <Typography sx={betaBody2}>Contact & help</Typography>
        </Box>
        <Box
          sx={{
            marginLeft: "32px",
            width: "214px",
            display: "flex",
            flexDirection: "column",
            rowGap: "16px",
          }}
        >
          <Typography sx={betaBody1}>Company</Typography>
          <Typography sx={betaBody2}>About</Typography>
          <Typography sx={betaBody2}>Careers</Typography>
          <Typography sx={betaBody2}>partners</Typography>
          <Typography sx={betaBody2}>Code of Conduct</Typography>
        </Box>
      </Box>
      <Box sx={{ paddingLeft: "244px", paddingTop: "48px", height: "22px" }}>
        <Typography sx={gammaCaption1}>
          © Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy
          Policies
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
