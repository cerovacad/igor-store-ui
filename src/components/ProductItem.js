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

const styles = {
  card: {
    maxWidth: 300,
    marginBottom: "2rem"
  },
  media: {
    objectFit: "cover"
  }
};

function ImgMediaCard(props) {
  const { classes, images, name, description } = props;
  return (
    <Card className={classes.card}>
      {console.log(props)}
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
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {name}
          </Typography>
          <Typography component="p">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button>
          <AddShoppingCartIcon />
        </Button>
        <Button>
          <FavoriteIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImgMediaCard);
