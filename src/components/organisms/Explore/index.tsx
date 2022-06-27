import { Box, Divider, Typography, Grid, Tab, Tabs } from "@mui/material";
import React from "react";
import Category from "../../molecules/Category";
import Theme from "../../../Theme/ThemeFile";
import { useNavigate } from "react-router-dom";

export interface ExploreType {
  Open: boolean;
}

const Explore = ({ Open }: ExploreType) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/Entrepreneurship");
  };

  if (!Open) return null;

  const NavItems = [
    {
      id: 1,
      img: "images/Vector4.png",
      value: "Entrepreneurship",
    },
    {
      id: 2,
      img: "images/Vector5.png",
      value: "Politics",
    },
    {
      id: 3,
      img: "images/Vector6.png",
      value: "Marketing & Sales",
    },
    {
      id: 4,
      img: "images/Vector7.png",
      value: "Science",
    },
    {
      id: 5,
      img: "images/Vector8.png",
      value: "Health & Nutrition",
    },
    {
      id: 6,
      img: "images/Vector9.png",
      value: "Personal Development",
    },
    {
      id: 7,
      img: "images/Vector10.png",
      value: "Economics",
    },
    {
      id: 8,
      img: "images/Vector11.png",
      value: "History",
    },
    {
      id: 9,
      img: "images/Vector12.png",
      value: "Communication Skills",
    },
    {
      id: 10,
      img: "images/Vector13.png",
      value: "Corporate Culture",
    },
    {
      id: 11,
      img: "images/Vector14.png",
      value: "Motivation & Inspiration",
    },
    {
      id: 12,
      img: "images/Vector15.png",
      value: "Money & Investments",
    },
    {
      id: 13,
      img: "images/Vector16.png",
      value: "Psychology",
    },
    {
      id: 14,
      img: "images/Vector17.png",
      value: "Productivity",
    },
    {
      id: 15,
      img: "images/Vector18.png",
      value: "Sex & Relationship",
    },
    {
      id: 16,
      img: "images/Vector19.png",
      value: "Nature & Environment",
    },
    {
      id: 17,
      img: "images/Vector20.png",
      value: "Career & Success",
    },
    {
      id: 18,
      img: "images/Vector21.png",
      value: "Education",
    },
  ];

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
