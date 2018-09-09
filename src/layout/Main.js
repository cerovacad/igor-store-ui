import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = {
  main: {
    width: "95%",
    margin: "0 auto"
  }
};

const Main = ({ children, classes }) => <div className={classes.main}>{children}</div>;

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
