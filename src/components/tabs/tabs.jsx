import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "./TabPanel";
// import PropTypes from "prop-types";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//       style={{ padding: 0 }}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </div>
//   );
// } 

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MyTabs({ arrs, tabsData,WIDTHSIZE }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", height: 350 }}>
      <Box
        sx={{
          maxWidth: { xs: 320, sm: WIDTHSIZE },
          bgcolor: "",
          color: "#fff",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          {arrs.map((el, i) => (
            <Tab
              sx={{ color: "#fff" }}
              key={i}
              label={`${el}`}
              {...a11yProps(i)}
            />
          ))}
        </Tabs>
      </Box>
      {arrs?.map((el, i) => (
        <TabPanel key={i} value={value} index={i}>
          {tabsData[el]}
        </TabPanel>
      ))}
    </Box>
  );
}
