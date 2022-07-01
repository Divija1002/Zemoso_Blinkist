import { Box, Divider, Grid, Tab, Tabs } from "@mui/material";
import React from "react";
import Category from "../../molecules/Category";
import Theme from "../../../Theme/ThemeFile";
import { useNavigate } from "react-router-dom";
import { NAV_ITEMS } from "../../Constants";

export interface ExploreType {
  Open: boolean;
}

const Explore = ({ Open }: ExploreType) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/Entrepreneurship");
  };

  if (!Open) return null;

  const NavItems = NAV_ITEMS;

  const subtitle3: React.CSSProperties = {
    fontFamily: "Cera Pro",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "20px",
    letterSpacing: "0em",
    textAlign: "left",
    color: "#116BE9",
  };

  return (
    <Box
      sx={{
        // marginTop: "86px",
        height: "398px",
        backgroundColor: "#F1F6F4",
        paddingTop: "30px",
        position: "fixed",
        zIndex: 10,
        // border: "1px solid black",
      }}
    >
      <Box
        sx={{
          marginTop: "30px",
          paddingLeft: "250px",
          paddingRight: "467px",
          height: "20px",
          // display: "flex",
          // gap: "200px",
          // justifyContent: "space-between",
        }}
      >
        {/* <Typography sx={subtitle3}>Explore by category</Typography>
        <Typography variant="body1">See recently added titles</Typography>
        <Typography variant="body1">See popular titles</Typography> */}
        <Tabs>
          <Tab
            label="Explore by category"
            sx={Object.assign({}, subtitle3, { paddingRight: "130px" })}
          />
          <Tab
            label="See recently added titles"
            sx={Object.assign({}, Theme.typography.body1, {
              paddingRight: "120px",
            })}
          />
          <Tab label="See popular titles" sx={Theme.typography.body1} />
        </Tabs>
      </Box>
      <Box
        sx={{ paddingLeft: "250px", paddingRight: "250px", paddingTop: "24px" }}
      >
        <Divider variant="fullWidth" sx={{ border: "1px solid #042330" }} />
      </Box>
      <Grid
        container
        sx={{
          paddingLeft: "250px",
          paddingRight: "250px",
          paddingTop: "32px",
          rowGap: "28px",
        }}
      >
        {NavItems.map((navitem) => (
          <Grid item md={4} key={navitem.id}>
            {navitem.value === "Entrepreneurship" ? (
              <Category image={navitem.img} onclick={() => handleClick()}>
                {navitem.value}
              </Category>
            ) : (
              <Category image={navitem.img}>{navitem.value}</Category>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Explore;
