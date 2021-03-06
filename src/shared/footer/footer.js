import { Typography } from "@mui/material";
import { Grid } from "@material-ui/core";
import logo from "../../assets/sony_logo.png";
import { footerStyle } from "../../styles/appStyles";

export default function Footer() {
  const footerClass = footerStyle();

  return (
    <Grid className={footerClass.footerLayout} container>
      <Grid item xs={9} sm={7} md={2} lg={2} xl={2}>
        <img src={logo} className={footerClass.img} alt="Moviedb" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2} xl={4}>
        <Typography
          className={footerClass.fontBold}
          variant="h5"
          color="inherit"
        >
          The Basics
        </Typography>
        <Typography variant="body1" color="inherit">
          About Sony
        </Typography>
        <Typography variant="body1" color="inherit">
          Contact Us
        </Typography>
        <Typography variant="body1" color="inherit">
          Support Fourms
        </Typography>
        <Typography variant="body1" color="inherit">
          API
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
        <Typography
          className={footerClass.fontBold}
          variant="h5"
          color="inherit"
        >
          Get Involved
        </Typography>
        <Typography variant="body1" color="inherit">
          TV{" "}
        </Typography>
        <Typography variant="body1" color="inherit">
          PlayStation
        </Typography>
        <Typography variant="body1" color="inherit">
          Walkman
        </Typography>
        <Typography variant="body1" color="inherit">
          Xperia
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
        <Typography
          className={footerClass.fontBold}
          variant="h5"
          color="inherit"
        >
          Community
        </Typography>
        <Typography variant="body1" color="inherit">
          Guidelines
        </Typography>
        <Typography variant="body1" color="inherit">
          Discussions
        </Typography>
        <Typography variant="body1" color="inherit">
          Facebook
        </Typography>
        <Typography variant="body1" color="inherit">
          Twitter
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
        <Typography
          className={footerClass.fontBold}
          variant="h5"
          color="inherit"
        >
          Legal
        </Typography>
        <Typography variant="body1" color="inherit">
          Terms of Use
        </Typography>
        <Typography variant="body1" color="inherit">
          API of Use
        </Typography>
        <Typography variant="body1" color="inherit">
          Privacy Ploicy
        </Typography>
        <Typography variant="body1" color="inherit">
          testing
        </Typography>
      </Grid>
    </Grid>
  );
}
