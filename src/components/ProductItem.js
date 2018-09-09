import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { connect } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites
} from "../actions/favoritesActions";
import { addToCart, removeFromCart } from "../actions/cartActions";

const styles = {
  card: {
    maxWidth: 180,
    marginBottom: "2rem"
  },
  media: {
    objectFit: "cover"
  }
};

class ImgMediaCard extends React.Component {
  state = {
    isFavorite: false,
    isAddedToCart: false
  };

  componentDidMount() {
    const isNotFavorite = this.props.favorites.includes(this.props._id);
    if (isNotFavorite) {
      this.setState({ isFavorite: true });
    }
    const isNotAddedToCart = this.props.cart.includes(this.props._id);
    if (isNotAddedToCart) {
      this.setState({ isAddedToCart: true });
    }
  }

  handleCart = () => {
    if (this.state.isAddedToCart) {
      this.props.removeFromCart(this.props._id);
      this.setState({ isAddedToCart: !this.state.isAddedToCart });
    } else {
      this.props.addToCart(this.props._id);
      this.setState({ isAddedToCart: !this.state.isAddedToCart });
    }
  };

  handleFavorite = () => {
    if (this.state.isFavorite) {
      this.props.removeFromFavorites(this.props._id);
      this.setState({ isFavorite: !this.state.isFavorite });
    } else {
      this.props.addToFavorites(this.props._id);
      this.setState({ isFavorite: !this.state.isFavorite });
    }
  };

  render() {
    const { classes, images, name, price } = this.props;
    const { isFavorite, isAddedToCart } = this.state;
    return (
      <Card square={true} elevation={0} className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            height="140"
            image={`https://igor-store-api-v1.herokuapp.com/static/images/${
              images[0]
            }`}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="headline" component="h3">
              {name}
            </Typography>
            <Typography component="p">{price}$</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={this.handleCart}>
            {isAddedToCart ? (
              <AddShoppingCartIcon color="secondary" />
            ) : (
              <AddShoppingCartIcon />
            )}
          </Button>
          <Button onClick={this.handleFavorite}>
            {isFavorite ? (
              <FavoriteIcon color="secondary" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </Button>
        </CardActions>
      </Card>
    );
  }
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    favorites: state.favorites,
    cart: state.cart,
  };
};

export default connect(
  mapStateToProps,
  { addToFavorites, removeFromFavorites, addToCart, removeFromCart }
)(withStyles(styles)(ImgMediaCard));
