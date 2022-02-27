import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import logo from "../../assets/sony_logo.png";
import { appBarStyle } from "../../styles/appStyles";

export default function ButtonAppBar() {
  const classes = appBarStyle();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={classes.header} position="static">
        <img className={classes.header_img} src={logo} />
      </AppBar>
    </Box>
  );
}
