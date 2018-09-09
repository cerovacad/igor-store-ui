import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productsActions";
import ProductsGrid from "../components/ProductGrid";

class Home extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return <ProductsGrid />;
  }
}

export default connect(
  null,
  { fetchProducts }
)(Home);
