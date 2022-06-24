import React, { Fragment } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import Theme from "../../../Theme/ThemeFile";

const BookDetailsViewTab = () => {
  const [value, setValue] = React.useState("Synopsis");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <Box
        sx={{
          width: "600px",
          height: "36px",
          paddingTop: "60px",
          paddingLeft: "264px",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#22C870",
            },
          }}
          component={Box}
          variant="fullWidth"
        >
          <Tab value="Synopsis" label="Synopsis" sx={Theme.typography.body1} />
          <Tab
            value="Who is it for?"
            label="Who is it for?"
            sx={Theme.typography.body2}
          />
          <Tab
            value="About the author"
            label="About the author"
            sx={Theme.typography.body2}
          />
        </Tabs>
      </Box>
      <Box
        sx={{
          paddingLeft: "264px",
          paddingBottom: "257px",
          height: "100px",
          width: "600px",
          paddingTop: "20px",
        }}
      >
        <Typography variant="body2">
          Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill
          Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for
          the entrepreneurs, visionaries, and innovators of today. This new
          edition combines the timeless business advice and strategy of the
          original text, supplemented with cutting-edge insights and case
          studies pertinent to today’s business world.
        </Typography>
      </Box>
    </Fragment>
  );
};

export default BookDetailsViewTab;
