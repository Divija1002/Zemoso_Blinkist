import React from "react";
import { Tab, Tabs, Box } from "@mui/material";
import { textAlign } from "@mui/system";

const BoxStyle: React.CSSProperties = {
  marginLeft: "264px",
  marginTop: "60px",
  width: "912px",
  borderBottom: 1,
  borderColor: "divider",
};

interface HeaderTabType {
  tabStyle: React.CSSProperties;
  passValue: (value: string) => void;
}

const HeaderTab = ({ tabStyle, passValue }: HeaderTabType) => {
  const [value, setValue] = React.useState("Currently reading");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    newValue === "Finished" ? passValue("finished") : passValue("reading");
  };

  return (
    <Box sx={BoxStyle}>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#22C870",
            width: "304px",
          },
        }}
        component={Box}
      >
        <Tab
          value="Currently reading"
          label="Currently reading"
          sx={Object.assign({}, tabStyle, { paddingRight: "151px" })}
        />
        <Tab value="Finished" label="Finished" sx={tabStyle} />
      </Tabs>
    </Box>
  );
};

export default HeaderTab;
