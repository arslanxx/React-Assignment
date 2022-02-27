import { makeStyles } from "@material-ui/core";

export const appBarStyle = makeStyles((theme) => ({
  header: {
    backgroundColor: "#000 !important",
    alignItems: "center",
  },
  header_img: {
    width: "50%",
    padding: "30px",
  },
}));

export const headerBtmText = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
    color: "#000",
    margin: "25px",
  },
}));

export const componentStyles = makeStyles((theme) => ({
  priceFilter: {
    justifyContent: "space-evenly",
  },
  priceFilterText: {
    fontSize: "1.2rem !important",
    fontWeight: "bold !important",
  },
  rangeFilter: {
    justifyContent: "space-evenly",
    margin: "25px 0px ",
  },
  rangeFilterText: {
    fontSize: "1.2rem !important",
    fontWeight: "bold !important",
  },
  rangeFilterSlider: {
    width: "35% !important",
  },
}));

export const dropDown = makeStyles((theme) => ({
  dropDownContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: "25px",
  },
  dropbox: {
    width: "45%",
  },
}));

export const CardStyles = makeStyles((theme) => ({
  cardHeaderText: {
    whiteSpace: "nowrap",
    overflow: "hidden !important",
    textOverflow: "ellipsis !important",
  },
  cardAlign: {
    display: "flex",
    flexDirection: "column",
  },
}));

export const footerStyle = makeStyles((theme) => ({
  footerLayout: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: "10%",
    padding: "2% 10% 2% 10% ",
    backgroundColor: "#000 !important",
    color: "#fff",
    textAlign: "center",
  },
  fontBold: {
    fontWeight: "bold",
  },
  img: {
    width: "60%",
  },
}));
