import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import Badge from "@material-ui/core/Badge";
import { connect } from "react-redux";

const styles = {
  root: {
    flexGrow: 1,
    paddingBottom: "2rem",
    margin: "0 -1rem"
  },
  grow: {
    flexGrow: 1
  }
};

function SimpleAppBar(props) {
  const { classes, favorites, cart } = props;
  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="static" color="default">
        <Toolbar>
          <Button>
            <MenuIcon />
          </Button>
          <Button>
            <SearchIcon />
          </Button>
          <Typography className={classes.grow} variant="title" color="inherit">
            IgorStore
          </Typography>

          {favorites.length ? (
            <Button>
              <Badge
                badgeContent={favorites.length}
                color="secondary"
                classes={{ badge: classes.badge }}
              >
                <FavoriteIcon />
              </Badge>
            </Button>
          ) : (
            <Button>
              <FavoriteBorderIcon />
            </Button>
          )}
          {cart.length ? (
            <Button>
              <Badge
                badgeContent={cart.length}
                color="secondary"
                classes={{ badge: classes.badge }}
              >
                <ShoppingCartIcon />
              </Badge>
            </Button>
          ) : (
            <Button>
              <ShoppingCartOutlinedIcon />
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    favorites: state.favorites,
    cart: state.cart
  };
};

export default connect(mapStateToProps)(withStyles(styles)(SimpleAppBar));
