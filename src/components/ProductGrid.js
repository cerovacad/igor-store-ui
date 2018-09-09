import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';

const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }
};

const ProductGrid = ({ classes, products }) => (
  <div className={classes.grid}>
    {products.map((product) => {
      return <ProductItem key={product._id} {...product} />
    })}
  </div>  
);

ProductGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(withStyles(styles)(ProductGrid));