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
    isFavorite: false
  };

  componentDidMount() {
    const n = this.props.favorites.includes(this.props._id);
    if (n) {
      this.setState({ isFavorite: true });
    }
  }

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
    const { isFavorite } = this.state;
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
          <Button>
            <AddShoppingCartIcon />
          </Button>
          <Button onClick={this.handleFavorite}>
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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
    favorites: state.favorites
  };
};

export default connect(
  mapStateToProps,
  { addToFavorites, removeFromFavorites }
)(withStyles(styles)(ImgMediaCard));
