import React, { Fragment } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import Theme from "../../../Theme/ThemeFile";

interface BookDetailsViewTabType {
  passValue: (value: string) => void;
}

const BookDetailsViewTab = ({ passValue }: BookDetailsViewTabType) => {
  const [value, setValue] = React.useState("Synopsis");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    passValue(newValue);
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
    </Fragment>
  );
};

export default BookDetailsViewTab;
