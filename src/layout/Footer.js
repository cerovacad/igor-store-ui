import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  footer: {
    textAlign: 'center',
  },
};

const Footer = ({ classes }) => (
  <div className={classes.footer}>
    <Typography>Footer</Typography>
  </div>  
);

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);